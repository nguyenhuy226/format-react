import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { config } from "dotenv";

config();
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {
    port: process.env.PORT,
  },
  resolve: {
    alias: {
     "@": path.resolve(__dirname, "./src"),
    }
  }
})
