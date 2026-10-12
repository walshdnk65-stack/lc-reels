import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works both locally and under a GitHub Pages sub-path.
export default defineConfig({
  base: './',
  plugins: [react()],
})
