<script setup lang="ts">
defineProps<{
  placeholder?: string
}>()
</script>

<template>
  <div class="input-group" :placeholder="placeholder"></div>
</template>
