import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      // and from the AppData directory where gemini artifacts are stored
      allow: [
        '..',
        'C:/Users/Prasanna Dantuluri/.gemini/antigravity'
      ]
    }
  }
})
