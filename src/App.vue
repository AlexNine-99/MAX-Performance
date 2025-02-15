<script setup lang="ts">
import CalculatorInput from './components/CalculatorInput.vue'
import CalculatorToggle from './components/CalculatorToggle.vue'
import GroupInputs from './components/GroupInputs.vue'
import InputCheckbox from './components/InputCheckbox.vue'
import InputText from './components/InputText.vue'
</script>

<template>
  <section class="section">
    <div class="grid">
      <GroupInputs label="Options">
        <CalculatorToggle label="Calculate Takeoff" calculator-id="takeoff" />
        <CalculatorToggle label="Calculate Landing" calculator-id="landing" />
      </GroupInputs>
      <GroupInputs label="Weight & Balance">
        <CalculatorInput>
          <InputText label="Load Factor" unit="% N1" placeholder="e.g. 56"></InputText>
        </CalculatorInput>
      </GroupInputs>
    </div>
  </section>
</template>
