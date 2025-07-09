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
    // https://vite.dev/config/shared-options.html#assetsinclude
    // WARNING: They will be excluded from the plugin transform pipeline
    // Avoid putting svgr export inside those folders
    // assetsInclude: ['./src/assets/icons/**/*'],
    resolve: {
      alias: {
        '@/config': path.resolve(__dirname, './src/modules/config/index'),
        '@/shared': path.resolve(__dirname, './src/modules/shared'),
        '@/auth': path.resolve(__dirname, './src/modules/auth'),
      },
    },
  }
})
