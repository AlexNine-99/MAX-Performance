import { computed } from 'vue'

export const useMaybeDanger = (errors: string[]) =>
  computed(() => (errors.length !== 0 ? 'is-danger' : ''))
