```
<template>
  <div
    class="min-h-screen text-neutral-300 font-sans selection:bg-primary-500 selection:text-neutral-900"
  >
    <ParticlesBackground />

    <!-- Header -->
    <UContainer class="pt-24 pb-8 lg:pt-32 lg:pb-12 text-center">
      <div
        class="opacity-0 transition-all duration-1000 transform translate-y-8"
        :class="{ 'opacity-100 translate-y-0': isMounted }"
      >
        <h1
          class="font-sans font-black text-5xl md:text-6xl lg:text-7xl text-primary-500 tracking-tight mb-4 drop-shadow-2xl"
        >
          Projects Archive
        </h1>
        <p
          class="text-neutral-400 text-xl max-w-2xl mx-auto mb-8 leading-relaxed font-light"
        >
          A comprehensive list of my web applications, landing pages, and
          experiments.
        </p>
        <div class="flex justify-center gap-4">
          <UButton
            to="/"
            color="neutral"
            variant="ghost"
            icon="i-heroicons-arrow-left"
            class="hover:bg-neutral-800 hover:text-primary-400 transition-colors rounded-xl px-4 py-2"
          >
            Back to Home
          </UButton>
        </div>
      </div>
    </UContainer>

    <UContainer class="pb-24">
      <section
        class="opacity-0 transition-all duration-1000 transform translate-y-8 delay-200"
        :class="{ 'opacity-100 translate-y-0': isMounted }"
      >
        <!-- Filter -->
        <div
          class="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10"
        >
          <div class="flex flex-wrap justify-center sm:justify-start gap-2">
            <UButton
              v-for="cat in categories"
              :key="cat"
              :color="activeCategory === cat ? 'primary' : 'neutral'"
              :variant="activeCategory === cat ? 'solid' : 'soft'"
              @click="activeCategory = cat"
              class="rounded-full px-4"
            >
              {{ cat }}
            </UButton>
          </div>
          <div class="relative w-full sm:w-64">
            <UInput
              v-model="searchQuery"
              icon="i-heroicons-magnifying-glass"
              placeholder="Search projects..."
              color="neutral"
              variant="outline"
              class="w-full"
            />
          </div>
        </div>

        <!-- Grid -->
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 group/grid">
          <UCard
            v-for="project in filteredProjects"
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
                class="relative overflow-hidden aspect-video bg-neutral-950 group/image"
              >
                <img
                  :src="project.desktopImage"
                  :alt="project.title"
                  class="w-full h-full object-cover transform object-top transition-all duration-700 group-hover/image:scale-105"
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
                    View Details
                    <UIcon
                      name="i-heroicons-arrow-right"
                      class="w-4 h-4 ml-1"
                    />
                  </UButton>
                </div>
              </div>
            </template>

            <div class="flex-1 flex flex-col relative z-20">
              <div class="flex justify-between items-start mb-3 gap-2">
                <h3
                  class="font-bold text-xl text-primary-400 group-hover:text-primary-300 transition-colors"
                  :class="{
                    'line-through text-neutral-500 font-semibold':
                      project.strikethrough,
                  }"
                >
                  {{ project.title }}
                </h3>
                <span
                  class="text-xs font-medium px-2 py-1 bg-neutral-800 text-neutral-300 rounded whitespace-nowrap"
                  >{{ project.category }}</span
                >
              </div>

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

            <NuxtLink
              :to="`/projects/${project.slug}`"
              class="absolute inset-0 z-0"
            ></NuxtLink>
          </UCard>
        </div>

        <div
          v-if="filteredProjects.length === 0"
          class="text-center py-24 text-neutral-500"
        >
          No projects found matching your criteria.
        </div>
      </section>
    </UContainer>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { projects } from "~/utils/data";

useHead({
  title: "Projects | n0buholic.github.io",
});

const isMounted = ref(false);
const activeCategory = ref("All");
const searchQuery = ref("");

onMounted(() => {
  setTimeout(() => (isMounted.value = true), 100);
});

const formatDescription = (desc) => {
  return desc
    .replace(/\n/g, "<br />")
    .replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="text-neutral-200 font-semibold">$1</strong>',
    );
};

const categories = ["All", ...new Set(projects.map((p) => p.category))];

const filteredProjects = computed(() => {
  let filtered = projects;

  if (activeCategory.value !== "All") {
    filtered = filtered.filter((p) => p.category === activeCategory.value);
  }

  if (searchQuery.value) {
    const q = searchQuery.value.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)),
    );
  }

  return filtered;
});
</script>
