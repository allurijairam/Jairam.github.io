import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const CHAT_API = 'https://oald5wjp5c.execute-api.us-east-1.amazonaws.com'

// https://vite.dev/config/
// base: './' works for both project page (../Jairam.github.io/) and user page (../)
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    proxy: {
      // In dev, /api/chat is proxied to AWS so the browser doesn't hit CORS.
      '/api/chat': {
        target: CHAT_API,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
