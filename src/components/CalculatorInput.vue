<script setup lang="ts">
import { useCalculatorEnabled } from '@/composables/useCalculatorEnabled'

const props = defineProps<{
  inputId: string
}>()

const enabled = useCalculatorEnabled(props.inputId)
</script>

<template>
  <slot :enabled="enabled ?? false" />
</template>
