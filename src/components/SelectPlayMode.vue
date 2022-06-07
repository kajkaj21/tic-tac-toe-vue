<script setup>
import TheButton from "./TheButton.vue";
import TheX from "./TheX.vue";
import TheO from "./TheO.vue";
import { useStore } from "../stores/store";

const store = useStore();

const playWithAI = () => {
  store.currentStep++;
  store.playMode = "AI";
};

const playWithFriend = () => {
  store.currentStep++;
  store.playMode = "friend";
};
</script>

<template>
  <article>
    <h1>Tic-Tac-Toe</h1>
    <div>
      <TheX></TheX>
      <TheO></TheO>
    </div>
    <h2>Choose your play mode</h2>
    <div class="buttons">
      <TheButton @click="playWithAI">With AI</TheButton>
      <TheButton @click="playWithFriend">With a friend</TheButton>
    </div>
  </article>
</template>

<style lang="scss" scoped>
article {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: 700;
    font-size: 4rem;
    margin-bottom: 3.2rem;
  }

  div {
    display: flex;
    gap: 0.3rem;
    margin-bottom: 2rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    margin-bottom: 2rem;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
