#!/usr/bin/env node

/**
 * Script to fix absolute paths to relative paths in the meals-poster-maker index.html
 * Run this after copying the dist folder to public/meals-poster-maker
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const indexPath = path.join(__dirname, '../public/meals-poster-maker/index.html');

console.log('🔧 Fixing paths in meals-poster-maker/index.html...');

try {
  // Read the file
  let content = fs.readFileSync(indexPath, 'utf8');

  // Replace absolute paths with relative paths
  // Fix script src paths
  content = content.replace(/src="\/assets\//g, 'src="./assets/');

  // Fix link href paths
  content = content.replace(/href="\/assets\//g, 'href="./assets/');

  // Fix icon paths
  content = content.replace(/href="\/vite\.svg"/g, 'href="./vite.svg"');

  // Fix any other common absolute paths
  content = content.replace(/src="\/([^"]+)"/g, (match, p1) => {
    if (p1.startsWith('http')) return match; // Don't change external URLs
    return `src="./${p1}"`;
  });

  content = content.replace(/href="\/([^"]+)"/g, (match, p1) => {
    if (p1.startsWith('http')) return match; // Don't change external URLs
    if (p1.startsWith('.')) return match; // Already relative
    return `href="./${p1}"`;
  });

  // Write the file back
  fs.writeFileSync(indexPath, content, 'utf8');

  console.log('✅ Successfully fixed all paths!');
  console.log('📝 Changed absolute paths (/) to relative paths (./)');
} catch (error) {
  console.error('❌ Error fixing paths:', error.message);
  process.exit(1);
}
