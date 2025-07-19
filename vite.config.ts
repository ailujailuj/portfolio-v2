import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio-v2/', // Nome do seu repositório GitHub
  build: {
    outDir: 'dist',
  }
})
