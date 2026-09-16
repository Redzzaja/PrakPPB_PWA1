# MyMusikgwe — PWA Lab

A small **Progressive Web App** built to teach the three PWA pillars: the
**application shell**, the **web app manifest**, and the **service worker**.
It looks like a modern streaming service — a mock music player with a
persistent sidebar, a "jump back in" grid, album shelves, and an always-on
now-playing bar — but there is **no real audio** (see [Non-goals](#non-goals)).

Stack: React 19 + Vite 8 + JavaScript + Tailwind CSS v4, with
[`vite-plugin-pwa`](https://vite-pwa-org.netlify.app/) generating the manifest
and Workbox service worker. No UI, icon, or state libraries.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/ with manifest.webmanifest + sw.js
npm run preview  # serve the build (test offline + install here)
npm run lint
```

> The service worker is **disabled in `dev`** (Vite HMR conflicts with
> caching). To see install + offline behaviour, use `build` + `preview` or a
> deployed URL.

## Design

The UI speaks **Bahasa Indonesia**; track titles and artist names are content,
not chrome.

- **Palette** — layered blacks (`#000` chrome, `#121212` panel, `#1a1a1a`
  cards, `#2a2a2a` hover) with a single green accent (`#1ed760`) spent only on
  play buttons and the active track. Tokens live in `src/index.css` under
  `@theme`.
- **Type** — one family, [Plus Jakarta Sans], with hierarchy from weight and
  tracking rather than a second typeface.
- **Cover art** is generated, not downloaded: `src/components/Cover.jsx` maps
  a track `id` to a CSS gradient, so the app ships with no image assets.
- **Motion** answers actions only — a cover reveals its play button on hover or
  focus, and `prefers-reduced-motion` is respected.

[Plus Jakarta Sans]: https://fonts.google.com/specimen/Plus+Jakarta+Sans

## The three PWA pillars

**1. Application shell** — `src/App.jsx`
A persistent frame (sidebar, main panel, player bar, mobile tab bar) that
renders once. Only the `<main>` content swaps between `Home` and `About`, so
the service worker only has to cache one shell.

**2. Web app manifest** — `vite.config.js`
Declared under `VitePWA({ manifest: { ... } })`. The plugin emits
`manifest.webmanifest` with the name, colours, `display: standalone`,
`start_url`, and icons (`public/pwa-192x192.png`, `pwa-512x512.png`,
maskable). This is what lets the browser offer "Install / Add to Home Screen".

**3. Service worker** — `vite.config.js`
`registerType: 'autoUpdate'` + Workbox `globPatterns` precache the built
assets. After the first load the shell is served from cache, so the app opens
offline. There is no manual `sw.js` — Workbox writes it at build time.

## Test it

1. `npm run build && npm run preview`
2. DevTools → **Application** → check **Manifest** and **Service Workers**.
3. **Network** → set to *Offline* → reload. The shell still loads.
4. Use the browser's install button (desktop) or *Add to Home Screen* (mobile).

## Project structure

```
public/                icons (SVG + PNG 192/512/apple-touch)
src/
  main.jsx             React entry
  App.jsx              app shell + view/player state
  index.css            Tailwind entry + @theme tokens
  components/
    Sidebar.jsx        desktop nav + library
    PlayerBar.jsx      now-playing + mock transport
    TrackList.jsx      ranked track rows
    TrackCard.jsx      shelf tile with hover play
    Cover.jsx          generated gradient artwork
    Icon.jsx           inline SVG set
  views/
    Home.jsx           greeting, grid, shelves
    About.jsx          lab info
  data/tracks.js       mock track data
vite.config.js         react + tailwind + VitePWA
PRD.md                 product requirements
```

## Non-goals

- No real audio playback — the transport toggles UI state only.
- No backend, auth, database, or offline data sync.
- No state-management library; React `useState` is enough.
- No TypeScript (per request).
