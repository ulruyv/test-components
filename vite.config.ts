import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: true,
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@ulruyv/test-components",
      fileName: "index",
      formats: ["es"],
    },
    rollupOptions: {
      output: {
        assetFileNames: "index.[ext]",
      },
    },
  }
})
