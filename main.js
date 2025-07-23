// Main function that plays five rounds of the game and declare a winner based on scores
function playGame() {
  // Compare the users choice and the computers choice and update the score
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    // Check if the choices are equal and if so it's a draw
    if (humanChoice === computerChoice) {
      console.log(`That round was a draw! ${humanChoice} == ${computerChoice}`);
      return;

      // Check for any condition in which the user's choice is winning and increment their score
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      console.log(
        `You won that round! ${humanChoice} beats ${computerChoice}.`
      );
      humanScore++;

      // If the user did not win and it is not a draw then the computer must have won
    } else {
      console.log(
        `You lost that round! ${humanChoice} loses to ${computerChoice}.`
      );
      computerScore++;
    }
  }

  // Declare scores and the number of rounds to play
  const NUM_OF_ROUNDS = 5;
  let humanScore = 0;
  let computerScore = 0;
  let isFinalRound = false;

  // Play five rounds
  for (let i = 0; i < NUM_OF_ROUNDS; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }

  // Compare the scores and declare a winner or draw
  if (humanScore === computerScore) {
    console.log(
      `\nThis game is a draw ( ͡° ͜ʖ ͡°) You[${humanScore}] - Opponent[${computerScore}]`
    );
  } else if (humanScore > computerScore) {
    console.log(
      `\nYou won this game! ヽ༼ຈل͜ຈ༽ﾉ You[${humanScore}] - Opponent[${computerScore}]`
    );
  } else if (computerScore > humanScore) {
    console.log(
      `\nYou lost this game! (~_~;) You[${humanScore}] - Opponent[${computerScore}]`
    );
  }
}

// Prompt the user for a string input of 'rock', 'paper', or 'scissors'
function getHumanChoice() {
  // Assume the user will always input a valid string
  return prompt("Please select 'Rock', 'Paper', or 'Scissors':");
}

// Generate a string between 'rock', 'paper', and 'scissors' at random
function getComputerChoice() {
  let randomNum = getRandomInt(1, 3);
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

// Main Loop
playGame();
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
