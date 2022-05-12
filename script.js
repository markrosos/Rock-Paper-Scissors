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
// Computer plays a random selectino of rock, paper, or scissors
// If computer plays paper, computer wins
// If computer plays scissors, computer loses
// If computer plays rock, the game ends in a tie

let RPS = ['rock', 'paper', 'scissors'];
let randomRPS = RPS[Math.floor(Math.random() * RPS.length )]

function playRound(playerSelection, computerSelection) {
  if (computerSelection == "scissors") {
    return ("You win! Rock beats Scissors");
  } else if (computerSelection == "paper") {
    return ("You Lose! Paper beats Rock");
  } else if (computerSelection == "rock") {
    return ("You tie.");
  }
}

const playerSelection = "rock";
const computerSelection = randomRPS;
console.log(playRound(playerSelection, computerSelection));

