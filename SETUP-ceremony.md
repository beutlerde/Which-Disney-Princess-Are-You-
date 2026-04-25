# Royal Ceremony — Deployment Instructions

## What's in this bundle

```
ceremony-bundle/
├── ceremony.html          ← drop in repo root
├── service-worker.js      ← REPLACES existing file
└── assets/
    ├── chambers/   (8 backdrops, 3.4 MB)
    ├── emblems/    (11 emblems, 2.9 MB)
    ├── banner/     (2 files, 1.4 MB)
    ├── dresses/    (9 dresses, 0.9 MB)
    ├── tiaras/     (14 tiaras, 2.8 MB)
    └── shoes/      (12 shoes, 3.3 MB)
```

Total: ~15 MB

## Step-by-step deployment

### 1. Replace the service worker (IMPORTANT — do this first)

The old `service-worker.js` only knows about the reveal screen. The new one knows about ceremony assets too.

- In your repo: open `service-worker.js`
- Click the pencil/edit icon
- Delete everything in it
- Paste the contents of the new `service-worker.js`
- Commit with message: `Update service worker for ceremony (v2)`

### 2. Upload `ceremony.html`

- In repo root → "Add file" → "Upload files"
- Drag `ceremony.html` in
- Commit with message: `Add ceremony page`

### 3. Upload the asset folders

You have two options here — pick whichever feels easier.

**Option A: Upload the whole `assets/` folder at once (fastest)**

- In repo root → "Add file" → "Upload files"
- Drag the entire `assets/` folder from this bundle into the upload area
- GitHub will merge it with your existing `assets/princesses/` folder automatically
- Commit with message: `Add ceremony assets`

**Option B: One folder at a time**

If Option A is slow, do it in batches:
- Upload `assets/chambers/` → commit
- Upload `assets/emblems/` → commit
- Upload `assets/banner/` → commit
- Upload `assets/dresses/` → commit
- Upload `assets/tiaras/` → commit
- Upload `assets/shoes/` → commit

### 4. Wait ~1 minute for GitHub Pages to deploy

### 5. Test it

Visit: `https://beutlerde.github.io/Which-Disney-Princess-Are-You-/ceremony.html`

You should see:
- Slow gold text fade in: "A mirror stirs in a distant castle..."
- Then "It has been waiting for someone."
- Then "Tell it thy name." in script font
- Tap anywhere to begin the 8 scenes

### 6. Force the new service worker to activate

After deploying, on any device that visited the old version:
- Close the app completely
- Reopen it once (this triggers the new service worker)
- Close it again
- Reopen — now it's running the new cache with all ceremony assets

This is normal PWA behavior. After Guapa first opens the new version, everything works offline.

## What to expect

- **First visit (online):** Loads in ~3-5 seconds, caches all 15 MB in background
- **Every visit after:** Instant load from cache, fully offline-capable
- **The intro:** ~9 seconds before "Tap to begin" appears — that's intentional. The slowness is part of the magic.
- **Hand-off to quiz:** Currently the "Begin the Quiz" button navigates to `quiz.html` (which doesn't exist yet). When clicked, it will 404 — that's expected and fine. Her ceremony choices are saved to localStorage so the quiz can read them when we build it.

## File reference: GitHub URLs after upload

These are the exact URLs each file will live at:

```
https://beutlerde.github.io/Which-Disney-Princess-Are-You-/ceremony.html
https://beutlerde.github.io/Which-Disney-Princess-Are-You-/service-worker.js
https://beutlerde.github.io/Which-Disney-Princess-Are-You-/assets/chambers/lavender-garden.jpg
https://beutlerde.github.io/Which-Disney-Princess-Are-You-/assets/emblems/swan.png
https://beutlerde.github.io/Which-Disney-Princess-Are-You-/assets/banner/banner-skeleton.png
... etc
```

If any image fails to load when you test, check that the path matches exactly.
