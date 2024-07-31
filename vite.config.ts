import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // dts({
    //   include: ['./src/vite-env.d.ts'],
    // }),
  ],
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
