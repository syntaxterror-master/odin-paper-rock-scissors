
let humanScore = 0
let computerScore = 0
let round = 1
const totalRounds = 5

function getComputerChoice() {
const choices = ["rock", "paper", "scissors"]
return choices[Math.floor(Math.random() * choices.length)]
}

const container = document.getElementById('container')


 const roundDisplay = document.createElement("p")
 roundDisplay.textContent = `Round: ${round}`
 container.appendChild(roundDisplay)

const scoreDisplay = document.createElement('p')
scoreDisplay.textContent = `Your score: ${humanScore} Computer score: ${computerScore}`;
container.appendChild(scoreDisplay)

const resultDisplay = document.createElement('p')
resultDisplay.textContent = "Make your choice!"
container.appendChild(resultDisplay)

const buttons = document.getElementById('buttons')

buttons.addEventListener('click', function(e){
  if (round > totalRounds) {
    resultDisplay.textContent = "Game over! Refresh to play again.";
    return 
  }
  const humanChoice = e.target.value
  const computerChoice = getComputerChoice()

  playRound(humanChoice, computerChoice);
  round++

  roundDisplay.textContent = `Round: ${round > totalRounds ? totalRounds : round}`;
  scoreDisplay.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`;

  if (round > totalRounds) {
    if (humanScore > computerScore) {
      resultDisplay.textContent = "Congratulations, you win the game!";
    } else if (humanScore < computerScore) {
      resultDisplay.textContent = "You lose the game. Better luck next time!";
    } else {
      resultDisplay.textContent = "The game is a tie!";
    }
  }

})


function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    resultDisplay.textContent = `It's a tie! Both chose ${humanChoice}`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
    resultDisplay.textContent = `You win this round! ${humanChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    resultDisplay.textContent = `You lose this round! ${computerChoice} beats ${humanChoice}`;
  }
}
