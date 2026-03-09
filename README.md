# Jairam Alluri – Portfolio (AI / ML Engineer)

Modern static portfolio for an AI & Machine Learning Engineer. Built with React and Vite, deployable to GitHub Pages or any static host. Communicates with a separate backend API for chat (RAG) and document upload.

## Features

- **Home**: Live RAG chat demo, developer intro, about, skills, project cards
- **Project pages**: Custom RAG system (overview, architecture, tech) and ML-from-scratch placeholder
- **Upload**: Document upload to RAG backend with progress and status
- **Resume**: Professional summary, experience, education, skills, projects + Download PDF button

## API configuration

Set the backend base URL via environment variable:

```bash
# .env (create from .env.example)
VITE_API_BASE=http://YOUR_EC2_PUBLIC_IP:8000
```

- **Chat**: `GET {API_BASE}/chat?message=...` → `{ "response": "..." }`
- **Upload**: `POST {API_BASE}/upload` (multipart/form-data, field: `file`)

If `VITE_API_BASE` is not set, the app uses `http://localhost:8000`.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Routes use hash-based routing (e.g. `/#/upload`, `/#/resume`) for compatibility with static hosting.

## Build & deploy (e.g. GitHub Pages)

```bash
npm run build
```

Output is in `dist/`. For GitHub Pages:

1. Push the repo and in **Settings → Pages** choose “Deploy from a branch”.
2. Select branch (e.g. `main`) and folder **`/ (root)`** or **`/docs`**; if using **`/docs`**, set `vite.config.js` to `outDir: 'docs'` and run `npm run build` (or copy `dist` contents into `docs`).
3. If the site is at `https://username.github.io/repo-name/`, set in `vite.config.js`: `base: '/repo-name/'`, then rebuild.

To test the production build locally:

```bash
npm run preview
```

## Resume PDF

Place your resume PDF at `public/resume.pdf`. The “Download Resume” button on `/resume` will open it.

## Tech stack

- React 19, Vite 7, react-router-dom (HashRouter)
- CSS with custom properties (dark theme, typography, cards, responsive layout)
