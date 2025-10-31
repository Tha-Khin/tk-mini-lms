import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // server: {
  //   proxy: {
  //     "/api": {
  //       target:"https://script.google.com/macros/s/AKfycbztQ-CJE4JyX6O4nSZjzBJUk5P4T1wlvRsMAes0IUTnQhTCnX5mc_Bau4RiP4VA2zUY/exec",
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
})
