import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'simple-peer'],
          ui: ['lucide-react']
        }
      }
    }
  },
  server: {
    host: true,
    port: 5173
  }
});