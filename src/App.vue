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
        <CalculatorToggle />
      </GroupInputs>
    </div>
  </section>
</template>
