# Portfolio — React + Vite

Converted from Create React App (CRACO) to **Vite**.

## Getting Started

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Key changes from CRA/CRACO

- Entry point is `src/main.jsx` (not `src/index.js`)
- Config is `vite.config.js` (replaces `craco.config.js`)
- `@` path alias configured in `vite.config.js`
- Env vars use `VITE_` prefix (e.g. `VITE_API_URL`)
- Keyframe CSS animations moved to `src/index.css` (no `styled-jsx`)
- `tailwind.config.js` uses `export default` (ESM)
