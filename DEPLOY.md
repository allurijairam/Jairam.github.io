# Deploy to GitHub Pages

Code is committed and ready. Push from your machine (where your GitHub SSH key or credential is set up).

## 1. Push to GitHub

From the project folder:

```bash
cd /Users/allurijairam/Desktop/portfolio_frontend
git push -u origin main
```

If the remote already has content (e.g. initial README), pull first:

```bash
git pull origin main --rebase
git push -u origin main
```

## 2. Use the built app (fix blank page / main.jsx error)

The blank page happens because Pages is serving the repo source instead of the built app. Use **Option A** (deploy from main):

### Option A – Deploy from main (built site in dist/ folder)

1. Push your code to `main`. The workflow **Build and deploy to main** runs, builds the app, and commits the `dist/` folder to `main`.
2. Open **https://github.com/allurijairam/Jairam.github.io** → **Settings** → **Pages**.
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
4. **Branch**: **main**, **Folder**: **/dist** (select the `dist` folder).
5. Click **Save**. Wait 1–2 minutes, then open your site. The built app is served from `main`’s `dist/` folder.

### Option B – Deploy from gh-pages branch

1. Push to `main`; workflow **Build and push to gh-pages** updates the `gh-pages` branch with the built site.
2. In **Settings** → **Pages**, set **Source** to **Deploy from a branch**, **Branch**: **gh-pages**, **Folder**: **/ (root)**.

### Option C – GitHub Actions as source

1. In **Settings** → **Pages**, set **Source** to **GitHub Actions**. Each push to `main` runs **Deploy to GitHub Pages**.

## 3. Trigger deployment

- Push to `main` (Option A: updates `gh-pages`; Option B: runs the deploy workflow).
- Or run manually: **Actions** → pick the workflow → **Run workflow** (branch: main).

## 4. Your site URL

After deployment (usually 1–2 minutes):

**https://allurijairam.github.io/Jairam.github.io/**

The app uses hash routing (e.g. `/#/resume`, `/#/upload`), so all routes work on GitHub Pages.

## Future updates

```bash
git add -A
git commit -m "Your message"
git push origin main
```

Each push to `main` will rebuild and redeploy automatically.
