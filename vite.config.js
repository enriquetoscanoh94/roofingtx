import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Relative base so the build works on GitHub Pages (project site) without
// hardcoding the repo name. Single-page landing => relative assets resolve fine.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
