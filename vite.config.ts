import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { projectPages } from './scripts/projectPages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), projectPages()],
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        // Keep React out of the app chunk so page edits do not invalidate it
        // in the browser cache.
        manualChunks: {
          react: ['react', 'react-dom'],
        },
      },
    },
  },
})
