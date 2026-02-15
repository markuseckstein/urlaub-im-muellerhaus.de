# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for a German vacation rental property (Urlaub im Müllerhaus, Vogelsang-Warsin). Built with Astro 5.

## Commands

```bash
npm run dev             # Start dev server (runs IPTC extraction first)
npm run build           # Production build (runs IPTC extraction first)
npm run preview         # Serve the production build locally
npm run clean           # Clear Astro cache and dist/
npm run extract-iptc    # Extract IPTC captions from gallery images
npm run format          # Run Prettier on all source files
npm ci                  # Install dependencies (no special flags needed)
```

No test suite exists.

## Architecture

### Astro Configuration

- **astro.config.mjs**: Site URL, `build.format: 'directory'`
- **src/content.config.ts**: Content collection schemas (pages + sections) using Zod
- **scripts/extract-iptc.mjs**: Prebuild script that scans `src/img/gallery/**/*.jpg`, extracts IPTC captions, outputs `src/data/gallery-captions.json` (gitignored)

### Source Structure

- **src/pages/**: Astro page files. German page names: `wohnungen.astro`, `preise_und_buchung.astro`, `anfahrt.astro`, `umgebung.astro`, `garten.astro`, `impressum.astro`, `datenschutz.astro`
- **src/layouts/BaseLayout.astro**: Wraps all pages with `<html lang="de">`, Menu, CSS imports, GA4 script, easter-eggs.js
- **src/components/**: `Menu.astro` (nav + hamburger toggle), `Seo.astro` (head meta), `HeaderImage.astro` (hero CSS class), `Gallery.astro` (CSS grid + GLightbox)
- **src/content/pages/**: Markdown files for each page (one `.md` per page)
- **src/content/sections/**: Markdown files for reusable content blocks (asides, teasers)
- **src/css/**: Global styles. `main.css` (imports `fonts.css` and `header-images.css`), `normalize.min.css`
- **src/img/**: Source images (headers, logos, gallery subfolders)
- **src/scripts/easter-eggs.js**: "home" keyboard sequence reveals hidden distances on umgebung page
- **src/data/**: Generated data (gallery-captions.json, gitignored)

### Content Editing

Content is in Markdown files under `src/content/`. Non-technical editors can update text via GitHub's web UI. Each page has frontmatter with `title`, `seoTitle`, `headerImage`, and optionally `gallery`.

### Image Galleries

GLightbox for lightbox functionality. Gallery component uses `import.meta.glob` to load images from `src/img/gallery/{folder}/` and reads captions from the generated `gallery-captions.json`.

### Deployment

- **PRs**: GitHub Actions builds the site (validation only)
- **Merge to master**: GitHub Actions builds + deploys via FTP using `SamKirkland/FTP-Deploy-Action@v4`. FTP credentials in repository secrets (`FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, `REMOTE_DIR`). Build output is `dist/`.

## Code Style

Prettier config (`.prettierrc`):

- No semicolons (`"semi": false`)
- Arrow function parens omitted when possible (`"arrowParens": "avoid"`)
- Astro plugin for `.astro` file formatting
