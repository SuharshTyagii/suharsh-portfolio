#!/usr/bin/env node

/**
 * Script to build the meals-poster-maker app and copy it to this repo
 * This script:
 * 1. Navigates to ../meals-poster-maker
 * 2. Runs npm run build
 * 3. Copies dist/* to public/meals-poster-maker/
 * 4. Fixes the paths in index.html
 */

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const portfolioRoot = path.join(__dirname, '..');
const mealsAppPath = path.join(portfolioRoot, '..', 'meal-poster-maker');
const distPath = path.join(mealsAppPath, 'dist');
const targetPath = path.join(portfolioRoot, 'public', 'meals-poster-maker');

console.log('🚀 Building and updating meals-poster-maker...\n');

// Step 1: Check if meals-poster-maker exists
if (!fs.existsSync(mealsAppPath)) {
  console.error(`❌ Error: meals-poster-maker not found at ${mealsAppPath}`);
  console.error('Make sure the meals-poster-maker project is in the parent directory.');
  process.exit(1);
}

console.log(`📁 Found meals-poster-maker at: ${mealsAppPath}`);

// Step 2: Build the app
try {
  console.log('\n🔨 Building meals-poster-maker...');
  execSync('npm run build', {
    cwd: mealsAppPath,
    stdio: 'inherit'
  });
  console.log('✅ Build completed!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Step 3: Check if dist folder exists
if (!fs.existsSync(distPath)) {
  console.error(`❌ Error: dist folder not found at ${distPath}`);
  process.exit(1);
}

// Step 4: Clean target directory
console.log('\n🧹 Cleaning target directory...');
if (fs.existsSync(targetPath)) {
  fs.rmSync(targetPath, { recursive: true, force: true });
}
fs.mkdirSync(targetPath, { recursive: true });

// Step 5: Copy files
console.log('📦 Copying files from dist to public/meals-poster-maker...');
function copyRecursive(src, dest) {
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      fs.mkdirSync(destPath, { recursive: true });
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  copyRecursive(distPath, targetPath);
  console.log('✅ Files copied successfully!');
} catch (error) {
  console.error('❌ Copy failed:', error.message);
  process.exit(1);
}

// Step 6: Fix paths
console.log('\n🔧 Fixing paths in index.html...');
try {
  execSync('npm run fix:meals-poster', {
    cwd: portfolioRoot,
    stdio: 'inherit'
  });
} catch (error) {
  console.error('❌ Path fixing failed:', error.message);
  process.exit(1);
}

console.log('\n🎉 All done! meals-poster-maker has been built and updated successfully!');
console.log(`📍 App is available at: /meals-poster-maker`);
