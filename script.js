// Get DOM elements
const playerScoreElem = document.getElementById('player-score');
const computerScoreElem = document.getElementById('computer-score');
const rollDiceBtn = document.getElementById('roll-dice');
const holdBtn = document.getElementById('hold');
const resetBtn = document.getElementById('reset');

let currentPlayer = 'player';
let playerScore = 0;
let computerScore = 0;

// Function to generate random number between 1 and 6
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Function to update player score
function updatePlayerScore(score) {
  playerScore += score;
  playerScoreElem.textContent = playerScore;
}

// Function to update computer score
function updateComputerScore(score) {
  computerScore += score;
  computerScoreElem.textContent = computerScore;
}

// Function to switch player
function switchPlayer() {
  currentPlayer = currentPlayer === 'player' ? 'computer' : 'player';
}

// Function to reset the game
function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreElem.textContent = '0';
  computerScoreElem.textContent = '0';
  currentPlayer = 'player';
}

// Roll Dice button click event
rollDiceBtn.addEventListener('click', () => {
  const diceValue = rollDice();
  if (diceValue !== 1) {
    if (currentPlayer === 'player') {
      updatePlayerScore(diceValue);
    } else {
      updateComputerScore(diceValue);
    }
  } else {
    if (currentPlayer === 'player') {
      updatePlayerScore(0);
      switchPlayer();
    } else {
      updateComputerScore(0);
      switchPlayer();
    }
  }
});

// Hold button click event
holdBtn.addEventListener('click', () => {
  switchPlayer();
});

// Reset button click event
resetBtn.addEventListener('click', () => {
  resetGame();
});
