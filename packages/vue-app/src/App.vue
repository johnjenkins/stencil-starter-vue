<script setup lang="ts">
import { ref } from 'vue';
import { ExampleInput } from '@example/stencil-lib-vue';

const basicValue = ref('');

function onBasicChange(event: CustomEvent<string>) {
  basicValue.value = event.detail;
}
</script>

<template>
  <div class="container">
    <h1>Stencil + Vue Integration</h1>

    <section>
      <ExampleInput
        :value="basicValue"
        placeholder="Type something..."
        @exampleChange="onBasicChange"
      >
        <span slot="label">Basic Input</span>
        <span slot="helper">Current value: {{ basicValue }}</span>
      </ExampleInput>
    </section>
  </div>
</template>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}

section {
  background: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
}
</style>
