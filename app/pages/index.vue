<template>
  <div
    class="min-h-screen text-neutral-400 font-sans selection:bg-primary-500 selection:text-neutral-900"
  >
    <!-- Hero Section -->
    <UContainer
      class="py-12 lg:py-24 flex flex-col items-center justify-center"
    >
      <div
        class="text-center opacity-0 transition-all duration-1000 transform translate-y-8"
        :class="{ 'opacity-100 translate-y-0': isMounted }"
      >
        <div
          class="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full bg-neutral-900/80 border border-neutral-800 shadow-lg backdrop-blur-md"
        >
          <span class="relative flex h-3 w-3">
            <span
              class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"
            ></span>
            <span
              class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"
            ></span>
          </span>
          <span class="text-sm font-medium text-neutral-200"
            >Available for new opportunities</span
          >
        </div>

        <h1
          class="font-sans font-black text-6xl md:text-7xl lg:text-8xl text-primary-500 tracking-tight mb-4 drop-shadow-2xl"
        >
          n0buholic
        </h1>

        <p
          class="text-neutral-400 text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Self-taught
          <strong class="text-primary-400 font-semibold"
            >fullstack developer</strong
          >
          with a passion for
          <strong class="text-amber-500 font-semibold">programming</strong> and
          <strong class="text-indigo-400 font-semibold">music</strong>.
        </p>

        <div class="flex flex-wrap justify-center gap-5">
          <UTooltip text="GitHub" placement="bottom">
            <UButton
              to="https://github.com/n0buholic/"
              target="_blank"
              color="neutral"
              variant="ghost"
              class="hover:bg-neutral-900 hover:text-white transition-all duration-300 rounded-full p-4 group"
            >
              <UIcon
                name="i-simple-icons-github"
                class="w-8 h-8 transform group-hover:scale-110 transition-transform"
              />
            </UButton>
          </UTooltip>
          <UTooltip text="Facebook" placement="bottom">
            <UButton
              to="https://web.facebook.com/n0buholic"
              target="_blank"
              color="neutral"
              variant="ghost"
              class="hover:bg-neutral-900 hover:text-blue-500 transition-all duration-300 rounded-full p-4 group"
            >
              <UIcon
                name="i-simple-icons-facebook"
                class="w-8 h-8 transform group-hover:scale-110 transition-transform"
              />
            </UButton>
          </UTooltip>
          <UTooltip text="Instagram" placement="bottom">
            <UButton
              to="https://instagram.com/n0buholic"
              target="_blank"
              color="neutral"
              variant="ghost"
              class="hover:bg-neutral-900 hover:text-pink-500 transition-all duration-300 rounded-full p-4 group"
            >
              <UIcon
                name="i-simple-icons-instagram"
                class="w-8 h-8 transform group-hover:scale-110 transition-transform"
              />
            </UButton>
          </UTooltip>
          <UTooltip text="WhatsApp" placement="bottom">
            <UButton
              to="https://wa.me/628979543684"
              target="_blank"
              color="neutral"
              variant="ghost"
              class="hover:bg-neutral-900 hover:text-emerald-500 transition-all duration-300 rounded-full p-4 group"
            >
              <UIcon
                name="i-simple-icons-whatsapp"
                class="w-8 h-8 transform group-hover:scale-110 transition-transform"
              />
            </UButton>
          </UTooltip>
        </div>
      </div>
    </UContainer>

    <UContainer class="py-24">
      <!-- Tech Stack -->
      <section
        class="mb-24 opacity-0 transition-all duration-1000 transform translate-y-8 delay-200"
        :class="{ 'opacity-100 translate-y-0': isMounted }"
      >
        <div
          class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10"
        >
          <div>
            <h2 class="font-bold text-4xl text-neutral-200 mb-2 drop-shadow-md">
              Tools & Technologies
            </h2>
            <p class="text-neutral-400 text-lg">
              The ecosystem I work with on a daily basis
            </p>
          </div>
        </div>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <UCard
            v-for="category in techStack"
            :key="category.title"
            class="bg-neutral-900/40 backdrop-blur-md border border-neutral-800 hover:border-primary-500/50 transition-colors duration-500 shadow-2xl group"
            :ui="{
              body: 'p-6 sm:p-8',
              header: 'p-6 pb-0 sm:p-8 sm:pb-0 border-b-0',
            }"
          >
            <template #header>
              <h3
                class="font-bold text-xl text-neutral-300 group-hover:text-primary-400 transition-colors"
              >
                {{ category.title }}
              </h3>
            </template>

            <div
              class="grid grid-cols-5 md:grid-cols-4 items-center justify-center gap-4 mt-2 w-full"
            >
              <UTooltip
                v-for="tech in category.items"
                :key="tech.name"
                :text="tech.name"
                placement="top"
              >
                <div
                  class="mx-auto w-14 h-14 rounded-xl bg-neutral-950 border border-neutral-800 p-2.5 flex items-center justify-center hover:scale-110 hover:-rotate-3 hover:shadow-lg hover:shadow-primary-500/10 hover:border-primary-500/30 transition-all duration-300 cursor-help"
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

      <!-- GitHub Stats Section -->
      <section class="pt-10 mb-24 relative z-10">
        <div class="mb-12 text-center">
          <h2 class="font-bold text-4xl text-neutral-200 mb-2 drop-shadow-md">
            My GitHub Activity
          </h2>
        </div>

        <div class="grid grid-cols-1 md:max-w-3xl mx-auto">
          <!-- Main Stats -->
          <UCard
            class="bg-neutral-900/40 backdrop-blur-md border border-neutral-800 hover:border-primary-500/50 transition-colors duration-300 overflow-hidden group w-full"
            :ui="{ body: { padding: 'p-0 sm:p-0' } }"
          >
            <div
              class="flex justify-center items-center w-full p-4 sm:p-6 lg:p-8 rounded-xl bg-neutral-950"
            >
              <a
                href="https://git.io/streak-stats"
                target="_blank"
                class="w-full block"
                ><img
                  src="https://streak-stats.demolab.com?user=n0buholic&theme=algolia&hide_border=true&short_numbers=true"
                  alt="GitHub Streak"
                  class="w-full object-cover transform opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
              /></a>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Clients Section -->
      <section
        class="opacity-0 transition-all duration-1000 transform translate-y-8 delay-300 mb-24 relative z-10"
        :class="{ 'opacity-100 translate-y-0': isMounted }"
      >
        <div class="w-full overflow-hidden mx-auto relative">
          <!-- Fade masks -->

          <UMarquee class="py-4" :ui="{ root: 'h-14', item: 'h-14' }">
            <template #default>
              <div
                v-for="(svg, idx) in clientLogos"
                :key="idx"
                class="client-logo text-neutral-500 hover:text-white transition-colors duration-300 h-10 items-center justify-center opacity-70 hover:opacity-100"
                v-html="svg"
              ></div>
            </template>
          </UMarquee>
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
            <h2 class="font-bold text-4xl text-neutral-200 mb-2 drop-shadow-md">
              Featured Projects
            </h2>
            <p class="text-neutral-400 text-lg">
              A selection of my recent works and contributions
            </p>
          </div>
          <UButton
            to="/projects"
            color="neutral"
            variant="outline"
            class="text-primary-500 hover:text-primary-400 font-medium group"
          >
            Explore all projects
            <UIcon
              name="i-heroicons-arrow-right"
              class="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
            />
          </UButton>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 group/grid">
          <ProjectCard
            v-for="project in featuredProjects"
            :key="project.title"
            :project="project"
            view-label="View"
          />
        </div>
      </section>
    </UContainer>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { techStack, projects } from "~/utils/data";

useHead({
  title: "Home",
});

const isMounted = ref(false);

const clientLogoModules = import.meta.glob("~/assets/logos/*.svg", {
  query: "?raw",
  eager: true,
  import: "default",
});
const clientLogos = Object.values(clientLogoModules);

const featuredProjects = computed(() =>
  projects.filter((p) => p.featured).slice(0, 3),
);

onMounted(() => {
  setTimeout(() => {
    isMounted.value = true;
  }, 100);
});
</script>
