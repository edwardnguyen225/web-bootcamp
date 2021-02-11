/*
let player1_score = 0;
let player2_score = 0;
const player1_score_btn = document.querySelector("#player1_score_inc_btn");
const player2_score_btn = document.querySelector("#player2_score_inc_btn");
const player1_score_display = document.querySelector("#player1_score_display");
const player2_score_display = document.querySelector("#player2_score_display"); 
*/
// Instead of the above codes, make it into 2 objects like below
const player1 = {
  score: 0,
  button: document.querySelector("#player1_score_inc_btn"),
  score_display: document.querySelector("#player1_score_display"),
};
const player2 = {
  score: 0,
  button: document.querySelector("#player2_score_inc_btn"),
  score_display: document.querySelector("#player2_score_display"),
};

const winning_score_select = document.querySelector("#winning_score_select");
const reset_button = document.querySelector("#reset");
let winning_score = 3;
let is_game_over = false;

winning_score_select.addEventListener("change", function () {
  winning_score = parseInt(this.value);
  reset();
});

function update_scores(player, opponent) {
  if (!is_game_over) {
    player.score += 1;
    if (player.score === winning_score) {
      is_game_over = true;
      player.score_display.classList.add("has-text-success");
      opponent.score_display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.score_display.textContent = player.score;
  }
}

player1.button.addEventListener("click", function () {
  update_scores(player1, player2);
});

player2.button.addEventListener("click", function () {
  update_scores(player2, player1);
});

reset_button.addEventListener("click", reset);

function reset() {
  is_game_over = false;
  for (let p of [player1, player2]) {
    p.score = 0;
    p.score_display.textContent = 0;
    p.score_display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}
