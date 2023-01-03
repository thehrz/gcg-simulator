// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    preset: 'vercel',
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=0.3, minimum-scale=0.3",
      title: "genius-invokation-simulator",
      meta: [{ name: "description", content: "genius-invokation-simulator" }],
    },
  },
  modules: ["@nuxt/image-edge"],
})
