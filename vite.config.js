import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const CHAT_API = 'https://oald5wjp5c.execute-api.us-east-1.amazonaws.com'

// https://vite.dev/config/
// GitHub Pages project site: https://allurijairam.github.io/Jairam.github.io/
export default defineConfig({
  plugins: [react()],
  base: '/Jairam.github.io/',
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
