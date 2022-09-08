const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const computerScore = document.querySelector(".computer-score");
const playerScore = document.querySelector(".playerScore");

let screen = " ";
let screenStorage = " ";

function computerPlay() {
  let playerOptions = ["Rock", "Paper", "Scissors"];
  let randomString = Math.floor(Math.random() * playerOptions.length);
  return playerOptions[randomString];
}

function playRound(playerSelection, computerSelection) {
  const roundResult = {
    roundResultMessage: "",
    roundWinner: "",
  };
  switch (playerSelection) {
    case "Rock":
      if (computerSelection === "Rock") {
        roundResult.roundResultMessage = `Tie! You both played ${playerSelection}`;
      } else if (computerSelection === "Paper") {
        roundResult.roundResultMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
        roundResult.roundWinner = "computer";
      } else if (computerSelection === "Scissors") {
        roundResult.roundResultMessage = `You win! ${playerSelection} beats ${computerSelection}`;
        roundResult.roundWinner = "player";
      }
      break;
    case "Paper":
      if (computerSelection === "Rock") {
        roundResult.roundResultMessage = `You win! ${playerSelection} beats ${computerSelection}`;
        roundResult.roundWinner = "player";
      } else if (computerSelection === "Paper") {
        roundResult.roundResultMessage = `Tie! You both played ${playerSelection}`;
      } else if (computerSelection === "Scissors") {
        roundResult.roundResultMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
        roundResult.roundWinner = "computer";
      }
      break;
    case "Scissors":
      if (computerSelection === "Rock") {
        roundResult.roundResultMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
        roundResult.roundWinner = "computer";
      } else if (computerSelection === "Paper") {
        roundResult.roundResultMessage = `You win! ${playerSelection} beats ${computerSelection}`;
        roundResult.roundWinner = "player";
      } else if (computerSelection === "Scissors") {
        roundResult.roundResultMessage = `Tie! You both played ${playerSelection}`;
      }
      break;
    default:
      console.log("You did not enter a valid option!");
  }
  return roundResult;
}

rockButton.addEventListener("click", function() {
  const computerSelection = computerPlay()
  const playerSelection = "rock";
  playRound (playerSelection, computerSelection)
});

paperButton.addEventListener("click", function() {
  const computerSelection = computerPlay()
  const playerSelection = "paper";
  playRound (playerSelection, computerSelection)
});

scissorsButton.addEventListener("click", function() {
  const computerSelection = computerPlay()
  const playerSelection = "scissors";
  playRound (playerSelection, computerSelection)
});





// function game() {
//   let playerScore = 0,
//     computerScore = 0,
//     gameResultMessage;

//   for (let i = 0; i < 5; i++) {
//     let userSelection = prompt(`Round ${i + 1}: Please enter rock, paper or scissors.`);
//     let formattedUserSelection = userSelection.charAt(0).toUpperCase() + userSelection.slice(1).toLowerCase();
//     let { roundResultMessage, roundWinner } = playRound(
//       formattedUserSelection,
//       computerPlay()
//     );

//     if (roundResultMessage === "" && roundWinner === "") {
//       i--;
//     } else{
//       console.log(`Round ${i + 1}: ${roundResultMessage}`);
//       if (roundWinner === "player") {
//         playerScore += 1;
//       } else if (roundWinner === "computer") {
//         computerScore += 1;
//       }
//     }   
//   }

//   if (playerScore === computerScore) {
//     gameResultMessage = "The game was a tie";
//   } else {
//     gameResultMessage = playerScore > computerScore
//         ? `\nCongratulations! You won the game! \nPlayer Score: ${playerScore} Computer Score: ${computerScore}`
//         : `\nSorry! You lost the game! \nPlayer Score: ${playerScore} Computer Score: ${computerScore}`;
//   }
//   console.log(`END OF THE GAME! ${gameResultMessage}`); 

// }

// game();