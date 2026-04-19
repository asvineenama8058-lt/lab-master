import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('firebase')) return 'firebase-vendor';
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) return 'react-vendor';
            if (id.includes('lucide')) return 'lucide-vendor';
            return 'vendor';
          }
        }
      }
    }
  },
  plugins: [
    react()
  ]
});
