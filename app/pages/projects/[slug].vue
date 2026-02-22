<template>
  <div
    class="min-h-screen text-neutral-300 font-sans selection:bg-primary-500 selection:text-neutral-900 pb-24"
  >
    <UContainer class="py-12 lg:py-24">
      <div
        class="opacity-0 transition-opacity duration-1000"
        :class="{ 'opacity-100': isMounted }"
      >
        <div class="mb-8 flex justify-between items-center">
          <UButton
            to="/projects"
            color="neutral"
            variant="ghost"
            icon="i-heroicons-arrow-left"
            class="hover:bg-neutral-800 hover:text-primary-400 transition-colors rounded-xl px-2 py-2"
          >
            Back to Projects
          </UButton>
        </div>

        <div v-if="project" class="grid lg:grid-cols-5 gap-12 items-start">
          <!-- Text Details -->
          <div class="lg:col-span-2 space-y-6">
            <h1
              class="text-4xl md:text-5xl font-black text-primary-500 tracking-tight"
            >
              {{ project.title }}
            </h1>
            <div class="flex flex-wrap gap-2">
              <UBadge
                color="neutral"
                variant="soft"
                class="text-neutral-300 bg-neutral-800 ring-1 ring-neutral-700 shadow-sm"
                >{{ project.category }}</UBadge
              >
            </div>

            <div
              class="text-neutral-300 leading-relaxed text-lg pt-4"
              v-html="formatDescription(project.description)"
            ></div>

            <div class="flex flex-wrap gap-2 pt-6">
              <UBadge
                v-for="tech in project.tags"
                :key="tech"
                color="neutral"
                variant="subtle"
                class="bg-neutral-800/50 text-emerald-400 ring-1 ring-neutral-700 font-medium"
              >
                {{ tech }}
              </UBadge>
            </div>

            <div class="pt-8" v-if="project.link">
              <UButton
                :to="project.link"
                target="_blank"
                color="primary"
                variant="solid"
                size="lg"
              >
                Visit Live Website
                <UIcon
                  name="i-heroicons-arrow-top-right-on-square"
                  class="ml-2 w-5 h-5 align-middle"
                />
              </UButton>
            </div>
          </div>

          <!-- Image Mockups -->
          <div
            class="lg:col-span-3 bg-neutral-900/60 p-4 sm:p-8 rounded-3xl border border-neutral-800 shadow-2xl shadow-primary-500/5 backdrop-blur-sm relative"
          >
            <div
              v-if="project.mobileImage"
              class="flex justify-center gap-3 mb-8"
            >
              <UButton
                @click="viewMode = 'desktop'"
                :color="viewMode === 'desktop' ? 'primary' : 'neutral'"
                :variant="viewMode === 'desktop' ? 'soft' : 'ghost'"
                icon="i-heroicons-computer-desktop"
                class="rounded-xl px-4"
              >
                Desktop View
              </UButton>
              <UButton
                @click="viewMode = 'mobile'"
                :color="viewMode === 'mobile' ? 'primary' : 'neutral'"
                :variant="viewMode === 'mobile' ? 'soft' : 'ghost'"
                icon="i-heroicons-device-phone-mobile"
                class="rounded-xl px-4"
              >
                Mobile View
              </UButton>
            </div>

            <!-- Mockup Container -->
            <div
              class="overflow-hidden rounded-xl bg-neutral-950 flex items-center justify-center transition-all duration-500 shadow-inner border border-neutral-800/50"
              :class="
                viewMode === 'desktop'
                  ? 'aspect-video w-full'
                  : 'max-h-[700px] mx-auto w-full sm:w-[350px] aspect-[9/19]'
              "
            >
              <img
                :src="
                  viewMode === 'desktop'
                    ? project.desktopImage
                    : project.mobileImage
                "
                :alt="project.title"
                class="w-full h-full text-neutral-600 italic text-center p-4"
                :class="
                  viewMode === 'desktop'
                    ? 'object-cover object-top'
                    : 'object-contain align-top bg-neutral-900'
                "
              />
            </div>
          </div>
        </div>

        <div v-else class="text-center py-24 text-neutral-400">
          <h1 class="text-4xl font-bold mb-4">Project Not Found</h1>
          <p>The project you are looking for does not exist.</p>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { projects } from "~/utils/data";

const route = useRoute();
const project = computed(() =>
  projects.find((p) => p.slug === route.params.slug),
);

useHead({
  title: computed(() =>
    project.value ? `${project.value.title} | Projects` : "Project Not Found",
  ),
});

const isMounted = ref(false);
const viewMode = ref("desktop");

onMounted(() => {
  setTimeout(() => (isMounted.value = true), 50);
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
