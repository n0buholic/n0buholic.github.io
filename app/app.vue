<template>
  <UApp>
    <UHeader title="n0buholic" to="/">
      <UNavigationMenu :items="links" />

      <template #right>
        <UButton
          to="https://github.com/n0buholic/"
          target="_blank"
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
        />
      </template>
    </UHeader>

    <NuxtPage />
  </UApp>
</template>

<script setup>
const links = [
  { label: "Home", icon: "i-heroicons-home", to: "/" },
  { label: "Projects", icon: "i-heroicons-briefcase", to: "/projects" },
];
</script>
