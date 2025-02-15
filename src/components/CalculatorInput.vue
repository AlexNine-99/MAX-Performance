<script setup lang="ts">
import { useInputStore } from '@/stores/calculatorInput'
import { ref } from 'vue'

const props = defineProps<{ id: string }>()

const model = ref('')
</script>

<template>
  <!-- FINISH ME -->
  <slot :enabled="true" @update:modelValue="model = $event" />
</template>
