# Texas Global — Front Desk Kiosk

iPad-optimized reference tool for Texas Global (ISSS) front desk staff.
Quick access to official links for the most common international student questions.

Built on the **Texas Global visual identity** — Libre Franklin typeface, burnt orange `#BF5700`, slate `#333F48`, and warm `#F4F2ED` surfaces.

> **Font note:** Texas Global loads Libre Franklin via Adobe Typekit (`von0ogn`). This repo loads the same typeface from Google Fonts for free, open use. If you have access to the UT Adobe Fonts kit, swap the `<link>` in `index.html` for `https://use.typekit.net/von0ogn.css` and remove the Google Fonts links — the CSS variable `--font-sans` will pick it up automatically.

---

## Stack

| Tool | Purpose |
|---|---|
| [Vite 5](https://vitejs.dev) | Build tool & dev server |
| [React 18](https://react.dev) + TypeScript | UI framework |
| [Tailwind CSS v3](https://tailwindcss.com) | Utility classes |
| [Libre Franklin](https://fonts.google.com/specimen/Libre+Franklin) | UT's official brand typeface |

---

## Getting started

```bash
npm install
npm run dev
# → http://localhost:5173
```

## Build for production

```bash
npm run build
npm run preview
```

The `dist/` folder is a self-contained static site — no server required.

---

## Deploy to iPad as a home screen app

1. `npm run build`, then serve `dist/` from any static host or local server on the same Wi-Fi.
   - Quick local option: `npx serve dist` then note your machine's local IP (e.g. `192.168.1.x:3000`).
2. Open the URL in **Safari** on iPad.
3. Tap **Share → Add to Home Screen**.
4. The app opens full-screen with no browser chrome, like a native app.

---

## Project structure

```
tg-kiosk/
├── index.html                  # Font preload (Libre Franklin) + PWA meta tags
├── src/
│   ├── main.tsx                # Entry point
│   ├── App.tsx                 # Root layout + state
│   ├── index.css               # Tailwind + brand CSS variables
│   ├── data/
│   │   └── topics.ts           # ← ALL content lives here
│   ├── hooks/
│   │   └── useClock.ts         # Live clock (refreshes every 30s)
│   └── components/
│       ├── Header.tsx           # Top bar: logo, title, clock
│       ├── SearchBar.tsx        # Live search input
│       ├── TileGrid.tsx         # 3-col responsive grid
│       ├── Tile.tsx             # Individual topic tile
│       ├── BottomSheet.tsx      # iOS-style slide-up detail panel
│       ├── LinkCard.tsx         # Resource card: eyebrow + title + domain
│       ├── FooterNote.tsx       # Front desk scope reminder
│       ├── IconBadge.tsx        # Colored icon container
│       ├── Icon.tsx             # SVG icon library + topic→icon map
│       └── Tag.tsx              # Keyword pill
```

---

## Brand tokens (CSS variables)

Defined in `src/index.css` and referenced throughout:

| Variable | Value | Use |
|---|---|---|
| `--color-burnt` | `#BF5700` | UT burnt orange — primary |
| `--color-burnt-light` | `#FEF0E6` | Tinted orange — notice backgrounds |
| `--color-slate` | `#333F48` | UT dark slate — body text, borders |
| `--color-surface` | `#F4F2ED` | Warm off-white page background |
| `--color-surface-warm` | `#EDEAE4` | Slightly darker surface for hover states |
| `--color-card` | `#FFFFFF` | Pure white card backgrounds |
| `--radius-tile` | `14px` | Tile and card corners |
| `--radius-sheet` | `20px` | Bottom sheet top corners |
| `--radius-icon` | `8px` | Icon badge corners |
| `--font-sans` | `'Libre Franklin'` | UT's brand typeface |

Also defined in `tailwind.config.js` as Tailwind tokens for class-based use.

---

## Updating content

**All content is in `src/data/topics.ts`** — no component changes needed to:
- Edit link URLs, labels, or source eyebrows
- Add/remove topics or keyword tags
- Update notices

Each topic shape:

```ts
{
  key: 'mykey',
  tileLabel: 'Tile heading',
  tileSub: 'Subtitle',
  iconColor: 'orange',          // orange|blue|green|teal|purple|amber|red|slate|pink
  keywords: 'search terms here',
  title: 'Sheet heading',
  desc: 'Description paragraph',
  notice: 'Optional notice bar text',  // omit to hide
  links: [{
    label: 'Link title',
    url: 'https://...',
    source: 'ISSS · Texas Global',    // orange eyebrow
    domain: 'global.utexas.edu',      // whisper gray URL
  }],
  tags: [{ text: 'Keyword' }, { text: 'Another', color: 'blue' }],
}
```

To add a new icon for a new topic key, add it to `topicIconMap` in `src/components/Icon.tsx`.
