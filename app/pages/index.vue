<template>
  <div class="min-h-screen p-8 text-gruvbox-milk bg-gruvbox-dark font-mono">
    <!-- Header / Hero Section -->
    <header
      class="flex flex-col items-center justify-center py-20 border-b border-gruvbox-gray/30"
    >
      <div
        class="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-gruvbox-blue"
      >
        <!-- Optional profile image -->
        <div
          class="w-full h-full bg-gruvbox-gray flex items-center justify-center text-gruvbox-dark font-bold text-4xl"
        >
          N0
        </div>
      </div>
      <h1 class="text-5xl font-bold text-gruvbox-yellow mb-2">
        Robby (n0buholic)
      </h1>
      <h2 class="text-2xl text-gruvbox-aqua mb-6">Fullstack Developer</h2>

      <p
        class="max-w-2xl text-center text-gruvbox-milk text-lg leading-relaxed"
      >
        Passionate about crafting dynamic web applications, solving complex
        problems, and creating user-centric digital experiences. Always learning
        and exploring the tech stack.
      </p>

      <!-- Social Links -->
      <div class="mt-8 flex gap-4 text-2xl">
        <a
          href="https://github.com/n0buholic"
          target="_blank"
          class="text-gruvbox-milk hover:text-gruvbox-orange transition-colors"
        >
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a
          href="https://twitter.com/n0buholic"
          target="_blank"
          class="text-gruvbox-milk hover:text-gruvbox-blue transition-colors"
        >
          <font-awesome-icon :icon="['fab', 'x-twitter']" />
        </a>
        <a
          href="#"
          class="text-gruvbox-milk hover:text-gruvbox-green transition-colors"
        >
          <font-awesome-icon :icon="['fab', 'whatsapp']" />
        </a>
      </div>
    </header>

    <!-- Projects Section -->
    <main class="max-w-5xl mx-auto py-16">
      <h3
        class="text-3xl font-bold text-gruvbox-orange mb-10 flex items-center gap-3"
      >
        <font-awesome-icon :icon="['fas', 'code-branch']" />
        Selected Projects
      </h3>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Project Card Template -->
        <div
          v-for="(project, idx) in projects"
          :key="idx"
          class="bg-gruvbox-dark border border-gruvbox-gray/40 rounded-lg overflow-hidden hover:border-gruvbox-yellow transition-colors group"
        >
          <div class="h-48 bg-gruvbox-gray/20 overflow-hidden relative">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              v-if="project.image"
            />
            <div
              class="absolute inset-0 flex items-center justify-center text-gruvbox-gray"
              v-else
            >
              [Image Placeholder]
            </div>
          </div>
          <div class="p-6">
            <h4 class="text-2xl font-bold text-gruvbox-green mb-2">
              {{ project.title }}
            </h4>
            <p
              class="text-gruvbox-milk/80 mb-4 h-20 overflow-hidden text-ellipsis"
            >
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2 mb-4">
              <UBadge
                v-for="tech in project.stack"
                :key="tech"
                color="neutral"
                variant="subtle"
                class="bg-gruvbox-gray/30 text-gruvbox-aqua ring-0"
              >
                {{ tech }}
              </UBadge>
            </div>
            <UButton
              :to="project.link"
              target="_blank"
              color="neutral"
              variant="ghost"
              class="px-0 font-bold hover:text-gruvbox-yellow text-gruvbox-blue transition-colors gap-2"
            >
              View Project
              <font-awesome-icon :icon="['fas', 'code']" class="ml-1" />
            </UButton>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer
      class="text-center py-8 border-t border-gruvbox-gray/30 text-gruvbox-gray text-sm mt-12"
    >
      <p>
        &copy; {{ new Date().getFullYear() }} Robby (n0buholic). All rights
        reserved.
      </p>
      <p class="mt-2 text-gruvbox-milk/50">
        Built with
        <a href="https://nuxt.com" class="text-gruvbox-green hover:underline"
          >Nuxt 3</a
        >
        &
        <a
          href="https://tailwindcss.com"
          class="text-gruvbox-blue hover:underline"
          >TailwindCSS</a
        >
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";

useHead({
  title: "n0buholic | Fullstack Developer Portfolio",
  meta: [
    {
      name: "description",
      content:
        "Robby (n0buholic)'s personal portfolio showcasing fullstack development projects and tech skills.",
    },
    { name: "theme-color", content: "#1d2021" },
  ],
  link: [{ rel: "icon", type: "image/png", href: "/assets/favicon.png" }],
});

// Using the images found in /public/projects directory based on `ls` earlier
const projects = ref([
  {
    title: "Haru Desktop",
    description:
      "A desktop application interface focused on clean, responsive design and intuitive user experience.",
    image: "/projects/haru-desktop.png",
    stack: ["Vue.js", "Electron", "TailwindCSS"],
    link: "#",
  },
  {
    title: "DramaBoss",
    description:
      "Comprehensive management dashboard for tracking content, metrics, and user engagement.",
    image: "/projects/dramaboss-desktop.png",
    stack: ["Nuxt.js", "Node.js", "PostgreSQL"],
    link: "#",
  },
  {
    title: "GT Nest",
    description:
      "A modern web platform tailored for community management with real-time updates.",
    image: "/projects/gtnest-desktop.png",
    stack: ["React", "Firebase", "TypeScript"],
    link: "#",
  },
  {
    title: "Aki Mobile App",
    description:
      "A cross-platform mobile application providing seamless access to daily utilities.",
    image: "/projects/aki-mobile.png",
    stack: ["React Native", "Expo", "GraphQL"],
    link: "#",
  },
]);
</script>
