<template>
  <div
    class="min-h-screen text-neutral-400 font-sans selection:bg-primary-500 selection:text-neutral-900"
  >
    <div class="fixed inset-0 bg-neutral-950 z-[-1]"></div>

    <ParticlesBackground />

    <!-- Hero Section -->
    <UContainer
      class="pt-24 pb-16 lg:pt-32 lg:pb-24 flex flex-col items-center justify-center min-h-[75vh]"
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
              class="hover:bg-neutral-900 hover:text-blue-500 transition-all duration-300 rounded-full p-4 group"
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
              class="hover:bg-neutral-900 hover:text-pink-500 transition-all duration-300 rounded-full p-4 group"
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
              class="hover:bg-neutral-900 hover:text-neutral-300 transition-all duration-300 rounded-full p-4 group"
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
              class="hover:bg-neutral-900 hover:text-emerald-500 transition-all duration-300 rounded-full p-4 group"
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
              class="font-bold text-4xl text-neutral-200 mb-2 font-mono drop-shadow-md"
            >
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

            <div class="grid grid-cols-4 gap-4 mt-2">
              <UTooltip
                v-for="tech in category.items"
                :key="tech.name"
                :text="tech.name"
                placement="top"
              >
                <div
                  class="w-14 h-14 rounded-xl bg-neutral-950 border border-neutral-800 p-2.5 flex items-center justify-center hover:scale-110 hover:-rotate-3 hover:shadow-lg hover:shadow-primary-500/10 hover:border-primary-500/30 transition-all duration-300 cursor-help"
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
              class="font-bold text-4xl text-neutral-200 mb-2 font-mono drop-shadow-md"
            >
              Featured Projects
            </h2>
            <p class="text-neutral-400 text-lg">
              A selection of my recent works and contributions
            </p>
          </div>
          <UButton
            to="/projects"
            color="neutral"
            variant="ghost"
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
          <UCard
            v-for="project in featuredProjects"
            :key="project.title"
            class="group bg-neutral-900/80 backdrop-blur-lg border border-neutral-800 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 flex flex-col overflow-hidden relative"
            :class="{ 'opacity-75 hover:opacity-100': project.strikethrough }"
            :ui="{
              body: 'flex-1 flex flex-col p-6',
              header: 'p-0 sm:p-0 border-b-0',
            }"
          >
            <template #header>
              <div
                class="relative overflow-hidden aspect-[16/9] bg-neutral-950"
              >
                <img
                  :src="project.desktopImage"
                  :alt="project.title"
                  class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-75"
                ></div>

                <div
                  class="absolute top-4 right-4 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 z-10"
                >
                  <UButton
                    :to="`/projects/${project.slug}`"
                    color="primary"
                    variant="solid"
                    class="rounded-full shadow-lg"
                  >
                    View
                    <UIcon
                      name="i-heroicons-arrow-right"
                      class="w-4 h-4 ml-1"
                    />
                  </UButton>
                </div>
              </div>
            </template>

            <div class="flex-1 flex flex-col relative z-20">
              <h3
                class="font-bold text-xl text-primary-400 mb-3 group-hover:text-primary-300 transition-colors"
                :class="{
                  'line-through text-neutral-500 font-semibold':
                    project.strikethrough,
                }"
              >
                {{ project.title }}
              </h3>

              <div
                class="text-neutral-300/80 text-sm mb-6 flex-1 line-clamp-4 leading-relaxed"
                v-html="formatDescription(project.description)"
              ></div>

              <div
                class="flex flex-wrap gap-2 mt-auto pt-4 border-t border-neutral-800/50"
              >
                <UBadge
                  v-for="tech in project.tags"
                  :key="tech"
                  color="neutral"
                  variant="subtle"
                  class="bg-neutral-800/50 text-emerald-400 ring-1 ring-neutral-700 font-medium transition-colors hover:text-primary-400 hover:border-primary-500/50"
                >
                  {{ tech }}
                </UBadge>
              </div>
            </div>

            <!-- Clickable overlay -->
            <NuxtLink
              :to="`/projects/${project.slug}`"
              class="absolute inset-0 z-0"
            ></NuxtLink>
          </UCard>
        </div>
      </section>
    </UContainer>

    <footer
      class="text-center py-10 text-neutral-500 text-sm border-t border-neutral-800 bg-neutral-950/50 backdrop-blur-md"
    >
      <p>
        &copy; {{ new Date().getFullYear() }} n0buholic. Built with
        <strong class="text-primary-500">Nuxt</strong> and
        <strong class="text-primary-500">Nuxt UI</strong>.
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { techStack, projects } from "~/utils/data";

const isMounted = ref(false);

const featuredProjects = computed(() =>
  projects.filter((p) => p.featured).slice(0, 3),
);

onMounted(() => {
  setTimeout(() => {
    isMounted.value = true;
  }, 100);
});

const formatDescription = (desc) => {
  return desc
    .replace(/\n/g, "<br />")
    .replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="text-neutral-200 font-semibold">$1</strong>',
    );
};
</script>
