<script setup lang="ts">
import CalculatorInput from './components/CalculatorInput.vue'
import CalculatorToggle from './components/CalculatorToggle.vue'
import GroupInputs from './components/GroupInputs.vue'
import InputText from './components/InputText.vue'
import CalculatorInputSelect from './components/CalculatorInputSelect.vue'
import { useCalculatorStore } from './stores/useCalculator'

const { registerCalculator } = useCalculatorStore()

registerCalculator('takeoff', {
  inputIds: new Set([
    'load',
    'temperature',
    'gust-increase',
    'takeoff-derate',
    'climb-derate',
    'assumed-temp',
    'takeoff-flaps',
  ]),
  enabled: false,
})

registerCalculator('landing', {
  inputIds: new Set(['load', 'landing-flaps', 'gust-increase']),
  enabled: false,
})

registerCalculator('general', {
  inputIds: new Set(['load']),
  enabled: true,
})
</script>

<template>
  <section class="section">
    <div class="block">
      <h1 class="title is-3">MAX Performance</h1>
      <h2 class="subtitle">A performance calculator for the Boeing 737 MAX 8 in Infinite Flight</h2>
    </div>
    <div class="columns">
      <GroupInputs label="Options">
        <CalculatorToggle label="Calculate Takeoff" calc-id="takeoff" />
        <CalculatorToggle label="Calculate Landing" calc-id="landing" />
      </GroupInputs>

      <GroupInputs label="Conditions" :size="2">
        <CalculatorInput v-slot="{ enabled }" input-id="load">
          <InputText label="Load Factor" placeholder="e.g. 56" unit="%" :enabled="enabled" />
        </CalculatorInput>

        <CalculatorInput v-slot="{ enabled }" input-id="temperature">
          <InputText label="OAT" placeholder="e.g. 24" unit="&deg;C" :enabled="enabled" />
        </CalculatorInput>

        <CalculatorInput v-slot="{ enabled }" input-id="gust-increase">
          <InputText label="Wind Gust Increase" placeholder="e.g. 9" unit="kt" :enabled="enabled" />
        </CalculatorInput>
      </GroupInputs>

      <GroupInputs label="Power" :size="2">
        <CalculatorInputSelect
          input-id="takeoff-derate"
          label="Takeoff Derate"
          :options="['TO (no derate)', 'TO-1', 'TO-2']"
        />
        <CalculatorInputSelect
          input-id="climb-derate"
          label="Climb Derate"
          :options="['CLB (no derate)', 'CLB-1', 'CLB-2']"
        />
        <CalculatorInput v-slot="{ enabled }" input-id="assumed-temp">
          <InputText
            label="Assumed Temp Thrust Reduction"
            placeholder="e.g. 3"
            unit="% N1"
            :enabled="enabled"
          />
        </CalculatorInput>
      </GroupInputs>
      <GroupInputs label="Flaps" :size="2">
        <CalculatorInputSelect
          input-id="takeoff-flaps"
          label="Takeoff Flaps"
          :options="['FO1', 'FO2', 'FO3', 'FO4', 'FO5']"
        />
        <CalculatorInputSelect
          input-id="landing-flaps"
          label="Landing Flaps"
          :options="['15', '30', '40']"
          :default-option="'30'"
        />
      </GroupInputs>
    </div>
  </section>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>MAX Performance</strong> by
        <a href="https://github.com/AlexNine-99">AlexNine-99</a> with the help of
        <a href="https://github.com/eldrago4">eldrago4</a>. Built from the
        <a href="https://community.infiniteflight.com/t/boeing-737-max-8-flying-guide/963071">
          Boeing 737 MAX 8 Flying Guide
        </a>
        by Alex, Nico, Danny, and Rick.
      </p>
      <p>
        <a href="https://github.com/AlexNine-99/MAX-Performance">Source code</a> is licensed under
        the BSD-3-Clause license.
      </p>
    </div>
  </footer>
</template>
