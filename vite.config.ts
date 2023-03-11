import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dns from 'dns';
import svgr from "vite-plugin-svgr";


dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5000,
  },
  ssr: {
    target: 'node',
    format: 'cjs',
  },
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        app: './index.html',
        'service-worker': './sw.ts',
      },
    },
  },
});
