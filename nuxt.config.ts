// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport:
        "width=device-width, initial-scale=1.0, maximum-scale=0.3, minimum-scale=0.3",
      title: "gcg-simulator",
      meta: [{ name: "description", content: "gcg-simulator" }],
    },
  },
  modules: ["@nuxt/image-edge"],
})
