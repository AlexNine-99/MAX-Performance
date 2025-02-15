<script setup lang="ts">
interface Props {
  label: string
  placeholder?: string
  unit?: string
  modelValue?: string
  enabled?: boolean
}

const { enabled = true, modelValue = undefined } = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div :class="`control ${unit !== undefined ? 'has-icons-right' : undefined}`">
      <input
        class="input"
        type="text"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="!enabled"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
      <span v-if="unit !== undefined" class="icon is-right" style="width: fit-content">
        {{ unit }}
        &ThickSpace;
      </span>
    </div>
  </div>
</template>
