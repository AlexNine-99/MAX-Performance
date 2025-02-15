import createRegistryType from '@/services/createRegistryType'
import { type InputState } from '@/services/InputState'
import { defineStore } from 'pinia'

const InputRegistry = createRegistryType<InputState>('input state')

export const useInputStore = defineStore('calculatorInput', {
  state: () => ({
    controllers: new InputRegistry(),
  }),
})
