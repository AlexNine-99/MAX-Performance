<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <div class="column">
    <div class="box">
      <h1 class="title is-4">{{ label }}</h1>
      <slot />
    </div>
  </div>
</template>
