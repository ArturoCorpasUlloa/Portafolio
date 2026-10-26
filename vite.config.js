import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// 
function siteUrl(mode) {
  const env = loadEnv(mode, process.cwd(), '');
  const url = (env.SITE_URL || '').replace(/\/$/, '');

  return {
    name: 'site-url',
    transformIndexHtml: (html) =>
      html.replaceAll('__SITE_URL__', url),
  };
}

// base './' permite subir el sitio a cualquier hosting estático,
// incluso dentro de una subcarpeta
export default defineConfig(({ mode }) => ({
  plugins: [react(), siteUrl(mode)],
  base: './',

  server: {
    host: true,
    port: 5173,
  },
}));