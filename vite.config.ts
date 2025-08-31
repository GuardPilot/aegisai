import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// ВАЖНО: base = '/<имя-репозитория>/'
export default defineConfig({
  plugins: [react()],
  base: '/aegisai/',        // ← имя твоего репозитория на GitHub
  build: {
    outDir: 'docs',         // билд сразу в /docs для GitHub Pages
    emptyOutDir: true
  }
})
