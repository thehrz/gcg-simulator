import { createApp } from "vue"
import { createRouter, createWebHashHistory } from "vue-router"
import { setupLayouts } from "virtual:generated-layouts"
import generatedRoutes from "~pages"
import App from "./App.vue"

import "~/assets/styles/main.scss"
import "uno.css"
import { done, start } from "./utils/Porgress"

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((pre, next) => {
  start()
})

router.afterEach(() => {
  done()
})

createApp(App).use(router).mount("#app")
