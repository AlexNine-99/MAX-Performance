<script setup lang="ts">
import { useInputStore } from '@/stores/calculatorInput'
import { ref } from 'vue'

const props = defineProps<{ id: string }>()

const model = ref('')
</script>

<template>
  <slot :enabled="getInput(id)?.value" @update:modelValue="model = $event" />
</template>
