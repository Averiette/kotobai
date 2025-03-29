import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup'
import path from 'path'

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@Components": path.resolve(__dirname, "src/Components"),
      "@data": path.resolve(__dirname, "src/data"),
      "@audio": path.resolve(__dirname, "public/audio"),
    }
  }
})
