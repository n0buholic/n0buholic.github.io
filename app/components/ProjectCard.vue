<template>
  <UCard
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
          class="absolute inset-0 bg-linear-to-t from-neutral-900 via-neutral-900/30 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-75"
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
            {{ viewLabel }}
            <UIcon name="i-heroicons-arrow-right" class="w-4 h-4 ml-1" />
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
          v-if="showCategory"
          class="text-xs font-medium px-2 py-1 bg-neutral-800 text-neutral-300 rounded whitespace-nowrap"
        >
          {{ project.category }}
        </span>
      </div>

      <div
        class="text-neutral-300/80 text-sm mb-6 flex-1 line-clamp-4 leading-relaxed"
        v-html="formattedDescription"
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
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  showCategory: {
    type: Boolean,
    default: false,
  },
  viewLabel: {
    type: String,
    default: "View Details",
  },
});

const formattedDescription = computed(() => {
  if (!props.project.description) return "";
  return props.project.description
    .replace(/\n/g, "<br />")
    .replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="text-neutral-200 font-semibold">$1</strong>',
    );
});
</script>
