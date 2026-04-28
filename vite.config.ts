import path from 'node:path';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  define: {
    // Tương thích ngược với code dùng process.env.NODE_ENV
    'process.env.NODE_ENV': JSON.stringify(mode)
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@styles': path.resolve(__dirname, './src/styles'),
      'app': path.resolve(__dirname, './src/app')
    }
  }
}));