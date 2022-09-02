alert("Lets play a game!");

function computerPlay() {
  let selectionOptions = ["Rock", "Paper", "Scissors"]; // List of options for the computer in an array
  let randomString = Math.floor(Math.random() * selectionOptions.length); // Lets you choose a random item from the array
  return selectionOptions[randomString]; // Returns random item to the console
  }

function playRound(playerSelection, computerSelection) { // Nested a conditional statement using switch case in a function with parameters for the single round
  let roundWinnerMessage; 
  let winner; // Declared variables
    switch (playerSelection) {
    case "Rock":
      if (computerSelection === "Rock") {
        roundWinnerMessage = `Tie! You both played ${playerSelection}`;
      } else if (computerSelection === "Paper") {
        roundWinnerMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
        winner = "computer";
      } else if (computerSelection === "Scissors") {
        roundWinnerMessage = `You win! ${playerSelection} beats ${computerSelection}`;
        winner = "player";
      }
      break;
    case "Paper":
      if (computerSelection === "Rock") {
        roundWinnerMessage = `You win! ${playerSelection} beats ${computerSelection}`;
        winner = "player";
      } else if (computerSelection === "Paper") {
        roundWinnerMessage = `Tie! You both played ${playerSelection}`;
      } else if (computerSelection === "Scissors") {
        roundWinnerMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
        winner = "computer";
      }
      break;
    case "Scissors":
      if (computerSelection === "Rock") {
        roundWinnerMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
        winner = "computer";
      } else if (computerSelection === "Paper") {
        roundWinnerMessage = `You win! ${playerSelection} beats ${computerSelection}`;
        winner = "player";
      } else if (computerSelection === "Scissors") {
        roundWinnerMessage = `Tie! You both played ${playerSelection}`;
      }
      break;
    default:   
      roundWinnerMessage = "Sorry, you did not enter a valid option!"; // If the user enters a wrong input a message comes up
    }
  return [roundWinnerMessage, winner]; // Returns the winner of the round
}

function game() { // Created game function for five rounds
  let playerScore = 0; // Variable that starts score from 0
  let computerScore = 0; // Variable that starts score from 0
  let gameResultMessage; // Variable for the message result

  for (let i = 0; i < 5; i++) { // Created a for loop to repeat the rounds five times
    let userSelection = prompt("Please choose rock, paper or scissors."); // Variable that prompts user to enter their choice
    let formattedUserSelection = userSelection.charAt(0).toUpperCase() + userSelection.slice(1).toLowerCase(); // Input rock paper scissors in any format. Whatever the input is converted to lowercase to prevent any errors.
    let roundResult = playRound(formattedUserSelection, computerPlay()); 
  console.log(roundResult[0]);

    if (roundResult[1] === "player") { // Shows result of playerscore
      playerScore += 1; // Adds one to score when player wins a round
    } else if (roundResult[1] === "computer") { // Shows result of computer score
      computerScore += 1; // Adds one to score when computer wins a round
    }
  }

  if (playerScore > computerScore) {
    gameResultMessage = `\nCongratulations! You won the game! \nPlayer Score: ${playerScore} Computer Score: ${computerScore}`;
  } else if (playerScore < computerScore) {
    gameResultMessage = `\nSorry! You lost the game! \nPlayer Score: ${playerScore} Computer Score: ${computerScore}`;
  } else {
    gameResultMessage = "\nThe game was a tie";
  }
  console.log(gameResultMessage);
}
  
game();