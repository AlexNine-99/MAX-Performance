<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <h1 class="is-3">{{ label }}</h1>
  <div class="field box">
    <slot />
  </div>
</template>
