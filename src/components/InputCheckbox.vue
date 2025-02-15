<script setup lang="ts">
interface Props {
  label: string
  enabled?: boolean
  modelValue?: boolean
}

const { enabled = true, modelValue = false } = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
</script>

<template>
  <div class="field">
    <div class="control">
      <label class="checkbox">
        <input
          type="checkbox"
          :value="modelValue"
          :disabled="!enabled"
          @change="emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
        />
        {{ label }}
      </label>
    </div>
  </div>
</template>
