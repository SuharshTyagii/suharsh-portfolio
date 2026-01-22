# Meals Poster Maker Setup

This folder contains a built Vue 3 app (from the `dist` folder).

## How to update the app

When you have a new build of the meals-poster-maker app:

1. **Copy the dist folder contents** to `public/meals-poster-maker/`
   ```bash
   # Delete old files
   rm -rf public/meals-poster-maker/*
   
   # Copy new dist files
   cp -r /path/to/meals-poster-maker/dist/* public/meals-poster-maker/
   ```

2. **Run the fix script** to convert absolute paths to relative paths:
   ```bash
   npm run fix:meals-poster
   ```

3. **Restart your dev server** if it's running

That's it! The app should now work at `/meals-poster-maker`

## What the fix script does

The script automatically:
- Converts `/assets/...` to `./assets/...`
- Converts `/vite.svg` to `./vite.svg`
- Fixes any other absolute paths to relative paths

This is necessary because Nuxt serves the app from a subdirectory, not the root.
