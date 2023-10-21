// vite.config.ts
import { defineConfig } from "file:///F:/npm%E5%8C%85%E7%AE%A1%E7%90%86/vue3-draggable-float/node_modules/vite/dist/node/index.js";
import path, { resolve } from "path";
import vue from "file:///F:/npm%E5%8C%85%E7%AE%A1%E7%90%86/vue3-draggable-float/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import dts from "file:///F:/npm%E5%8C%85%E7%AE%A1%E7%90%86/vue3-draggable-float/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "F:\\npm\u5305\u7BA1\u7406\\vue3-draggable-float";
var vite_config_default = defineConfig({
  resolve: {
    // +++
    alias: {
      "@": resolve(__vite_injected_original_dirname, "./src")
      // +++
    }
    // +++
  },
  plugins: [vue(), dts()],
  build: {
    minify: true,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "./src/packages/index.ts"),
      //入口
      name: "vue3-draggable-float",
      //组件名
      fileName: (format) => `vue3-draggable-float.${format}.ts`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["vue"],
      output: {
        dir: path.resolve(__vite_injected_original_dirname, "./dist")
      }
    },
    emptyOutDir: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxucG1cdTUzMDVcdTdCQTFcdTc0MDZcXFxcdnVlMy1kcmFnZ2FibGUtZmxvYXRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXG5wbVx1NTMwNVx1N0JBMVx1NzQwNlxcXFx2dWUzLWRyYWdnYWJsZS1mbG9hdFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovbnBtJUU1JThDJTg1JUU3JUFFJUExJUU3JTkwJTg2L3Z1ZTMtZHJhZ2dhYmxlLWZsb2F0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBwYXRoLCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cydcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcmVzb2x2ZToge1xuICAgIC8vICsrK1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IHJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMnKSwgLy8gKysrXG4gICAgfSwgLy8gKysrXG4gIH0sXG4gIHBsdWdpbnM6IFt2dWUoKSwgZHRzKCldLFxuICBidWlsZDoge1xuICAgIG1pbmlmeTogdHJ1ZSxcbiAgICBsaWI6IHtcbiAgICAgIGVudHJ5OiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL3BhY2thZ2VzL2luZGV4LnRzJyksIC8vXHU1MTY1XHU1M0UzXG4gICAgICBuYW1lOiAndnVlMy1kcmFnZ2FibGUtZmxvYXQnLCAvL1x1N0VDNFx1NEVGNlx1NTQwRFxuICAgICAgZmlsZU5hbWU6IGZvcm1hdCA9PiBgdnVlMy1kcmFnZ2FibGUtZmxvYXQuJHtmb3JtYXR9LnRzYCxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC8vIFx1Nzg2RVx1NEZERFx1NTkxNlx1OTBFOFx1NTMxNlx1NTkwNFx1NzQwNlx1OTBBM1x1NEU5Qlx1NEY2MFx1NEUwRFx1NjBGM1x1NjI1M1x1NTMwNVx1OEZEQlx1NUU5M1x1NzY4NFx1NEY5RFx1OEQ1NlxuICAgICAgZXh0ZXJuYWw6IFsndnVlJ10sXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZGlyOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9kaXN0JyksXG4gICAgICB9LFxuICAgIH0sXG4gICAgZW1wdHlPdXREaXI6IGZhbHNlLFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMFMsU0FBUyxvQkFBb0I7QUFDdlUsT0FBTyxRQUFRLGVBQWU7QUFDOUIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sU0FBUztBQUhoQixJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUE7QUFBQSxJQUVQLE9BQU87QUFBQSxNQUNMLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUE7QUFBQSxJQUNqQztBQUFBO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFBQSxFQUN0QixPQUFPO0FBQUEsSUFDTCxRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcseUJBQXlCO0FBQUE7QUFBQSxNQUNuRCxNQUFNO0FBQUE7QUFBQSxNQUNOLFVBQVUsWUFBVSx3QkFBd0IsTUFBTTtBQUFBLElBQ3BEO0FBQUEsSUFDQSxlQUFlO0FBQUE7QUFBQSxNQUViLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBLFFBQ04sS0FBSyxLQUFLLFFBQVEsa0NBQVcsUUFBUTtBQUFBLE1BQ3ZDO0FBQUEsSUFDRjtBQUFBLElBQ0EsYUFBYTtBQUFBLEVBQ2Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
