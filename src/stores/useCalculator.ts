import { defineStore } from 'pinia'

export interface Calculator {
  inputIds: Set<string>
  enabled: boolean
}

export const useCalculatorStore = defineStore('calculator', {
  state: () => ({
    calculators: new Map<string, Calculator>(),
  }),
  actions: {
    registerCalculator(id: string, calculator: Calculator) {
      if (this.calculators.has(id)) {
        throw new Error(`Calculator with id ${id} is already registered.`)
      }
      this.calculators.set(id, calculator)
    },
  },
})
