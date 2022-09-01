// WE NEED AN OPTION WHERE IF YOU INPUT A WRONG WORD IT SAYS PLEASE ENTER ROCK PAPER OR SCISSORS!

alert("Lets play a game!");

/**
*
* @returns the computer's play (Rock, Paper, or Scissors)
*
*/

function computerPlay() {
  let selectionOptions = ["Rock", "Paper", "Scissors"];
  let randomString = Math.floor(Math.random() * 3);

  return selectionOptions[randomString];
  }

/**
*
* @param {the user's play} playerSelection
* @param {the computer's play} computerSelection
* @returns the winner of the round
* 
*/

function playRound(playerSelection, computerSelection) {
  let roundWinnerMessage;
  let winner;

    switch (playerSelection) {
    case "Rock":
      if (computerSelection === "Rock") {
        roundWinnerMessage = `No winner! You both played ${playerSelection}`;
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
        roundWinnerMessage = `No winner! You both played ${playerSelection}`;
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
        roundWinnerMessage = `No winner! You both played ${playerSelection}`;
      }
      break;
    default:   
      roundWinnerMessage = "Sorry, you did not enter a valid option!";
    }
  return [roundWinnerMessage, winner];
}
  
/**
* This function plays 5 rounds of the game
* It logs the winner of each round
* And the overall winner of the game
*/

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let gameResultMessage;

  for (let i = 0; i < 5; i++) {
    let userSelection = prompt("Please choose rock, paper or scissors.");
    let formattedUserSelection = userSelection.charAt(0).toUpperCase() + userSelection.slice(1).toLowerCase();
    let roundResult = playRound(formattedUserSelection, computerPlay());

  console.log(roundResult[0]);

    if (roundResult[1] === "player") {
      playerScore += 1;
    } else if (roundResult[1] === "computer") {
      computerScore += 1;
    }
  }

  if (playerScore > computerScore) {
    gameResultMessage = `Congratulations! You won the game! Player Score: ${playerScore} Computer Score: ${computerScore}`;
  } else if (playerScore < computerScore) {
    gameResultMessage = `Sorry! You lost the game! Player Score: ${playerScore} Computer Score: ${computerScore}`;
  } else {
    gameResultMessage = "The game was a tie";
  }
  console.log(gameResultMessage);
}
  
game();




/*

if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
return urerInput
} else {
  prompt("Error please enter rock, paper or scissors");
}

*/