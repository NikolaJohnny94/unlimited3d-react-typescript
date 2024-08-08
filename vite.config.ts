import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@context': path.resolve(__dirname, './src/context'),
      '@helpers': path.resolve(__dirname, './src/helpers'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@types': path.resolve(__dirname, './src/types'),
      '@enums': path.resolve(__dirname, './src/enums'),
      '@consts': path.resolve(__dirname, './src/consts'),
    },
  },
  build: {
    rollupOptions: {
      external: ['unlimited3d'],
      output: {
        globals: {
          unlimited3d: 'Unlimited3D',
        },
      },
    },
  },
})
