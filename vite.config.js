import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Allow client-side routes (e.g. /quote) to work on direct access / refresh
    historyApiFallback: true,
  },
})

