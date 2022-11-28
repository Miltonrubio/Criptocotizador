import { VitePWA } from 'vite-plugin-pwa'
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),  VitePWA({
     manifest: {
        name: 'Cotizador de Criptomonedas con Vue, VITE y Sass',
        short_name: 'Criptocotizador',
        description: 'Cotizador de CriptoMonedas',
        theme_color: '#f60de3',
        icons: [
          {
            src: 'logo.svg',
            sizes: '192x192',
            type: 'image/svg'
          },
        ],
      },
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

