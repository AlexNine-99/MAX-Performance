<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <h1 class="title is-4">{{ label }}</h1>
  <div class="field box">
    <slot />
  </div>
</template>
