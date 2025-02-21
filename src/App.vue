<script setup lang="ts">
import CalculatorInput from './components/CalculatorInput.vue'
import CalculatorToggle from './components/CalculatorToggle.vue'
import GroupInputs from './components/GroupInputs.vue'
import InputText from './components/InputText.vue'
import CalculatorInputSelect from './components/CalculatorInputSelect.vue'
import { useCalculatorStore } from './stores/useCalculator'

const { registerCalculator } = useCalculatorStore()

registerCalculator('takeoff', {
  inputIds: new Set(['load', 'takeoff-derate', 'climb-derate', 'assumed-temp', 'takeoff-flaps']),
  enabled: false,
})
registerCalculator('landing', {
  inputIds: new Set(['load', 'landing-flaps', 'gust-factor']),
  enabled: false,
})
</script>

<template>
  <section class="section">
    <div class="block">
      <h1 class="title is-3">MAX Performance</h1>
      <h2 class="subtitle">A performance calculator for the Boeing 737 MAX 8 in Infinite Flight</h2>
    </div>
    <div class="columns is-column-gap-1">
      <GroupInputs label="Options">
        <CalculatorToggle label="Calculate Takeoff" calc-id="takeoff" />
        <CalculatorToggle label="Calculate Landing" calc-id="landing" />
      </GroupInputs>

      <GroupInputs label="Conditions">
        <CalculatorInput input-id="load">
          <InputText label="Load Factor" placeholder="e.g. 56" unit="%" />
        </CalculatorInput>

        <CalculatorInput input-id="temperature">
          <InputText label="OAT" placeholder="e.g. 24" unit="&deg;C" />
        </CalculatorInput>

        <CalculatorInput input-id="wind-direction">
          <InputText label="Wind Gust Increase" placeholder="e.g. 9" unit="kt" />
        </CalculatorInput>
      </GroupInputs>

      <GroupInputs label="Thrust">
        <CalculatorInputSelect
          input-id="takeoff-derate"
          label="Takeoff Derate"
          :options="['TO (no derate)', 'TO-1', 'TO-2']"
        />
      </GroupInputs>
    </div>
  </section>
</template>
