import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    hmr: {
      overlay: true // Keep error overlay but warnings won't block
    }
  },
  // Suppress deprecation warnings
  logLevel: 'error' // Only show errors, not warnings
})