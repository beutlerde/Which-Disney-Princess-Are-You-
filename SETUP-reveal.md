# Royal Reveal — Setup Guide

## What's in this bundle

- `reveal.html` — the reveal screen (full-bleed portraits, GitHub-referenced)
- `service-worker.js` — offline cache librarian
- `manifest.json` — PWA install config

## Where to put each file in your repo

```
Which-Disney-Princess-Are-You-/
├── reveal.html              ← (NEW) drop in root
├── manifest.json            ← (NEW) drop in root
├── service-worker.js        ← (NEW) drop in root
├── index.html               ← (existing)
├── chest.html               ← (existing)
├── admin.html               ← (existing)
├── chest_config.js          ← (existing)
├── SETUP.md                 ← (existing)
└── assets/
    ├── princesses/          ← (already done by you)
    │   ├── elsa.png
    │   ├── rapunzel.png
    │   ├── belle.png
    │   ├── moana.png
    │   ├── raya.png
    │   ├── aurora.png
    │   ├── ariel.png
    │   ├── tiana.png
    │   ├── snow-white.png
    │   ├── mulan.png
    │   ├── jasmine.png
    │   └── cinderella.png
    └── icons/               ← (NEW — for the PWA install icon)
        ├── icon-192.png     ← 192×192 PNG, any image works for now
        └── icon-512.png     ← 512×512 PNG, any image works for now
```

## How to test it

1. Upload all 3 new files (`reveal.html`, `service-worker.js`, `manifest.json`) to your repo's root
2. Wait ~30 seconds for GitHub Pages to deploy
3. Visit `https://beutlerde.github.io/Which-Disney-Princess-Are-You-/reveal.html`
4. Try tapping different princesses in the bottom switcher

## How offline mode works

**First visit (online):**
- The app loads normally
- The service worker quietly caches all 12 portraits in the background
- Next time, it loads from cache — instant!

**Subsequent visits (online or offline):**
- App loads from cache — works perfectly even on a plane

**Add to Home Screen:**
- On iPhone/iPad: Safari → Share → "Add to Home Screen"
- The app gets its own icon, opens full-screen, behaves like a real app

## Updating portraits later

If you ever swap a princess portrait:
1. Replace the file in `assets/princesses/`
2. **Important:** bump the cache version in `service-worker.js`
   - Find the line `const CACHE_NAME = 'royal-reveal-v1';`
   - Change to `'royal-reveal-v2'`, then `v3`, etc.
3. This forces all installed devices to re-download the updated portrait

## Note about icons

I haven't included icon-192.png and icon-512.png — you'll want to make those for the "Add to Home Screen" feature. For now you can:
- Use any 192×192 and 512×512 PNG temporarily
- Generate proper ones later (any of your princess emblems would work great)
- Or skip them — the manifest will work, just no custom icon
