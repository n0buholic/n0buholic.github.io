<template>
  <div>
    <div class="fixed inset-0 bg-neutral-950 z-[-1]"></div>
    <div class="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div
        v-for="(p, i) in particles"
        :key="i"
        class="particle"
        :style="{ left: p.left, top: p.top, animationDelay: p.delay }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const particles = ref([]);

onMounted(() => {
  for (let i = 0; i < 20; i++) {
    particles.value.push({
      left: `${(Math.random() * 100).toFixed(4)}%`,
      top: `${(Math.random() * 100).toFixed(4)}%`,
      delay: `${(Math.random() * 5).toFixed(4)}s`,
    });
  }
});
</script>
