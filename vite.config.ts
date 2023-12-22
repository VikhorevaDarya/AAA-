import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'
import { createHtmlPlugin } from 'vite-plugin-html'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import react from '@vitejs/plugin-react'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    server: {
      port: parseInt(process.env.VITE_DEV_SERVER_PORT),
      host: true,
    },
    plugins: [
      react(),
      createHtmlPlugin({
        entry: 'src/index.tsx',
        template: 'index.html',
        inject: {
          data: {
            themeName: process.env.VITE_THEME_DEFAULT,
          },
        },
      }),
      createSvgIconsPlugin({
        iconDirs: [resolve(__dirname, './src/assets/icons')],
        symbolId: 'icon-[name]',
      }),
      ViteImageOptimizer(),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        images: resolve(__dirname, './src/assets/images'),
        icons: resolve(__dirname, './src/assets/icons'),
        fonts: resolve(__dirname, './src/assets/fonts'),
        styles: resolve(__dirname, './src/styles'),
      },
    },
  })
}
