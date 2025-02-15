import type Calculator from '@/services/logic/Calculator'
import createRegistryType from '@/services/util/createRegistryType'
import { defineStore } from 'pinia'

const CalculatorRegistry = createRegistryType<Calculator>('calculator')

export const useCalculatorStore = defineStore('calculator', {
  state: () => ({
    calculators: new CalculatorRegistry(),
  }),
  actions: {
    addCalculator(id: string, calculator: Calculator) {
      this.calculators.add(id, calculator)
    },
    getCalculator(id: string) {
      return this.calculators.get(id)
    },
  },
})
