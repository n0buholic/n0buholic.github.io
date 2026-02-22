// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/seo"],
  site: {
    url: "https://n0buholic.github.io",
    name: "n0buholic | Portfolio",
    description:
      "A personal portfolio showcasing my projects, tech stack, and skills.",
    defaultLocale: "id",
  },
  ogImage: {
    enabled: false,
  },
  css: ["~/assets/css/main.css"],
});
