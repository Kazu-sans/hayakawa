# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS/JS website for 早川タイル張工事 (Hayakawa Tile Construction), a Japanese tile contractor based in Adachi, Tokyo. No build tools, no package manager, no frameworks — open any HTML file directly in a browser.

## File Structure

| File | Role |
|---|---|
| `index.html` | Top page |
| `about.html`, `works.html`, `service.html`, `contact.html` | Sub-pages |
| `css/style.css` | Global styles: reset, variables, header, hero, homepage sections, buttons, animations |
| `css/pages.css` | Sub-page styles: about, works gallery, service, contact form |
| `js/main.js` | Shared JS: header scroll, mobile nav toggle, scroll reveal (IntersectionObserver), fixed CTA button, count-up animation |
| `js/works.js` | Works gallery filter (`data-filter` / `data-cat` attributes) |
| `js/contact.js` | Contact form client-side validation |

Each HTML page loads `css/style.css` + its own page-specific CSS/JS. Sub-pages also load `css/pages.css`.

## CSS Architecture

Design tokens live in `:root` in `style.css`:
- Colors: `--white`, `--black`, `--gray-50` through `--gray-800`
- Fonts: `--font-en` (Cormorant Garamond), `--font-ja` (Noto Sans JP), `--font-sjp` (Noto Serif JP)
- Layout: `--max-w: 1080px`, `--header-h: 64px`

Responsive breakpoints: `≤1024px` (tablet) and `≤768px` (mobile). Mobile nav is hidden at desktop, hamburger shown at `≤768px`.

## JS Patterns

- All JS uses the IIFE pattern `(function(){ 'use strict'; ... })();`
- Scroll-reveal: add class `reveal` to an element; `main.js` adds class `in` when it enters the viewport. Stagger delays use `d1`–`d4` classes.
- Count-up numbers: `<span class="count" data-to="500">0</span>` — `main.js` animates to the `data-to` value on viewport entry.

## Images

Real photos should go in an `images/` directory (not yet in repo). HTML comments mark every placeholder:
```html
<!-- 実際の写真: style="background-image:url('images/hero.jpg')" を追加 -->
```
Unsplash URLs are temporary placeholders throughout.

## Contact Form

`contact.js` is a **demo only** — the submit handler uses `setTimeout` instead of a real API call. To wire up a backend, replace the `setTimeout` block with a `fetch('/api/contact', ...)` call (the commented example is already in the file at `js/contact.js:65`).
