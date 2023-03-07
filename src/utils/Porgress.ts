import NProgress from "nprogress"
import "nprogress/nprogress.css"
import { Router } from "vue-router"

export function initPorgress(router: Router) {
  router.beforeEach((pre, next) => {
    NProgress.start()
  })
  
  router.afterEach(() => {
    NProgress.done()
  })

  NProgress.configure({ showSpinner: false })
}
