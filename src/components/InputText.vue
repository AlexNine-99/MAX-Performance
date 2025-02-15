<script setup lang="ts">
interface Props {
  label: string
  placeholder?: string
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
    <div class="control">
      <input
        class="input"
        type="text"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="!enabled"
        @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
    </div>
  </div>
</template>
