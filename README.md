# sveltekit-true-spa

Example SvelteKit project using True SPA mode - suitable for deployment onto CDNs, or services like GitHub Pages, and without requiring any strange workarounds (such as dynamic imports in `onMount`) to use browser-only dependencies or browser globals.

## Development

```bash
yarn dev
```

## Build

```bash
yarn build
```

Outputs files into `/build`, suitable for deployment to a CDN.

## Preview

```bash
python -m http.server 3000 --directory build
```

Or your favorite HTTP server.