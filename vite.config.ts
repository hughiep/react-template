import path from 'node:path'

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    server: {
      port: env.PORT ? parseInt(env.PORT) : 3003,
    },
    assetsInclude: ['./src/assets/**/*'],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
        '@/assets': path.resolve(__dirname, './src/assets'),
        '@/shared': path.resolve(__dirname, './src/modules/shared'),
        '@/auth': path.resolve(__dirname, './src/modules/auth'),
        '@/wallet': path.resolve(__dirname, './src/modules/wallet'),
      },
    },
  }
})
