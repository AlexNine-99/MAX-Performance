<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string
    size?: number
  }>(),
  {
    size: 1,
  },
)
</script>

<template>
  <div class="column">
    <div class="box">
      <h1 class="title is-4">{{ label }}</h1>
      <slot />
    </div>
  </div>
</template>
