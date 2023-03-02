import { defineConfig } from "vite"
import path from "path"
import Vue from "@vitejs/plugin-vue"
import Pages from "vite-plugin-pages"
import AutoImport from "unplugin-auto-import/vite"
import Layouts from "vite-plugin-vue-layouts"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import { viteMockServe as ViteMockServe } from "vite-plugin-mock"

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

      ViteMockServe({
        mockPath: "mock",
        localEnabled: command === "serve",
      }),

      Vue(),
    ],
  }
})
