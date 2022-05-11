// Player plays rock
// If computer plays scissors computer loses
// Else
// If computer plays paper, computer wins

function playRound(playerSelection, computerSelection) {
  if (computerSelection == "scissors") {
    return ("You win! Rock beats Scissors");
  } else if (computerSelection == "paper") {
    return ("You Lose! Paper beats Rock");
  }
}

const playerSelection = "rock";
const computerSelection = "computerPlay()";
console.log(playRound(playerSelection, computerSelection));
