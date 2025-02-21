<script setup lang="ts">
const { errors = [] } = defineProps<{
  errors: string[]
}>()
</script>

<template>
  <p v-for="error in errors" :key="error" class="help is-danger">{{ error }}</p>
</template>
