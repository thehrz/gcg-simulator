import { defineConfig } from "vite"
import Vue from "@vitejs/plugin-vue"
import Pages from "vite-plugin-pages"
import AutoImport from "unplugin-auto-import/vite"
import Layouts from "vite-plugin-vue-layouts"
import Components from "unplugin-vue-components/vite"
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"

// https://vitejs.dev/config/
export default defineConfig({
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

    Vue(),
  ],
})
