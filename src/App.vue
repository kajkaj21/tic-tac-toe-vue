<script setup>
import SelectPlayMode from "./components/SelectPlayMode.vue";
import SelectSide from "./components/SelectSide.vue";
import TheGame from "./components/TheGame.vue";
import TheModal from "./components/TheModal.vue";

import { useStore } from "./stores/store.js";

const components = [SelectPlayMode, SelectSide, TheGame];

const store = useStore();
</script>

<template>
  <Teleport to="body">
    <TheModal v-if="store.gameOver"></TheModal>
  </Teleport>
  <component :is="components[store.currentStep]"></component>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-family: "Roboto", sans-serif;
  font-size: 62.5%;
}

#app {
  height: 100vh;
  /* overflow: hidden; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #777;
  background-color: #f2f2f2;
  padding: 1rem 2rem;
}
</style>
