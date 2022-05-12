"use strict";
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

// Is computerPlay() being called on load? Does it matter? Should it be a function expression instead?

function computerPlay() {
  return rps[Math.floor(Math.random() * rps.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = userPlay().toLowerCase();
  computerSelection = computerPlay().toLowerCase();
  if (computerSelection == "scissors" && playerSelection == "rock") {
    return "You win! Rock beats Scissors.";
  } else if (computerSelection == "scissors" && playerSelection == "paper") {
    return "You lose! Scissors beats Paper.";
  } else if (computerSelection == "scissors" && playerSelection == "scissors") {
    return "You Tie.";
  } else if (computerSelection == "paper" && playerSelection == "rock") {
    return "You Lose! Paper beats Rock.";
  } else if (computerSelection == "paper" && playerSelection == "paper") {
    return "You Tie.";
  } else if (computerSelection == "paper" && playerSelection == "scissors") {
    return "You Win! Scissors beats Paper.";
  } else if (computerSelection == "rock" && playerSelection == "rock") {
    return "You tie.";
  } else if (computerSelection == "rock" && playerSelection == "paper") {
    return "You win! Paper beats Rock.";
  } else if (computerPlay == "rock" && playerSelection == "scissors") {
    return "You lose! Rock beats Scissors.";
  }
}

//  Wrote userPlay() as a function expression to ensure it does not get called on load, and only gets called once playRound() is called

const userPlay = function () {
  return prompt("Rock, Paper, or Scissors?");
};
const computerSelection = computerPlay();
console.log(playRound());

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  }
}
