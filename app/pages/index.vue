<template>
  <div
    class="min-h-screen text-gruvbox-gray font-sans selection:bg-gruvbox-yellow selection:text-[#202020]"
  >
    <div
      class="fixed inset-0 bg-gradient-to-br from-[#282828]/[.8] to-[#1d2021] z-[-1]"
    ></div>

    <div class="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div
        v-for="(p, i) in particles"
        :key="i"
        class="particle"
        :style="{ left: p.left, top: p.top, animationDelay: p.delay }"
      ></div>
    </div>

    <!-- Hero Section -->
    <UContainer
      class="pt-24 pb-16 lg:pt-32 lg:pb-24 flex flex-col items-center justify-center min-h-[75vh]"
    >
      <div
        class="text-center opacity-0 transition-all duration-1000 transform translate-y-8"
        :class="{ 'opacity-100 translate-y-0': isMounted }"
      >
        <div
          class="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full bg-[#202020]/80 border border-[#333] shadow-lg backdrop-blur-md"
        >
          <span class="relative flex h-3 w-3">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-gruvbox-green opacity-75"
            ></span>
            <span
              class="relative inline-flex rounded-full h-3 w-3 bg-gruvbox-green"
            ></span>
          </span>
          <span class="text-sm font-medium text-gruvbox-milk"
            >Available for new opportunities</span
          >
        </div>

        <h1
          class="font-sans font-black text-6xl md:text-7xl lg:text-8xl text-gruvbox-yellow tracking-tight mb-4 drop-shadow-2xl"
        >
          n0buholic
        </h1>

        <p
          class="text-gruvbox-gray text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Self-taught
          <strong class="text-gruvbox-aqua font-semibold"
            >fullstack developer</strong
          >
          with a passion for
          <strong class="text-gruvbox-orange font-semibold">programming</strong>
          and <strong class="text-gruvbox-purple font-semibold">music</strong>.
        </p>

        <div class="flex flex-wrap justify-center gap-5">
          <UTooltip text="GitHub" placement="bottom">
            <UButton
              to="https://github.com/n0buholic/"
              target="_blank"
              color="neutral"
              variant="ghost"
              class="hover:bg-[#202020] hover:text-gruvbox-yellow transition-all duration-300 rounded-full p-4 group"
            >
              <font-awesome-icon
                :icon="['fab', 'github']"
                class="text-3xl transform group-hover:scale-110 transition-transform"
              />
            </UButton>
          </UTooltip>
          <UTooltip text="Facebook" placement="bottom">
            <UButton
              to="https://web.facebook.com/n0buholic"
              target="_blank"
              color="neutral"
              variant="ghost"
              class="hover:bg-[#202020] hover:text-gruvbox-blue transition-all duration-300 rounded-full p-4 group"
            >
              <font-awesome-icon
                :icon="['fab', 'facebook']"
                class="text-3xl transform group-hover:scale-110 transition-transform"
              />
            </UButton>
          </UTooltip>
          <UTooltip text="Instagram" placement="bottom">
            <UButton
              to="https://instagram.com/n0buholic"
              target="_blank"
              color="neutral"
              variant="ghost"
              class="hover:bg-[#202020] hover:text-gruvbox-purple transition-all duration-300 rounded-full p-4 group"
            >
              <font-awesome-icon
                :icon="['fab', 'instagram']"
                class="text-3xl transform group-hover:scale-110 transition-transform"
              />
            </UButton>
          </UTooltip>
          <UTooltip text="X (Twitter)" placement="bottom">
            <UButton
              to="https://x.com/n0buholic"
              target="_blank"
              color="neutral"
              variant="ghost"
              class="hover:bg-[#202020] hover:text-gruvbox-milk transition-all duration-300 rounded-full p-4 group"
            >
              <font-awesome-icon
                :icon="['fab', 'x-twitter']"
                class="text-3xl transform group-hover:scale-110 transition-transform"
              />
            </UButton>
          </UTooltip>
          <UTooltip text="WhatsApp" placement="bottom">
            <UButton
              to="https://wa.me/628979543684"
              target="_blank"
              color="neutral"
              variant="ghost"
              class="hover:bg-[#202020] hover:text-gruvbox-green transition-all duration-300 rounded-full p-4 group"
            >
              <font-awesome-icon
                :icon="['fab', 'whatsapp']"
                class="text-3xl transform group-hover:scale-110 transition-transform"
              />
            </UButton>
          </UTooltip>
        </div>
      </div>
    </UContainer>

    <UContainer class="pb-24">
      <!-- Tech Stack -->
      <section
        class="mb-24 opacity-0 transition-all duration-1000 transform translate-y-8 delay-200"
        :class="{ 'opacity-100 translate-y-0': isMounted }"
      >
        <div
          class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10"
        >
          <div>
            <h2
              class="font-bold text-4xl text-gruvbox-milk mb-2 font-mono drop-shadow-md"
            >
              Tools & Technologies
            </h2>
            <p class="text-gruvbox-gray text-lg">
              The ecosystem I work with on a daily basis
            </p>
          </div>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <UCard
            v-for="category in techStack"
            :key="category.title"
            class="bg-[#202020]/40 backdrop-blur-md border-[#333] hover:border-gruvbox-yellow/50 transition-colors duration-500 shadow-2xl group"
            :ui="{
              body: 'p-6 sm:p-8',
              header: 'p-6 pb-0 sm:p-8 sm:pb-0 border-b-0',
            }"
          >
            <template #header>
              <h3
                class="font-bold text-xl text-gruvbox-aqua group-hover:text-gruvbox-yellow transition-colors"
              >
                {{ category.title }}
              </h3>
            </template>

            <div class="flex flex-wrap gap-4 mt-2">
              <UTooltip
                v-for="tech in category.items"
                :key="tech.name"
                :text="tech.name"
                placement="top"
              >
                <div
                  class="w-14 h-14 rounded-xl bg-[#282828] border border-[#333] p-2.5 flex items-center justify-center hover:scale-110 hover:-rotate-3 hover:shadow-lg hover:shadow-gruvbox-yellow/10 hover:border-gruvbox-yellow/30 transition-all duration-300 cursor-help"
                >
                  <img
                    :src="tech.icon"
                    :alt="tech.name"
                    class="w-full h-full object-contain"
                    draggable="false"
                  />
                </div>
              </UTooltip>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Projects -->
      <section
        class="opacity-0 transition-all duration-1000 transform translate-y-8 delay-500"
        :class="{ 'opacity-100 translate-y-0': isMounted }"
      >
        <div
          class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10"
        >
          <div>
            <h2
              class="font-bold text-4xl text-gruvbox-milk mb-2 font-mono drop-shadow-md"
            >
              Featured Projects
            </h2>
            <p class="text-gruvbox-gray text-lg">
              A selection of my recent works and contributions
            </p>
          </div>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 group/grid">
          <UCard
            v-for="project in projects"
            :key="project.title"
            class="group bg-[#202020]/80 backdrop-blur-lg border border-[#333] hover:border-gruvbox-yellow/50 hover:shadow-2xl hover:shadow-gruvbox-yellow/10 transition-all duration-500 flex flex-col overflow-hidden relative"
            :class="{ 'opacity-75 hover:opacity-100': project.strikethrough }"
            :ui="{ body: 'flex-1 flex flex-col p-6', header: 'p-0 sm:p-0' }"
          >
            <template #header>
              <div class="relative overflow-hidden aspect-[16/9] bg-[#282828]">
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-[#202020] via-[#202020]/30 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-75"
                ></div>

                <div
                  v-if="project.link"
                  class="absolute top-4 right-4 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 z-10"
                >
                  <UButton
                    :to="project.link"
                    target="_blank"
                    color="neutral"
                    variant="solid"
                    class="rounded-full shadow-lg bg-gruvbox-yellow text-[#202020] hover:bg-gruvbox-orange transition-colors"
                  >
                    View
                    <font-awesome-icon
                      :icon="['fas', 'arrow-up-right-from-square']"
                      class="ml-1"
                    />
                  </UButton>
                </div>
              </div>
            </template>

            <div class="flex-1 flex flex-col relative z-20">
              <h3
                class="font-bold text-xl text-gruvbox-yellow mb-3 group-hover:text-gruvbox-orange transition-colors"
                :class="{
                  'line-through text-gruvbox-gray font-semibold':
                    project.strikethrough,
                }"
              >
                {{ project.title }}
              </h3>

              <div
                class="text-gruvbox-milk/80 text-sm mb-6 flex-1 line-clamp-4 leading-relaxed"
                v-html="formatDescription(project.description)"
              ></div>

              <div
                class="flex flex-wrap gap-2 mt-auto pt-4 border-t border-[#333]/50"
              >
                <UBadge
                  v-for="tech in project.tags"
                  :key="tech"
                  color="neutral"
                  variant="subtle"
                  class="bg-[#282828] text-gruvbox-aqua ring-1 ring-[#333] font-medium transition-colors hover:text-gruvbox-yellow hover:border-gruvbox-yellow"
                >
                  {{ tech }}
                </UBadge>
              </div>
            </div>

            <!-- Clickable overlay if there's a link -->
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              class="absolute inset-0 z-0"
            ></a>
          </UCard>
        </div>
      </section>
    </UContainer>

    <footer
      class="text-center py-10 text-gruvbox-gray text-sm border-t border-[#333] bg-[#1d2021]/50 backdrop-blur-md"
    >
      <p>
        &copy; {{ new Date().getFullYear() }} n0buholic. Built with
        <strong class="text-gruvbox-yellow">Nuxt</strong> and
        <strong class="text-gruvbox-yellow">Nuxt UI</strong>.
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isMounted = ref(false);
const particles = ref([]);

onMounted(() => {
  for (let i = 0; i < 20; i++) {
    particles.value.push({
      left: `${(Math.random() * 100).toFixed(4)}%`,
      top: `${(Math.random() * 100).toFixed(4)}%`,
      delay: `${(Math.random() * 5).toFixed(4)}s`,
    });
  }

  setTimeout(() => {
    isMounted.value = true;
  }, 100);
});

const formatDescription = (desc) => {
  return desc
    .replace(/\n/g, "<br />")
    .replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="text-gruvbox-milk font-semibold">$1</strong>',
    );
};

const techStack = [
  {
    title: "Version Control & Tools",
    items: [
      { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
      { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
      { name: "GitLab", icon: "https://skillicons.dev/icons?i=gitlab" },
      { name: "VSCode", icon: "https://skillicons.dev/icons?i=vscode" },
      { name: "Bun", icon: "https://skillicons.dev/icons?i=bun" },
      { name: "NPM", icon: "https://skillicons.dev/icons?i=npm" },
      { name: "PNPM", icon: "https://skillicons.dev/icons?i=pnpm" },
      { name: "Yarn", icon: "https://skillicons.dev/icons?i=yarn" },
      { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
      { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgresql" },
      { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
      { name: "Redis", icon: "https://skillicons.dev/icons?i=redis" },
      { name: "SQLite", icon: "https://skillicons.dev/icons?i=sqlite" },
    ],
  },
  {
    title: "Core Web Technologies",
    items: [
      { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
      { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
      { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
      { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
      { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
      { name: "PHP", icon: "https://skillicons.dev/icons?i=php" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "Express", icon: "https://skillicons.dev/icons?i=express" },
      { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" },
      { name: "Vite", icon: "https://skillicons.dev/icons?i=vite" },
      { name: "Vue.js", icon: "https://skillicons.dev/icons?i=vuejs" },
      { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
      { name: "NestJS", icon: "https://skillicons.dev/icons?i=nestjs" },
      { name: "Alpine.js", icon: "https://skillicons.dev/icons?i=alpinejs" },
      { name: "Laravel", icon: "https://skillicons.dev/icons?i=laravel" },
      { name: "Electron", icon: "https://skillicons.dev/icons?i=electron" },
      { name: "Nuxt", icon: "https://skillicons.dev/icons?i=nuxt" },
      { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
    ],
  },
];

const projects = [
  {
    title: "GTNest - Gaming Marketplace",
    description:
      "GTNest is the ultimate marketplace for true gamers! Designed for the gaming community, GTNest offers a unique and engaging shopping experience, connecting enthusiasts with the gear, games, and accessories they love. More than just a platform, it's a vibrant hub where gamers can explore and elevate their gaming journey.",
    image: "/projects/gtnest-desktop.png",
    tags: ["Vue.js", "Laravel", "MySQL"],
    link: "https://gtnest.com",
  },
  {
    title: "DramaBoss",
    description:
      "Dramaboss is a free online streaming platform offering a wide range of popular Chinese dramas sourced from Dramabox. Designed for an enjoyable and seamless viewing experience, it includes features such as:\n- **Full Episode Access**: Watch all episodes without subscriptions or payments.\n- **Trending & Popular Dramas**: Discover the latest and most popular dramas, regularly updated.\n- **Search Functionality**: Easily find your favorite dramas with an intuitive search feature.\n- **Diverse Categories**: Explore dramas by categories like romance, action, fantasy, and more.\nBuilt with modern technologies like **Vue.js** and **Vite**, Dramaboss provides a responsive and fast interface for both desktop and mobile devices. Visit [Dramaboss](https://dramaboss.online) to start watching your favorite Chinese dramas now!",
    image: "/projects/dramaboss-desktop.png",
    tags: ["Nuxt", "MySQL"],
    link: "https://dramaboss.online",
  },
  {
    title: "Haru no Sakuragi - Event Landing Page",
    description:
      "A vibrant landing page for the Haru no Sakuragi event, showcasing event highlights and registration options.",
    image: "/projects/haru-desktop.png",
    tags: ["Vue.js", "Laravel", "MySQL"],
    link: "https://shiki.dvstproject.id/haru/",
  },
  {
    title: "L'AMOR - Layanan Air Minum Orang Riau",
    description:
      "A web platform for L'AMOR, a drinking water service for the Riau community, providing service information and user management.",
    image: "/projects/lamor-desktop.png",
    tags: ["Vue.js", "Vite", "Laravel", "MySQL"],
    link: "",
  },
  {
    title: "Fuyu no Yukikaze - Event Landing Page",
    description:
      "A visually appealing landing page for the Fuyu no Yukikaze event, featuring event details and registration functionality.",
    image: "/projects/fuyu-desktop.png",
    tags: ["Vue.js", "Laravel", "MySQL"],
    link: "https://shiki.dvstproject.id/fuyu/",
  },
  {
    title: "Aki no Hajimari - Event Landing Page",
    description:
      "A dynamic landing page for the Aki no Hajimari event, offering an interactive experience with event information and registration.",
    image: "/projects/aki-desktop.png",
    tags: ["Vue.js", "Laravel", "MySQL"],
    link: "https://shiki.dvstproject.id/aki/",
  },
  {
    title: "Diversity Project - Event Organizer Landing Page",
    description:
      "A professional landing page for Diversity Project, an event organizer, showcasing upcoming events, services, and many more.",
    image: "/projects/dvstproject-desktop.png",
    tags: ["Wordpress", "PHP"],
    link: "https://dvstproject.id/",
  },
  {
    title: "Arizona Marine Services - Company Landing Page",
    description:
      "A modern landing page for Arizona Marine Services, highlighting marine-related services and expertise.",
    image: "/projects/ams-desktop.png",
    tags: ["Wordpress", "PHP"],
    link: "https://arizonamarineservices.com",
  },
  {
    title: "Garuda Kencana Berdikari - Company Landing Page",
    description:
      "A professional landing page for Garuda Kencana Berdikari, showcasing company services and information.",
    image: "/projects/gkb-desktop.png",
    tags: ["Wordpress", "PHP"],
    strikethrough: true,
    link: "",
  },
  {
    title: "VALORANT Challengers Indonesia 2021 - Game Tournament Platform",
    description:
      "A comprehensive platform for the VALORANT Challengers Indonesia 2021, facilitating tournament organization, player management, and match tracking.",
    image: "/projects/vct2021-desktop.png",
    tags: ["Laravel", "PHP", "Vue.js", "MySQL"],
    link: "",
  },
  {
    title: "SEA Icon Series Indonesia 2021 - Game Tournament Platform",
    description:
      "A dedicated platform for the SEA Icon Series Indonesia 2021, providing tools for managing esports tournaments, including participant registration, live updates, and leaderboards.",
    image: "/projects/seaicon-desktop.png",
    tags: ["Laravel", "PHP", "Vue.js", "MySQL"],
    link: "",
  },
  {
    title: "MGA University Championship 2021 - Game Tournament Platform",
    description:
      "An online platform for the MGA University Championship 2021, enabling tournament registration, match scheduling, and result tracking for university-level gaming competitions.",
    image: "/projects/mga-desktop.png",
    tags: ["Laravel", "PHP", "Vue.js", "MySQL"],
    link: "",
  },
  {
    title: "Sistem Kehadiran Direktorat SMK - Attendance System",
    description:
      "A web-based attendance management system for the SMK Directorate, designed to streamline employee attendance tracking and reporting.",
    image: "/projects/simpeg-desktop.png",
    tags: ["Codeigniter4", "PHP", "MySQL"],
    link: "",
  },
];
</script>
