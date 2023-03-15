import { createRouter, createWebHistory } from "vue-router"
import { setupLayouts } from "virtual:generated-layouts"
import generatedRoutes from "~pages"
import NProgress from "nprogress"

const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(() => {
  NProgress.start()
})

router.afterEach(() => {
  NProgress.done()
})

NProgress.configure({ showSpinner: false })

export default router