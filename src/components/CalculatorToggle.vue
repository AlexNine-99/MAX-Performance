<script setup lang="ts">
import InputCheckbox from './InputCheckbox.vue'

defineProps<{
  label: string
  calculatorId: string
}>()
</script>

<template>
  <InputCheckbox :label="label" />
</template>
