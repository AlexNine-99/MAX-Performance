<script setup lang="ts">
import { useMaybeDanger } from '@/composables/useMaybeDanger'
import InputErrors from './InputErrors.vue'

const props = withDefaults(
  defineProps<{
    label: string
    options: Map<string, boolean>
    defaultOption?: string
    enabled?: boolean
    errors?: string[]
  }>(),
  {
    defaultOption: undefined,
    enabled: true,
    errors: () => [],
  },
)

const maybeDanger = useMaybeDanger(props.errors)
</script>

<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <div :class="`select ${maybeDanger}`">
        <select :disabled="!enabled">
          <option
            v-for="[option, optionEnabled] of options.entries()"
            :key="option"
            :disabled="!optionEnabled"
            :selected="option === defaultOption"
          >
            {{ option }}
          </option>
        </select>
      </div>
    </div>
    <InputErrors :errors="errors" />
  </div>
</template>
