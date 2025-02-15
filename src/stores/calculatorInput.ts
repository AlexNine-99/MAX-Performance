import createRegistryType from '@/services/util/createRegistryType'
import { type InputState } from '@/services/logic/InputState'
import { defineStore } from 'pinia'

const InputRegistry = createRegistryType<InputState>('input state')

export const useInputStore = defineStore('calculatorInput', {
  state: () => ({
    controllers: new InputRegistry(),
  }),
})
