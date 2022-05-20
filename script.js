"use strict";

const rps = ["rock", "paper", "scissors"];

// Wrote userPlay() as a function expression to ensure it does not get called
// on load, and only gets called once playRound() is called. Yes, I'm dumb.

const userPlay = function () {
  return prompt("Rock, Paper, or Scissors?");
};
const computerSelection = computerPlay();
console.log(playRound());

// Is computerPlay() being called on load? Does it matter? Should it be a function
// expression instead?

function computerPlay() {
  return rps[Math.floor(Math.random() * rps.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = userPlay().toLowerCase(); // Learned new toLowerCase() syntax. Don't forget!!!
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
  } else if (computerSelection == "rock" && playerSelection == "scissors") {
    return "You lose! Rock beats Scissors.";
  }
}

// Loops game 5 times by counting up from 0

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound());
  }
}


