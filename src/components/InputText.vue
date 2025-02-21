<script setup lang="ts">
import { computed } from 'vue'
import InputErrors from './InputErrors.vue'
import { useMaybeDanger } from '@/composables/useMaybeDanger'

interface Props {
  label: string
  placeholder?: string
  unit?: string
  enabled: boolean
  errors: string[]
}

const { enabled = true, errors = [], ...otherProps } = defineProps<Props>()
const props = computed(() => ({ enabled, errors, ...otherProps }))

const emit = defineEmits<{
  (e: 'input', value: string): void
}>()

const maybeIcons = computed(() => (props.value.unit !== undefined ? 'has-icons-right' : ''))
const maybeDanger = useMaybeDanger(errors)
</script>

<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div :class="`control ${maybeIcons}`">
      <input
        :class="`input ${maybeDanger}`"
        type="text"
        :placeholder="placeholder"
        :disabled="!enabled"
        @input="emit('input', ($event.target as HTMLInputElement).value)"
      />
      <span v-if="unit !== undefined" class="icon is-right" style="width: fit-content">
        {{ unit }}
        &ThickSpace;
      </span>
      <InputErrors :errors="errors" />
    </div>
  </div>
</template>
