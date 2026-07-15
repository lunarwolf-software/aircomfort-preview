import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' produces relative asset URLs, which work on GitHub Pages
// subpaths, Netlify, Vercel, Cloudflare Pages and plain static hosting.
// Combined with HashRouter, no server-side routing config is required.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    target: 'es2019',
    sourcemap: false,
  },
});
