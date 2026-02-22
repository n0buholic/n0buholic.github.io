<template>
  <div class="min-h-screen text-gruvbox-gray">
    <div
      class="fixed inset-0 bg-gradient-to-br from-[#282828]/[.2] to-[#1d2021]/[.8] z-[-1]"
    ></div>
    <div class="fixed inset-0 z-[-1] overflow-hidden">
      <div
        v-for="(p, i) in particles"
        :key="i"
        class="particle"
        :style="{ left: p.left, top: p.top, animationDelay: p.delay }"
      ></div>
    </div>

    <div
      class="max-w-screen-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-12"
    >
      <section
        class="section mb-12 sm:mb-16 opacity-0 transition-all duration-1000"
        :class="{ 'animate-slide-up': isMounted }"
      >
        <div class="container mx-auto px-4 py-12 text-center">
          <div class="flex justify-center items-end gap-2 mb-6">
            <h1
              class="font-sans font-black text-5xl md:text-6xl text-gruvbox-yellow"
            >
              n0buholic
            </h1>
            <span
              class="text-2xl md:text-3xl font-mono text-gruvbox-yellow animate-pulse"
              >.github.io</span
            >
          </div>
          <p
            class="text-gruvbox-gray text-lg md:text-xl max-w-2xl mx-auto mb-8"
          >
            Robby (aka n0buholic), a self-taught fullstack developer with a
            passion for programming and music.
          </p>
          <div class="flex justify-center gap-6 md:gap-8 text-2xl">
            <a
              href="https://github.com/n0buholic/"
              target="_blank"
              class="group relative text-gruvbox-gray hover:text-gruvbox-yellow transition-colors duration-300"
              aria-label="Visit GitHub profile"
            >
              <font-awesome-icon
                :icon="['fab', 'github']"
                class="transform group-hover:scale-110 transition-transform duration-300"
              />
              <span
                class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#202020] text-gruvbox-yellow text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-nowrap"
                >GitHub</span
              >
            </a>
            <a
              href="https://web.facebook.com/n0buholic"
              target="_blank"
              class="group relative text-gruvbox-gray hover:text-gruvbox-yellow transition-colors duration-300"
              aria-label="Visit Facebook profile"
            >
              <font-awesome-icon
                :icon="['fab', 'facebook']"
                class="transform group-hover:scale-110 transition-transform duration-300"
              />
              <span
                class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#202020] text-gruvbox-yellow text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-nowrap"
                >Facebook</span
              >
            </a>
            <a
              href="https://instagram.com/n0buholic"
              target="_blank"
              class="group relative text-gruvbox-gray hover:text-gruvbox-yellow transition-colors duration-300"
              aria-label="Visit Instagram profile"
            >
              <font-awesome-icon
                :icon="['fab', 'instagram']"
                class="transform group-hover:scale-110 transition-transform duration-300"
              />
              <span
                class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#202020] text-gruvbox-yellow text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-nowrap"
                >Instagram</span
              >
            </a>
            <a
              href="https://x.com/n0buholic"
              target="_blank"
              class="group relative text-gruvbox-gray hover:text-gruvbox-yellow transition-colors duration-300"
              aria-label="Visit X profile"
            >
              <font-awesome-icon
                :icon="['fab', 'x-twitter']"
                class="transform group-hover:scale-110 transition-transform duration-300"
              />
              <span
                class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#202020] text-gruvbox-yellow text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-nowrap"
                >X</span
              >
            </a>
            <a
              href="https://wa.me/628979543684"
              target="_blank"
              class="group relative text-gruvbox-gray hover:text-gruvbox-yellow transition-colors duration-300"
              aria-label="Visit WhatsApp profile"
            >
              <font-awesome-icon
                :icon="['fab', 'whatsapp']"
                class="transform group-hover:scale-110 transition-transform duration-300"
              />
              <span
                class="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#202020] text-gruvbox-yellow text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-nowrap"
                >WhatsApp</span
              >
            </a>
          </div>
        </div>
      </section>

      <section
        class="section mb-12 sm:mb-16 opacity-0 transition-all duration-1000"
        :class="{ 'animate-slide-up': isMounted }"
      >
        <div class="container mx-auto px-4 py-8">
          <h2 class="mb-6 font-bold text-3xl text-gruvbox-yellow">
            Tech Stack
          </h2>
          <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="category in techStack"
              :key="category.title"
              class="p-6 bg-[#202020]/[.3] border-[0.5px] border-[#504945] rounded-lg"
            >
              <h3 class="font-semibold text-lg text-gruvbox-gray mb-4">
                {{ category.title }}
              </h3>
              <div class="flex flex-wrap gap-4">
                <div
                  v-for="tech in category.items"
                  :key="tech.name"
                  class="group relative flex items-center justify-center"
                >
                  <img
                    :src="tech.icon"
                    :alt="tech.name + ' icon'"
                    class="w-12 h-12 select-none transition-transform group-hover:scale-110"
                  />
                  <span
                    class="absolute bottom-14 text-sm text-gruvbox-yellow bg-[#202020] px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none text-nowrap"
                    >{{ tech.name }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="section mb-12 sm:mb-16 opacity-0 transition-all duration-1000"
        :class="{ 'animate-slide-up': isMounted }"
      >
        <div class="container mx-auto px-4 py-8">
          <h2 class="mb-6 font-bold text-3xl text-gruvbox-yellow">
            Latest Projects
          </h2>
          <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="project in projects"
              :key="project.title"
              class="group relative flex flex-col p-5 bg-[#202020] border-[1px] border-[#333] rounded-lg hover:bg-[#2a2a2a] transition-all duration-200 cursor-pointer"
            >
              <div class="mb-4">
                <img
                  :src="project.image"
                  :alt="project.title + ' preview'"
                  class="w-full object-cover rounded-md aspect-[16/9]"
                />
              </div>
              <div class="flex-1">
                <h3
                  class="font-bold text-lg text-gruvbox-yellow mb-2"
                  :class="{ 'line-through': project.strikethrough }"
                >
                  {{ project.title }}
                </h3>
                <p class="text-gruvbox-gray text-sm mb-4 line-clamp-3">
                  {{ project.description }}
                </p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="tech in project.tags"
                    :key="tech"
                    class="px-2 py-1 bg-[#333] text-gruvbox-gray text-xs rounded-full"
                    >{{ tech }}</span
                  >
                </div>
              </div>
              <div class="flex gap-4 text-sm">
                <a
                  v-if="project.link"
                  :href="project.link"
                  target="_blank"
                  class="text-gruvbox-yellow hover:underline z-10 relative"
                  >live</a
                >
              </div>
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                class="absolute inset-0 border-2 border-transparent group-hover:border-gruvbox-yellow rounded-lg transition-all duration-200"
              ></a>
              <div
                v-else
                class="absolute inset-0 border-2 border-transparent group-hover:border-gruvbox-yellow rounded-lg transition-all duration-200 pointer-events-none"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <footer
      class="text-center py-8 text-gruvbox-gray text-sm border-t border-[#504945]/[.3]"
    >
      <p>
        &copy; {{ new Date().getFullYear() }} n0buholic. Built with
        <span class="text-gruvbox-yellow">Vue.js</span> and
        <span class="text-gruvbox-yellow">Tailwind CSS</span>.
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

const techStack = [
  {
    title: "Version Control & Tools",
    items: [
      { name: "Git", icon: "https://skillicons.dev/icons?i=git" },
      { name: "GitHub", icon: "https://skillicons.dev/icons?i=github" },
      { name: "VS Code", icon: "https://skillicons.dev/icons?i=vscode" },
      { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
    ],
  },
  {
    title: "Core Web Technologies",
    items: [
      { name: "HTML", icon: "https://skillicons.dev/icons?i=html" },
      { name: "CSS", icon: "https://skillicons.dev/icons?i=css" },
      { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
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
      { name: "Laravel", icon: "https://skillicons.dev/icons?i=laravel" },
      {
        name: "Codeigniter",
        icon: "https://skillicons.dev/icons?i=codeigniter",
      },
      { name: "Electron", icon: "https://skillicons.dev/icons?i=electron" },
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
    title: "Dramaboss",
    description:
      "Dramaboss is a free online streaming platform offering a wide range of popular Chinese dramas sourced from Dramabox. Designed for an enjoyable and seamless viewing experience, it includes features such as:\n- **Full Episode Access**: Watch all episodes without subscriptions or payments.\n- **Trending & Popular Dramas**: Discover the latest and most popular dramas, regularly updated.\n- **Search Functionality**: Easily find your favorite dramas with an intuitive search feature.\n- **Diverse Categories**: Explore dramas by categories like romance, action, fantasy, and more.\nBuilt with modern technologies like **Vue.js** and **Vite**, Dramaboss provides a responsive and fast interface for both desktop and mobile devices. Visit [Dramaboss](https://dramaboss.online) to start watching your favorite Chinese dramas now!",
    image: "/projects/dramaboss-desktop.png",
    tags: ["Vue.js", "Vite", "Laravel", "MySQL"],
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
