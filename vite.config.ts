import { defineConfig } from "vite"
import path from "path"
import Vue from "@vitejs/plugin-vue"
import Pages from "vite-plugin-pages"
import AutoImport from "unplugin-auto-import/vite"
import Layouts from "vite-plugin-vue-layouts"
import UnoCSS from "unocss/vite"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import { mockDevServerPlugin as MockDevServerPlugin } from "vite-plugin-mock-dev-server"

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  return {
    resolve: {
      alias: {
        "~/": `${path.resolve(__dirname, "src")}/`,
      },
    },
    plugins: [
      AutoImport({
        imports: ["vue", "vue-router", "@vueuse/core"],
        dts: "src/auto-imports.d.ts",
        dirs: ["src/common/**", "src/utils/**"],
        vueTemplate: true,
        resolvers: [ElementPlusResolver()],
      }),

      Components({
        dts: "src/components.d.ts",
        dirs: ["src/components"],
        resolvers: [ElementPlusResolver()],
      }),

      Pages(),

      Layouts(),

      MockDevServerPlugin(),

      UnoCSS(),

      Vue(),
    ],
    server: {
      proxy: {
        "^/api": {
          target: "",
        },
      },
    },
  }
})
