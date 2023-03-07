import { createApp } from "vue"
import { createRouter, createWebHashHistory } from "vue-router"
import { setupLayouts } from "virtual:generated-layouts"
import generatedRoutes from "~pages"
import App from "./App.vue"

import "~/assets/styles/main.scss"
import "uno.css"
import { initPorgress } from "./utils/Porgress"

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

initPorgress(router)

createApp(App).use(router).mount("#app")
