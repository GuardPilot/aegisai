import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/aegisai/',          // имя репозитория
  build: { outDir: 'dist', emptyOutDir: true }
})
