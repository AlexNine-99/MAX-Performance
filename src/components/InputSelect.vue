<script setup lang="ts">
import { useMaybeDanger } from '@/composables/useMaybeDanger'
import InputErrors from './InputErrors.vue'

interface Props {
  label: string
  options: Map<string, boolean>
  enabled: boolean
  errors: string[]
}

const { enabled = true, errors = [] } = defineProps<Props>()

const maybeDanger = useMaybeDanger(errors)
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
          >
            {{ option }}
          </option>
        </select>
      </div>
    </div>
    <InputErrors :errors="errors" />
  </div>
</template>
