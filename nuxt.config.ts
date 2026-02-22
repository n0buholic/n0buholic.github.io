// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        class: "bg-neutral-950",
      },
      titleTemplate: "%s | n0buholic",
    },
  },
  ssr: false,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/seo"],
  site: {
    url: "https://n0buholic.github.io",
    siteName: "n0buholic",
    name: "n0buholic | Portfolio",
    description:
      "A personal portfolio showcasing my projects, tech stack, and skills.",
    defaultLocale: "en",
  },
  ogImage: {
    enabled: false,
  },
  schemaOrg: {
    enabled: false,
  },
  css: ["~/assets/css/main.css"],
});
