import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('react') || id.includes('react-dom')) {
            return 'vendor';
          }
          if (id.includes('react-bootstrap-icons')) {
            return 'icons';
          }
          if (id.includes('chart.js') || id.includes('react-chartjs-2')) {
            return 'charts';
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  base: '/Weligton-portf-lio/',
})
