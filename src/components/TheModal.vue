<script setup>
import TheButton from "./TheButton.vue";
import { useStore } from "../stores/store";
import { computed } from "vue";

const store = useStore();

const winner = computed(() => {
  if (store.isDraw) return "Draw";
  if (store.gamesPlayed % 2 === 0) {
    return store.move % 2 === 0 ? "Player2 won" : "Player1 won";
  } else {
    return store.move % 2 === 0 ? "Player1 won" : "Player2 won";
  }
});
</script>

<template>
  <div class="modal-container">
    <div class="modal">
      <p>{{ winner }}</p>
      <TheButton @click="store.startNewGame">Continue</TheButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);

  .modal {
    height: 100%;
    background-color: #fff;
    width: 80vw;
    height: 33vh;
    max-width: 70rem;
    border-radius: 13px;
    text-align: center;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 3px 15px 3px rgba(0, 0, 0, 0.3);

    p {
      margin-bottom: 4rem;
    }
  }
}
</style>
