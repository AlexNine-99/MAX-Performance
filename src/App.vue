<script setup lang="ts">
import CalculatorInput from './components/CalculatorInput.vue'
import CalculatorToggle from './components/CalculatorToggle.vue'
import GroupInputs from './components/GroupInputs.vue'
import InputDropdown from './components/base/InputDropdown.vue'
import InputText from './components/base/InputText.vue'
</script>

<template>
  <section class="section">
    <div class="grid">
      <GroupInputs label="Options">
        <CalculatorToggle label="Calculate Takeoff" calculator-id="takeoff" />
        <CalculatorToggle label="Calculate Landing" calculator-id="landing" />
      </GroupInputs>

      <GroupInputs label="Weight & Balance">
        <CalculatorInput id="load-factor">
          <InputText label="Load Factor" unit="% N1" placeholder="e.g. 56" />
        </CalculatorInput>
      </GroupInputs>

      <GroupInputs label="Thrust">
        <CalculatorInput id="takeoff-derate"> </CalculatorInput>
      </GroupInputs>
    </div>
  </section>
</template>
