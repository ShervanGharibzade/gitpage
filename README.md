# Hossein Gharibzadeh — Portfolio

Static portfolio built with Vite, React, TypeScript and Tailwind CSS. All content lives in `src/data/` (sourced from the resume).

## Develop

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run lint
npm run build      # outputs ./dist
npm run preview    # serve the production build locally
```

## Deploy to GitHub Pages

1. Push to `master` or `main`.
2. In the repo: **Settings → Pages → Source: GitHub Actions**.
3. `.github/workflows/deploy.yml` lints, builds and publishes `dist/`. It derives the canonical URL / Open Graph URLs from the repo name (`https://<owner>.github.io/<repo>/`, or the root for a `<owner>.github.io` repo).

Assets use a relative base (`base: "./"`), so the site works at a root or a sub-path. To set the URL manually, build with `VITE_SITE_URL=https://example.com/ npm run build`.

## Updating content

Edit `src/data/{profile,experience,projects,skills}.ts`. To update the resume, replace `public/Hossein_Gharibzadeh_Resume.pdf`.
