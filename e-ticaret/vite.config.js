import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
   server: {
    host: true, // veya 'nlsgiyim.local'
    port: 5173,
    allowedHosts: ['nlsgiyim.local'],
  }
})