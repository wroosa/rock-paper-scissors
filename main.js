const SCORE_CAP = 5;
let humanScore = 0;
let computerScore = 0;
const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");
const scoreBoard = document.querySelector("#scoreboard");

rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperButton.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissorsButton.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

function playRound(humanChoice, computerChoice) {
  // Check if the choices are equal and if so it's a draw

  if (humanChoice === computerChoice) {
    scoreBoard.innerHTML = `That round was a draw.<br>The Score is now ${humanScore} - ${computerScore}`;

    // Check for any condition in which the user's choice is winning and increment their score
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    if (++humanScore === SCORE_CAP) {
      endGame("human");
    } else {
      updateScoreBoard("You won that round!");
    }

    // If the user did not win and it is not a draw then the computer must have won
  } else {
    if (++computerScore === SCORE_CAP) {
      endGame("computer");
    } else {
      updateScoreBoard("You lost that round!");
    }
  }
}

function endGame(winner) {
  if (winner === "human") {
    scoreBoard.innerHTML = `You won this game! ヽ༼ຈل͜ຈ༽ﾉ<br>The score was ${humanScore} - ${computerScore}.<br>Select an option to start a new game.`;
  } else {
    scoreBoard.innerHTML = `You lost this game! (~_~;)<br>The score was ${humanScore} - ${computerScore}.<br>Select an option to start a new game.`;
  }
  humanScore = 0;
  computerScore = 0;
}

function updateScoreBoard(message) {
  scoreBoard.innerHTML = `${message}<br>The score is now ${humanScore} - ${computerScore}.`;
}

// Generate a string between 'rock', 'paper', and 'scissors' at random
function getComputerChoice() {
  const randomNum = getRandomInt(1, 3);
  if (randomNum === 1) {
    return "scissors";
  } else if (randomNum === 2) {
    return "rock";
  } else if (randomNum === 3) {
    return "paper";
  }
}

// Generate a random integer between a min and a max inclusive
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  /* 
  Get the size of the range between max and min (max - min + 1) and multiply it by a random fraction (Math.random()) which gives you the point between the Max and Min range that was generated. Slide that point up my the min (+ min) and then round down to get the random integer.
  */
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Randomness Testing //

// Initialize result counts
let rock = 0;
let paper = 0;
let scissors = 0;

// Loop through a specific number of tests and store the results
const NUMBER_OF_TESTS = 1000;

for (let i = 1; i < NUMBER_OF_TESTS; i++) {
  let result = getComputerChoice();
  if (result === "scissors") {
    scissors++;
  } else if (result === "rock") {
    rock++;
  } else if (result === "paper") {
    paper++;
  }
}

// Calculate the percentage for each type of result
rockPercent = Math.round((rock / NUMBER_OF_TESTS) * 100);
paperPercent = Math.round((paper / NUMBER_OF_TESTS) * 100);
scissorsPercent = Math.round((scissors / NUMBER_OF_TESTS) * 100);

// Display the percentages for each type of result
alert(
  `rock:${rockPercent}% paper:${paperPercent}% scissors:${scissorsPercent}%`
);
