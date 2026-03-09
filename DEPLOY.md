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

## 2. Enable GitHub Pages via Actions

1. Open **https://github.com/allurijairam/Jairam.github.io**
2. Go to **Settings** → **Pages**
3. Under **Build and deployment**, set **Source** to **GitHub Actions**
4. Save

## 3. Trigger deployment

- The first push to `main` will run the workflow. If you already pushed before enabling Pages, run the workflow once: **Actions** → **Deploy to GitHub Pages** → **Run workflow** (branch: main).

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
