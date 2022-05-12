// Player plays rock
// If computer plays scissors computer loses
// Else
// If computer plays paper, computer wins

// function playRound(playerSelection, computerSelection) {
//   if (computerSelection == "scissors") {
//     return ("You win! Rock beats Scissors");
//   } else if (computerSelection == "paper") {
//     return ("You Lose! Paper beats Rock");
//   }
// }

// Player plays rock
// Generate random selection of rock, paper, or scissors
// Computer plays a random selection of rock, paper, or scissors
// If computer plays paper, computer wins
// If computer plays scissors, computer loses
// If computer plays rock, the game ends in a tie

const rps = ["rock", "paper", "scissors"];
function computerPlay() {
  return rps[Math.floor(Math.random() * rps.length)];
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay().toLowerCase();
  if (computerSelection == "scissors") {
    return "You win! Rock beats Scissors";
  } else if (computerSelection == "paper") {
    return "You Lose! Paper beats Rock";
  } else if (computerSelection == "rock") {
    return "You tie.";
  }
}

const playerSelection = "RoCK";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  }
}



