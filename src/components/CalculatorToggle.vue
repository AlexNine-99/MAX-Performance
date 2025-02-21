<script setup lang="ts">
import { useCalculatorStore, type Calculator } from '@/stores/useCalculator'
import InputCheckbox from './InputCheckbox.vue'

const props = defineProps<{
  label: string
  calcId: string
}>()

const { calculators } = useCalculatorStore()

function handleInput(value: boolean) {
  ;(calculators.get(props.calcId) as Calculator).enabled = value
}
</script>

<template>
  <InputCheckbox :label="label" @update:model-value="handleInput" />
</template>
