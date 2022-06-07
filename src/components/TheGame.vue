<script setup>
import TheX from "./TheX.vue";
import TheO from "./TheO.vue";

import { useStore } from "../stores/store";
import { computed, watch } from "vue";

const store = useStore();

const checkWinner = () => {
  // horizontal 1
  if (
    [store.isTileSelected[0], store.isTileSelected[1], store.isTileSelected[2]].every(
      (val) => val === store.isTileSelected[0] && val !== false
    )
  ) {
    setTimeout(() => {
      store.gameOver = true;
    }, 300);
    return;
  }
  // horizontal 2
  if (
    [store.isTileSelected[3], store.isTileSelected[4], store.isTileSelected[5]].every(
      (val) => val === store.isTileSelected[3] && val !== false
    )
  ) {
    setTimeout(() => {
      store.gameOver = true;
    }, 300);
    return;
  }
  // horizontal 3
  if (
    [store.isTileSelected[6], store.isTileSelected[7], store.isTileSelected[8]].every(
      (val) => val === store.isTileSelected[6] && val !== false
    )
  ) {
    setTimeout(() => {
      store.gameOver = true;
    }, 300);
    return;
  }
  // vertical 1
  if (
    [store.isTileSelected[0], store.isTileSelected[3], store.isTileSelected[6]].every(
      (val) => val === store.isTileSelected[0] && val !== false
    )
  ) {
    setTimeout(() => {
      store.gameOver = true;
    }, 300);
    return;
  }
  // vertical 2
  if (
    [store.isTileSelected[1], store.isTileSelected[4], store.isTileSelected[7]].every(
      (val) => val === store.isTileSelected[1] && val !== false
    )
  ) {
    setTimeout(() => {
      store.gameOver = true;
    }, 300);
    return;
  }
  // vertical 3
  if (
    [store.isTileSelected[2], store.isTileSelected[5], store.isTileSelected[8]].every(
      (val) => val === store.isTileSelected[2] && val !== false
    )
  ) {
    setTimeout(() => {
      store.gameOver = true;
    }, 300);
    return;
  }
  // diagonal 1
  if (
    [store.isTileSelected[0], store.isTileSelected[4], store.isTileSelected[8]].every(
      (val) => val === store.isTileSelected[0] && val !== false
    )
  ) {
    setTimeout(() => {
      store.gameOver = true;
    }, 300);
    return;
  }
  // diagonal 2
  if (
    [store.isTileSelected[2], store.isTileSelected[4], store.isTileSelected[6]].every(
      (val) => val === store.isTileSelected[2] && val !== false
    )
  ) {
    setTimeout(() => {
      store.gameOver = true;
    }, 300);
    return;
  }

  // draw
  if (store.move === 9) {
    store.isDraw = true;
    setTimeout(() => {
      store.gameOver = true;
    }, 300);
  }
};

const selectTile = (id) => {
  if (
    store.isTileSelected[id] !== false ||
    store.gameOver === true ||
    store.moveAI === true
  )
    return;
  if (store.gamesPlayed % 2 === 0) {
    if (store.move % 2 === 0) {
      store.isTileSelected[id] = store.player1;
    } else {
      store.isTileSelected[id] = store.player2;
    }
  } else {
    if (store.move % 2 === 0) {
      store.isTileSelected[id] = store.player2;
    } else {
      store.isTileSelected[id] = store.player1;
    }
  }
  store.move++;
  checkWinner();
  if (store.playMode === "AI") {
    if (store.gamesPlayed % 2 === 0) {
      if (store.move % 2 !== 0) {
        moveAI();
      }
    } else {
      if (store.move % 2 === 0) {
        moveAI();
      }
    }
  }
};

const moveAI = () => {
  store.moveAI = true;
  const selectedTile = Math.floor(Math.random() * 9);
  if (store.isTileSelected[selectedTile] !== false) {
    return moveAI();
  } else {
    return setTimeout(() => {
      store.moveAI = false;
      selectTile(selectedTile);
    }, 500);
  }
};

watch(
  () => store.gamesPlayed,
  (val) => {
    if (val % 2 !== 0 && store.playMode === "AI") {
      moveAI();
    }
  },
  { deep: true }
);

const playerTurn = computed(() => {
  if (store.gamesPlayed % 2 === 0) {
    return store.move % 2 === 0 ? "Player1 turn" : "Player2 turn";
  } else {
    return store.move % 2 === 0 ? "Player2 turn" : "Player1 turn";
  }
});
</script>

<template>
  <main>
    <div class="scores">
      <div class="player1">Player1</div>
      <div class="score">{{ store.player1Score }} - {{ store.player2Score }}</div>
      <div class="player2">Player2</div>
    </div>
    <div class="board-container">
      <div class="board">
        <div v-for="i in 9" :key="i" @click="selectTile(i - 1)">
          <TheX v-if="store.isTileSelected[i - 1] === 'X'"></TheX>
          <TheO v-if="store.isTileSelected[i - 1] === 'O'"></TheO>
        </div>
      </div>
    </div>
    <p>
      {{ playerTurn }}
    </p>
  </main>
</template>

<style lang="scss" scoped>
main {
  // height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .scores {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    font-size: 1.6rem;
    margin-bottom: 2rem;

    .score {
      font-weight: 700;
      font-weight: 4rem;
      box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
      border: 0;
      background-color: #fff;
      padding: 0.8rem 2rem;
      border-radius: 999px;
    }
  }

  .board-container {
    background-color: #fff;
    border-radius: 20px;
    padding: 1rem 2rem;
    box-shadow: 0 3px 15px 3px rgba(0, 0, 0, 0.3);
    user-select: none;
    margin-bottom: 1.4rem;

    .board {
      background-color: #f2f2f2;
      display: grid;
      gap: 0.5rem;
      grid-template-columns: repeat(3, 10rem);

      @media screen and (min-width: 900px) {
        grid-template-columns: repeat(3, 15rem);
      }

      @media screen and (min-width: 1200px) {
        grid-template-columns: repeat(3, 20rem);
      }

      div {
        cursor: pointer;
        background-color: #fff;
        width: 10rem;
        height: 18rem;
        @media screen and (min-width: 900px) {
          width: 15rem;
        }
        @media screen and (min-width: 1200px) {
          width: 20rem;
        }
      }
    }
  }
  p {
    font-size: 1.4rem;
  }
}
</style>
