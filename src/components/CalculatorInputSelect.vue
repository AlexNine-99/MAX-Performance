<script setup lang="ts">
import { useCalculatorEnabled } from '@/composables/useCalculatorEnabled'
import InputSelect from './InputSelect.vue'

const props = defineProps<{
  label: string
  options: string[]
  inputId: string
}>()

const enabled = useCalculatorEnabled(props.inputId)
</script>

<template>
  <InputSelect
    :label="label"
    :options="new Map(options.map((option) => [option, true]))"
    :enabled="enabled"
  />
</template>
