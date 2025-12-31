import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: false   // 🚨 DO NOT DELETE THIS
  }
})
