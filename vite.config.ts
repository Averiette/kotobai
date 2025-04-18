import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup'
import path from 'path'

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@Components": path.resolve(__dirname, "src/Components"),
      "@data": path.resolve(__dirname, "src/data"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@audio": path.resolve(__dirname, "public/audio"),
      "@redux": path.resolve(__dirname, "src/redux"),
    }
  }
})
