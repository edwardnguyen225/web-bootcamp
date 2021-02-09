const player1_score_btn = document.querySelector("#player1_score_inc_btn");
const player2_score_btn = document.querySelector("#player2_score_inc_btn");
const player1_score_display = document.querySelector("#player1_score_display");
const player2_score_display = document.querySelector("#player2_score_display");
const winning_score_select = document.querySelector("#winning_score_select");

let player1_score = 0;
let player2_score = 0;
let winning_score = 3;
let is_game_over = false;

winning_score_select.addEventListener("change", function () {
  winning_score = parseInt(this.value);
  reset();
});

player1_score_btn.addEventListener("click", function () {
  if (!is_game_over) {
    player1_score += 1;
    if (player1_score === winning_score) {
      is_game_over = true;
      player1_score_display.classList.add("winner");
      player2_score_display.classList.add("loser");
    }
    player1_score_display.textContent = player1_score;
  }
});

player2_score_btn.addEventListener("click", function () {
  if (!is_game_over) {
    player2_score += 1;
    if (player2_score === winning_score) {
      is_game_over = true;
      player1_score_display.classList.add("loser");
      player2_score_display.classList.add("winner");
    }
    player2_score_display.textContent = player2_score;
  }
});

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", reset);

function reset() {
  is_game_over = false;
  player1_score = 0;
  player2_score = 0;
  player1_score_display.textContent = player1_score;
  player2_score_display.textContent = player2_score;
  player1_score_display.classList.remove("winner", "loser");
  player2_score_display.classList.remove("winner", "loser");
}
