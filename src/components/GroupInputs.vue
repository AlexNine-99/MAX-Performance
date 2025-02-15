<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <div class="field box">
    <h1 class="title is-4">{{ label }}</h1>
    <slot />
  </div>
</template>
