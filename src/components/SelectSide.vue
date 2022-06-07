<script setup>
import { ref, computed } from "vue";
import TheX from "./TheX.vue";
import TheO from "./TheO.vue";
import TheButton from "./TheButton.vue";
import { useStore } from "../stores/store";

const store = useStore();

const isXActive = ref(true);

const xGrayscale = computed(() => {
  return isXActive.value ? "grayscale(0)" : "grayscale(0.6)";
});

const yGrayscale = computed(() => {
  return !isXActive.value ? "grayscale(0)" : "grayscale(0.6)";
});

const selectX = () => {
  isXActive.value = true;
};

const selectO = () => {
  isXActive.value = false;
};

const confirmSelectedSide = () => {
  if (isXActive.value) {
    store.player1 = "X";
    store.player2 = "O";
  } else {
    store.player1 = "O";
    store.player2 = "X";
  }
  store.currentStep++;
};
</script>

<template>
  <article>
    <h2>Pick your side</h2>
    <div class="sides">
      <div @click="selectX" class="x-container">
        <label for="X">
          <TheX></TheX>
        </label>
        <input type="radio" name="side" id="X" value="X" checked />
      </div>
      <div @click="selectO" class="o-container">
        <label for="O">
          <TheO></TheO>
        </label>
        <input type="radio" name="side" id="O" value="O" />
      </div>
    </div>
    <TheButton @click="confirmSelectedSide">Continue</TheButton>
  </article>
</template>

<style lang="scss" scoped>
article {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }

  .sides {
    display: flex;
    gap: 3rem;
    margin-bottom: 8rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      transition: 0.3s ease filter;

      &.x-container {
        filter: v-bind(xGrayscale);
      }
      &.o-container {
        filter: v-bind(yGrayscale);
      }

      input {
        cursor: pointer;
        height: 2.5rem;
        width: 100%;
      }
    }
  }
}
</style>
