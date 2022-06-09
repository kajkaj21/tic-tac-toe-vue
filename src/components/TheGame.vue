<script setup>
import TheX from "./TheX.vue";
import TheO from "./TheO.vue";

import { useStore } from "../stores/store";
import { ref, computed, watch } from "vue";

const strikethroughOpacity = ref(null);
const strikethroughRotate = ref(null);
const strikethroughHeight = ref(null);
const strikethroughWidth = ref(null);
const strikethroughTop = ref(null);
const strikethroughLeft = ref(null);
const strikethroughVisibility = ref(null);

const store = useStore();

const checkWinner = () => {
  // horizontal 1
  if (
    [
      store.isTileSelected[0],
      store.isTileSelected[1],
      store.isTileSelected[2],
    ].every((val) => val === store.isTileSelected[0] && val !== false)
  ) {
    strikethroughOpacity.value = "1";
    strikethroughRotate.value = "rotate(0deg)";
    strikethroughHeight.value = "1rem";
    strikethroughWidth.value = "100%";
    strikethroughTop.value = "17%";
    strikethroughLeft.value = "0";
    strikethroughVisibility.value = "visible";
    setTimeout(() => {
      store.gameOver = true;
    }, 300);
    return;
  }
  // horizontal 2
  if (
    [
      store.isTileSelected[3],
      store.isTileSelected[4],
      store.isTileSelected[5],
    ].every((val) => val === store.isTileSelected[3] && val !== false)
  ) {
    strikethroughOpacity.value = "1";
    strikethroughRotate.value = "rotate(0deg)";
    strikethroughHeight.value = "1rem";
    strikethroughWidth.value = "100%";
    strikethroughTop.value = "50%";
    strikethroughLeft.value = "0";
    strikethroughVisibility.value = "visible";
    setTimeout(() => {
      store.gameOver = true;
    }, 300);
    return;
  }
  // horizontal 3
  if (
    [
      store.isTileSelected[6],
      store.isTileSelected[7],
      store.isTileSelected[8],
    ].every((val) => val === store.isTileSelected[6] && val !== false)
  ) {
    strikethroughOpacity.value = "1";
    strikethroughRotate.value = "rotate(0deg)";
    strikethroughHeight.value = "1rem";
    strikethroughWidth.value = "100%";
    strikethroughTop.value = "80%";
    strikethroughLeft.value = "0";
    strikethroughVisibility.value = "visible";
    setTimeout(() => {
      store.gameOver = true;
    }, 300);
    return;
  }
  // vertical 1
  if (
    [
      store.isTileSelected[0],
      store.isTileSelected[3],
      store.isTileSelected[6],
    ].every((val) => val === store.isTileSelected[0] && val !== false)
  ) {
    strikethroughOpacity.value = "1";
    strikethroughRotate.value = "rotate(0deg)";
    strikethroughHeight.value = "100%";
    strikethroughWidth.value = "1rem";
    strikethroughTop.value = "0";
    strikethroughLeft.value = "17%";
    strikethroughVisibility.value = "visible";
    setTimeout(() => {
      store.gameOver = true;
    }, 300);
    return;
  }
  // vertical 2
  if (
    [
      store.isTileSelected[1],
      store.isTileSelected[4],
      store.isTileSelected[7],
    ].every((val) => val === store.isTileSelected[1] && val !== false)
  ) {
    strikethroughOpacity.value = "1";
    strikethroughRotate.value = "rotate(0deg)";
    strikethroughHeight.value = "100%";
    strikethroughWidth.value = "1rem";
    strikethroughTop.value = "0";
    strikethroughLeft.value = "50%";
    strikethroughVisibility.value = "visible";
    setTimeout(() => {
      store.gameOver = true;
    }, 300);
    return;
  }
  // vertical 3
  if (
    [
      store.isTileSelected[2],
      store.isTileSelected[5],
      store.isTileSelected[8],
    ].every((val) => val === store.isTileSelected[2] && val !== false)
  ) {
    strikethroughOpacity.value = "1";
    strikethroughRotate.value = "rotate(0deg)";
    strikethroughHeight.value = "100%";
    strikethroughWidth.value = "1rem";
    strikethroughTop.value = "0";
    strikethroughLeft.value = "83%";
    strikethroughVisibility.value = "visible";
    setTimeout(() => {
      store.gameOver = true;
    }, 300);
    return;
  }
  // diagonal 1
  if (
    [
      store.isTileSelected[0],
      store.isTileSelected[4],
      store.isTileSelected[8],
    ].every((val) => val === store.isTileSelected[0] && val !== false)
  ) {
    strikethroughOpacity.value = "1";
    strikethroughRotate.value = "rotate(-30deg)";
    strikethroughHeight.value = "100%";
    strikethroughWidth.value = "1rem";
    strikethroughTop.value = "0";
    strikethroughLeft.value = "49%";
    strikethroughVisibility.value = "visible";
    setTimeout(() => {
      store.gameOver = true;
    }, 300);
    return;
  }
  // diagonal 2
  if (
    [
      store.isTileSelected[2],
      store.isTileSelected[4],
      store.isTileSelected[6],
    ].every((val) => val === store.isTileSelected[2] && val !== false)
  ) {
    strikethroughOpacity.value = "1";
    strikethroughRotate.value = "rotate(30deg)";
    strikethroughHeight.value = "100%";
    strikethroughWidth.value = "1rem";
    strikethroughTop.value = "0";
    strikethroughLeft.value = "49%";
    strikethroughVisibility.value = "visible";

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

watch(
  () => store.gameOver,
  (val) => {
    if (val === false) {
      strikethroughOpacity.value = "0";
      strikethroughVisibility.value = "hidden";
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
      <div class="score">
        {{ store.player1Score }} - {{ store.player2Score }}
      </div>
      <div class="player2">Player2</div>
    </div>
    <div class="board-container">
      <div class="board">
        <div v-for="i in 9" :key="i" @click="selectTile(i - 1)">
          <TheX v-if="store.isTileSelected[i - 1] === 'X'"></TheX>
          <TheO v-if="store.isTileSelected[i - 1] === 'O'"></TheO>
        </div>
      </div>
      <div class="strikethrough"></div>
    </div>
    <p>
      {{ playerTurn }}
    </p>
  </main>
</template>

<style lang="scss" scoped>
main {
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
    position: relative;

    .strikethrough {
      position: absolute;
      top: v-bind(strikethroughTop);
      left: v-bind(strikethroughLeft);
      height: v-bind(strikethroughHeight);
      width: v-bind(strikethroughWidth);
      background-color: #929292;
      border-radius: 999px;
      transform: v-bind(strikethroughRotate);
      opacity: v-bind(strikethroughOpacity);
      visibility: v-bind(strikethroughVisibility);
      transition: opacity 0.3s ease;
    }

    .board {
      background-color: #f2f2f2;
      display: grid;
      gap: 0.5rem;
      grid-template-columns: repeat(3, 10rem);

      div {
        cursor: pointer;
        background-color: #fff;
        width: 10rem;
        height: 18rem;
      }
    }
  }
  p {
    font-size: 1.4rem;
  }
}
</style>
