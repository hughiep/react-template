import path from 'node:path'

import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

const reactCompilerConfig = {
  target: '19',
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler', reactCompilerConfig]],
        },
      }),
      svgr(),
    ],
    server: {
      port: env.PORT ? parseInt(env.PORT) : 3003,
    },
    resolve: {
      alias: {
        '@/config': path.resolve(__dirname, './src/modules/config/index'),
        '@/assets': path.resolve(__dirname, './src/assets'),
        '@/router': path.resolve(__dirname, './src/router'),
        '@/shared': path.resolve(__dirname, './src/modules/shared'),
        '@/auth': path.resolve(__dirname, './src/modules/auth'),
      },
    },
  }
})
