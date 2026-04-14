/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // ── Texas Global brand colors ──────────────────────────────
      colors: {
        // Primary: UT burnt orange
        burnt: {
          DEFAULT: '#BF5700',
          50:  '#FEF0E6',
          100: '#FDDCBF',
          200: '#F9B87A',
          700: '#8C3F00',
          dark: '#7A3700',
        },
        // Secondary: UT dark slate/charcoal (from TG nav/footer)
        slate: {
          DEFAULT: '#333F48',
          50:  '#F1F2F3',
          100: '#D5D8DA',
          600: '#4A5560',
          800: '#222C33',
          900: '#141C22',
        },
        // Warm off-white surface (matches TG page bg)
        surface: {
          DEFAULT: '#F4F2ED',
          card:    '#FFFFFF',
          warm:    '#EDEAE4',
          hover:   '#E8E5DE',
          press:   '#E0DDD6',
        },
        ink: {
          DEFAULT: '#1a1a1a',
          muted:   '#4A5560',
          soft:    '#888',
          faint:   '#aaa',
          whisper: '#ccc',
        },
        // Icon badge colors — kept from original palette
        ic: {
          orange: { bg: '#FEF0E6', fg: '#BF5700' },
          blue:   { bg: '#E6F1FB', fg: '#185FA5' },
          green:  { bg: '#EAF3DE', fg: '#3B6D11' },
          teal:   { bg: '#E1F5EE', fg: '#0F6E56' },
          purple: { bg: '#EEEDFE', fg: '#534AB7' },
          amber:  { bg: '#FAEEDA', fg: '#854F0B' },
          red:    { bg: '#FCEBEB', fg: '#A32D2D' },
          slate:  { bg: '#F1EFE8', fg: '#5F5E5A' },
          pink:   { bg: '#FBEAF0', fg: '#993556' },
        },
        tag: {
          orange: { bg: '#FEF0E6', fg: '#854F0B' },
          blue:   { bg: '#E6F1FB', fg: '#185FA5' },
          green:  { bg: '#EAF3DE', fg: '#3B6D11' },
          purple: { bg: '#EEEDFE', fg: '#534AB7' },
          teal:   { bg: '#E1F5EE', fg: '#0F6E56' },
          gray:   { bg: '#F1EFE8', fg: '#5F5E5A' },
        },
      },

      // ── Typography ─────────────────────────────────────────────
      fontFamily: {
        // Libre Franklin — UT's official body typeface
        sans: ['"Libre Franklin"', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        normal:    '400',
        medium:    '500',
        semibold:  '600',
        bold:      '700',
      },
      letterSpacing: {
        tight:  '-0.02em',
        normal: '0',
        wide:   '0.04em',
        wider:  '0.08em',
        widest: '0.12em',
      },

      // ── Shape tokens ───────────────────────────────────────────
      borderRadius: {
        tile:   '14px',   // tile cards — slightly tighter than before
        sheet:  '20px',   // bottom sheet top corners
        icon:   '8px',    // icon badge
        badge:  '6px',    // tags/pills
        input:  '10px',   // search input
      },
    },
  },
  plugins: [],
}
