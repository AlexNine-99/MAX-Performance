<script setup lang="ts">
import { computed } from 'vue'
import InputErrors from './InputErrors.vue'
import { useMaybeDanger } from '@/composables/useMaybeDanger'

const props = withDefaults(
  defineProps<{
    label: string
    placeholder: string | undefined
    unit: string | undefined
    enabled?: boolean
    errors?: string[]
  }>(),
  {
    enabled: true,
    errors: () => [] as string[],
  },
)


const emit = defineEmits<{
  (e: 'input', value: string): void
}>()

const maybeIcons = computed(() => (props.unit !== undefined ? 'has-icons-right' : ''))
const maybeDanger = useMaybeDanger(props.errors)
</script>

<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div :class="`control ${maybeIcons}`">
      <input
        type="text"
        :class="`input ${maybeDanger}`"
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
