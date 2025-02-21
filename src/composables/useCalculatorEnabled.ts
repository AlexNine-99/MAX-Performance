import { useCalculatorStore } from '@/stores/useCalculator'
import { computed } from 'vue'

export function useCalculatorEnabled(inputId: string) {
  const { calculators } = useCalculatorStore()

  return computed(() => {
    for (const [_id, { enabled, inputIds }] of calculators) {
      if (enabled && inputIds.has(inputId)) {
        return true
      }
    }
    return false
  })
}
