# Across the Pool

Promotional website for *Across the Pool*, a fictional LGBTQ+ coming-of-age romantic comedy/drama set on a ten-day family holiday in Menorca.

Live at: https://rectifysoftware.github.io/atpwebsite/

Static site, no build step, no framework. Open `index.html` directly or deploy the folder as-is to any static host (Netlify, GitHub Pages, Vercel, etc).

## Structure

- `index.html`, `about.html`, `characters.html`, `story.html`, `episodes.html`, `gallery.html`, `trailer.html`, `behind-the-story.html` — the site's pages.
- `assets/css/style.css` — all styling.
- `assets/js/data.js` — **all story content lives here**: the timeline, episodes, characters, gallery, quotes, the confirmed/plausible/unconfirmed tracker, and the "Sam's Brain" gag lines. Add new story developments by editing this file; no page markup needs to change.
- `assets/js/main.js` — renders the data into each page and drives the interactive bits (timeline, tracker, theories poll, flip cards, gallery lightbox, trailer placeholder).

## Adding a new story day / episode / gallery image

Open `assets/js/data.js` and add an entry to the relevant array (`timeline`, `episodes`, `gallery`, etc). The site re-renders from that data automatically.

## Images

All imagery is free stock photography from Unsplash, chosen to avoid identifiable people or country-pinning landmarks. Swap any `IMG("...")` call in `data.js` for a real asset URL later.

## Note

This is a work of fiction. The site is intentionally built to avoid confirming anything the story hasn't confirmed yet (Surfer's name, sexuality, nationality, and feelings all stay open).
