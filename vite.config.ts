import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Quando fizermos um fetch para '/api/produtos', o Vite vai redirecionar secretamente para o site da Econverse
      '/api/produtos': {
        target: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/produtos/, '')
      }
    }
  }
})