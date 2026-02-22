<template>
  <div
    class="min-h-screen text-neutral-300 font-sans selection:bg-primary-500 selection:text-neutral-900"
  >
    <!-- Header -->
    <UContainer class="py-12 lg:py-24">
      <div class="flex justify-between items-center">
        <UButton
          to="/"
          color="neutral"
          variant="ghost"
          icon="i-heroicons-arrow-left"
          class="hover:bg-neutral-800 hover:text-primary-400 transition-colors rounded-xl px-2 py-2"
        >
          Back to Home
        </UButton>
      </div>

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
          class="text-neutral-400 text-xl max-w-2xl mb-8 leading-relaxed font-light"
        >
          A comprehensive list of my web applications, landing pages, and
          experiments.
        </p>
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
              variant="outline"
              class="w-full"
            />
          </div>
        </div>

        <!-- Grid -->
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 group/grid">
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project.title"
            :project="project"
            show-category
          />
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
  title: "Projects",
});

const isMounted = ref(false);
const activeCategory = ref("All");
const searchQuery = ref("");

onMounted(() => {
  setTimeout(() => (isMounted.value = true), 100);
});

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
