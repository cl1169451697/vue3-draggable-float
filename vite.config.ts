import { defineConfig } from 'vite'
import path, { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import libCss from 'vite-plugin-libcss';


export default defineConfig({
  resolve: {
    // +++
    alias: {
      '@': resolve(__dirname, './src'), // +++
    }, // +++
  },
  plugins: [vue(), dts(),libCss()],
  build: {
    minify: true,
    lib: {
      entry: resolve(__dirname, './src/packages/index.ts'), //入口
      name: 'vue3-draggable-float', //组件名
      fileName: format => `vue3-draggable-float.${format}.ts`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        dir: path.resolve(__dirname, './dist'),
      },
    },
    emptyOutDir: false,
  },
})
