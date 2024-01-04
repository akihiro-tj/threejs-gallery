import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],

  server: {
    port: 8000,
  },

  build: {
    outDir: 'dist',
  },

  css: {
    modules: {
      scopeBehaviour: 'local',
      localsConvention: 'camelCaseOnly',
    },
    preprocessorOptions: {
      scss: {
        additionalData: '@use "/src/styles/preprocess" as *;',
        includePaths: ['/src/styles'],
      },
    },
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
