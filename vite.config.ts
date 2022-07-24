import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: false,
        modifyVars: {
          // hack: `true; @import '@less/config.less'`,
        },
      },
    },
  },
  plugins: [
    vue(),
    Components({
      dirs: ['src/components'],
      extensions: ['vue', 'ts'],
      deep: true,
      dts: false,
      resolvers: [AntDesignVueResolver()],
    }),
  ],
})
