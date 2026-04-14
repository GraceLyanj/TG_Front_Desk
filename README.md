# Texas Global — Front Desk Kiosk

Static, self-contained **`index.html`** for front-desk iPads (open locally or host on GitHub Pages).

## GitHub Pages

Repository **Settings → Pages**: source **GitHub Actions**. Pushes to `main` run `.github/workflows/static.yml`, which publishes `index.html`, `manifest.webmanifest`, `icons/`, and `.nojekyll`.

## Install as a pseudo-app (iPad / iPhone)

1. Open the published **HTTPS** URL in **Safari**.
2. Tap **Share** → **Add to Home Screen**.
3. Launch from the new icon — it opens in **standalone** mode (minimal browser UI), like a small web app.

**Android / Chrome:** open the site → browser menu → **Install app** or **Add to Home screen** (wording varies).

## Local preview

Open `index.html` in a browser (double-click or “Open with…”). Install-from-home-screen works best over **HTTPS** (e.g. GitHub Pages), not from `file://`.

## Fonts

Libre Franklin is loaded from Google Fonts in `index.html`. Optional Adobe Typekit swap is described in a comment inside that file.
