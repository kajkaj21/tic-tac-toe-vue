import { defineStore } from "pinia";

export const useStore = defineStore("main", {
  state: () => {
    return {
      currentStep: 0,
      move: 0,
      gamesPlayed: 0,
      moveAI: false,
      playMode: "AI",
      gameOver: false,
      isDraw: false,
      player1: "X",
      player2: "O",
      player1Score: 0,
      player2Score: 0,
      isTileSelected: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    };
  },
  actions: {
    startNewGame() {
      if (!this.isDraw) {
        if (this.gamesPlayed % 2 === 0) {
          if (this.move % 2 === 0) this.player2Score++;
          else this.player1Score++;
        } else {
          if (this.move % 2 === 0) this.player1Score++;
          else this.player2Score++;
        }
      }
      this.gameOver = false;
      this.isDraw = false;
      this.move = 0;
      this.gamesPlayed++;
      this.isTileSelected = this.isTileSelected.map((val) => (val = false));
    },
  },
});
