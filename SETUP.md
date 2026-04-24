# The Royal Chest — Setup Guide

You've got three new files to deploy. This adds the letter-writing system to the kingdom builder you already have hosted.

## What each file does

**`admin.html`** — Your private writing tool. Password-gated. Write letters here, they save directly to your GitHub repo.

**`chest.html`** — Guapa's reading page. Shows her sealed letters, opens them with ceremony, keeps a permanent library.

**`chest_config.js`** — A tiny config file you'll edit once to tell the chest where to find letters.

---

## Step 1 — Configure the chest (one-time, 30 seconds)

Open `chest_config.js` in any text editor and replace the two placeholder values:

```javascript
window.ROYAL_CHEST_CONFIG = {
  user: 'your-github-username',     // your actual username
  repo: 'royal-kingdom'              // your actual repo name
};
```

Save the file.

---

## Step 2 — Upload all three files to your GitHub repo

Put them in the same place as your existing `index.html` (root of the repo). Your repo should now look like:

```
royal-kingdom/
├── index.html            (kingdom builder, already there)
├── manifest.json         (already there)
├── assets/               (already there)
├── admin.html            (new)
├── chest.html            (new)
└── chest_config.js       (new)
```

GitHub Pages will serve them within 1-2 minutes of upload.

---

## Step 3 — Create your GitHub Personal Access Token

This lets the admin page save letters directly to your repo.

1. Go to **github.com** → click your profile picture (top right) → **Settings**
2. Scroll down in the left sidebar, click **Developer settings**
3. Click **Personal access tokens** → **Tokens (classic)**
4. Click **Generate new token** → **Generate new token (classic)**
5. Give it a name like "Royal Scribe"
6. Expiration: pick **No expiration** (or a long one — you'll need to redo this when it expires)
7. Under **Select scopes**, check the box for **`repo`** (this is the only permission it needs)
8. Scroll down, click **Generate token**
9. **Copy the token immediately** — it starts with `ghp_` and it's shown only once. If you close the page without copying, you'll have to generate a new one.

---

## Step 4 — Enter the Royal Scribe

Go to: `https://yourname.github.io/royal-kingdom/admin.html`

(Replace `yourname` with your actual GitHub username, and `royal-kingdom` if your repo is named differently.)

**First time:**
1. Choose a passcode and type it in. This is YOUR passcode — only you ever use this page. Pick something you'll remember. Minimum 4 characters.
2. Click Enter. You'll be inside the Scribe.
3. In the "GitHub Connection" card at the top:
   - **GitHub Username:** your username
   - **Repository Name:** your repo name (e.g. `royal-kingdom`)
   - **Personal Access Token:** paste the `ghp_xxx` token from Step 3
   - Click **Save Connection**, then **Test Connection**
   - You should see "✦ Connected. The royal archive is ready." in green.

**All subsequent visits:** just type your passcode. The GitHub settings are remembered.

---

## Step 5 — Write your first letter

1. Give it a **Title** (e.g. *"To My Princess on Her Tenth Birthday"*)
2. Pick **From Whom** — Dad, the King, or one of the princesses
3. Write the **Letter** body. Line breaks and paragraphs are preserved.
4. Set an **Unlock Date**. Pick a date in the past (like today) if you want to test immediately.
5. Watch the **signature preview** below — shows exactly how the letter will sign off
6. Click **✦ Seal the Letter**

That's it. The letter is now stored in your GitHub repo under `letters/letter_XXX.json`. When Guapa opens `chest.html` on or after the unlock date, the letter appears.

---

## Step 6 — Test the chest

Go to: `https://yourname.github.io/royal-kingdom/chest.html`

If you set an unlock date of today or earlier, you'll see a shimmering gold scroll in the "New Letters Await" section. Tap it, watch the seal crack, read the letter. After closing, it moves to the "Royal Library" section below — her permanent archive.

---

## Step 7 — Link from the kingdom builder (optional but recommended)

To make the chest easy for Guapa to find, add a chest link to the kingdom builder.

In `index.html`, find the top bar. Look for the section that has buttons like `Undo` and `Clear`. Add one more button just before `Undo`:

```html
<a href="chest.html" class="btn" style="text-decoration:none;">✦ Chest</a>
```

That's a single line. It gives her a gold "✦ Chest" button at the top of the kingdom builder that takes her to her letters.

(If you'd rather I build a fancier version later with a glowing icon that pulses when there's new mail, let me know.)

---

## Things that might trip you up

**"The chest says 'This chest is not yet linked'"** — You didn't edit `chest_config.js`. Open it, replace the placeholder values with your actual username/repo.

**"I can't unlock the admin page"** — If you forgot your passcode, clear your browser's data for the site (Settings → Safari → Clear Website Data for your domain). You'll be asked to set a new passcode on next visit. Your GitHub config will be lost and you'll need to re-enter it.

**"Test connection failed"** — Most often wrong username, wrong repo name, or the token wasn't given `repo` scope. Generate a fresh token and check the repo scope box.

**"I want to write letters from my computer but I set the passcode on my phone"** — That's fine. The passcode is per-device. On any new device you open the admin page from, you'll set a passcode (can be different each time — just pick one). Each device also needs its own GitHub token entry (paste the same token).

**"Did I break anything in the kingdom builder?"** — Adding the chest link (Step 7) is the only change to the kingdom builder. Before making the change, just download your existing `index.html` from GitHub first as a backup. If something goes wrong, re-upload the old version.

---

## What happens next

You can keep writing letters indefinitely. Each one gets its own file in `letters/`. Thousands of letters would be fine. Edit and delete letters through the admin page if you want to change one.

When Guapa is 18 and opens the chest, every letter you've ever written will be there in her library. That's the long game.
