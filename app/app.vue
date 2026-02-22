<template>
  <UApp>
    <UHeader title="n0buholic" to="/">
      <UNavigationMenu :items="links" />

      <template #right>
        <UButton
          to="https://github.com/n0buholic/"
          target="_blank"
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
        />
      </template>

      <template #body>
        <UNavigationMenu
          :items="links"
          orientation="vertical"
          class="-mx-2.5"
        />
      </template>
    </UHeader>

    <ParticlesBackground />
    <NuxtPage />

    <!-- Professional Footer -->
    <UFooter
      class="border-t border-neutral-800 bg-neutral-950/50 backdrop-blur-md"
    >
      <template #left>
        <div
          class="flex flex-col items-center md:items-start text-neutral-400 text-sm"
        >
          <p class="font-semibold text-white mb-2 text-lg">n0buholic</p>
          <p>
            &copy; {{ new Date().getFullYear() }} n0buholic. All rights
            reserved.
          </p>
          <p class="mt-1">
            Built with <strong class="text-primary-500">Nuxt</strong> and
            <strong class="text-primary-500">Nuxt UI</strong>.
          </p>
        </div>
      </template>

      <template #right>
        <div class="flex flex-col items-center md:items-end">
          <p class="text-sm text-neutral-400 mb-3 md:hidden">Let's connect!</p>
          <div class="flex gap-2">
            <UButton
              to="mailto:n0buholic@gmail.com"
              color="neutral"
              variant="ghost"
              icon="i-simple-icons-gmail"
              class="hover:text-primary-400 transition-colors"
              aria-label="Email Me"
            />
            <UButton
              to="https://wa.me/628979543684"
              target="_blank"
              color="neutral"
              variant="ghost"
              icon="i-simple-icons-whatsapp"
              class="hover:text-emerald-500 transition-colors"
              aria-label="WhatsApp"
            />
            <UButton
              to="https://github.com/n0buholic/"
              target="_blank"
              color="neutral"
              variant="ghost"
              icon="i-simple-icons-github"
              class="hover:text-white transition-colors"
              aria-label="GitHub"
            />
          </div>
        </div>
      </template>
    </UFooter>
  </UApp>
</template>

<script setup>
useSeoMeta({
  title: "n0buholic | Fullstack Developer Portfolio",
  ogTitle: "n0buholic's Portfolio",
  description:
    "Robby (n0buholic)'s personal portfolio showcasing fullstack development projects and tech skills.",
  ogDescription:
    "Explore Robby (n0buholic)'s fullstack development projects, tech stack, and passion for programming and music.",
  ogUrl: "https://n0buholic.github.io/",
  ogType: "website",
  ogSiteName: "n0buholic's Portfolio",
  twitterCard: "summary_large_image",
  twitterTitle: "n0buholic's Portfolio",
  twitterDescription:
    "Explore Robby (n0buholic)'s fullstack development projects and tech stack.",
  twitterCreator: "@n0buholic",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [{ rel: "icon", type: "image/png", href: "/assets/favicon.png" }],
  meta: [
    {
      name: "keywords",
      content:
        "n0buholic, fullstack developer, Vue.js, web development, programming, portfolio",
    },
    { name: "author", content: "Robby (n0buholic)" },
    { name: "robots", content: "index, follow" },
    { name: "theme-color", content: "#1d2021" },
  ],
});

const links = [
  { label: "Home", icon: "i-heroicons-home", to: "/" },
  { label: "Projects", icon: "i-heroicons-briefcase", to: "/projects" },
];
</script>
