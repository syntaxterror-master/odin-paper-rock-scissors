let humanScore = 0
let computerScore = 0

function getComputerChoice() {
 let number = Math.floor(Math.random() *3 + 1)

 if (number === 1) {
   return "rock"
 }
 if (number === 2) {
   return "paper"
 }
 if (number === 3) {
   return "scissors"
 }
}

// Rock beats scissors, scissors beat paper, and paper beats rock.


function getHumanChoice() {

   let choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase()
  while (!["rock", "paper", "scissors"].includes(choice)) {
    choice = prompt("Invalid choice. Please enter 'rock', 'paper', or 'scissors':").toLowerCase();
  }
  return choice
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase()

   if (
    (humanChoice === "rock" && computerChoice === "scissors") || 
    ( humanChoice === "scissors" && computerChoice === "paper") ||
    ( humanChoice === "paper" && computerChoice === "rock")
   ) {
    humanScore++
    console.log(`You win! ${humanChoice} beats ${computerChoice}`)
   } else {
    computerScore++
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
   }
}

function playGame() {
   humanScore = 0
   computerScore = 0

  for ( let round = 0; round <= 5; round++){
    console.log(`Round: ${round}`)
    const humanChoice = getHumanChoice()
    const computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
    console.log(`Your score ${humanScore} | computer score ${computerScore}`)
  }

  console.log('Game Over!')

  if(humanScore > computerScore) {
    console.log("Congratulations, you win the game!")
  } else if (humanScore < computerScore) {
    console.log('You lose the game. Better luck next time!')
  } else {
    console.log("The game is a tie!")
  }
}

playGame()