import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  assetsPublicPath: "./",
  base: '/echarts/',
  publicPath: "./",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  eslit: {
    lintOnSave: false,
    globals: {
      $: "jquery",
    },
  },
  preprocessorOptions: {
    scss: {
      /*
      引入var.scss全局预定义变量，
      如果引入多个文件，
      可以使用
      '@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
      这种格式
       */
      additionalData: '@import "@/assets/scss/globalVariable.scss";',
    },
  },
  proxy: {
    "/": {
      target: "http://localhost:80",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^/, ""),
    },
  },
});
