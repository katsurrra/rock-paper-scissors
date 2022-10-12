function getComputerChoice() {
  // Returns a random integer from 0 to 2
  let nb = Math.floor(Math.random() * 3);
  let choice;

  if (nb == 0) choice = "Rock";
  else if (nb == 1) choice = "Paper";
  else choice = "Scissors";

  return choice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection =
    playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1);

  let result;

  if (playerSelection == computerSelection) 
    result = "Draw";
  else if ((playerSelection == "Rock" && computerSelection == "Scissors")||(playerSelection == "Scissors" && computerSelection == "Paper")||(playerSelection == "Paper" && computerSelection == "Rock")) 
    result = `You Win! ${playerSelection} beats ${computerSelection}`;
  else
    result = `You Lose! ${computerSelection} beats ${playerSelection}`;
  
    return result;
}

function game() {
  let userScore;
  let pcScore;
  let userChoice;
  let pcChoice;
  let result;

  for (let i = 0; i < 5; i++) {
    userChoice = prompt("Rock, Paper or Scissors?");
    pcChoice = getComputerChoice();
    result = playRound(userChoice,pcChoice);
    
    console.log(result);

    if (result.includes('Draw')) {
      userScore += 1;
      pcScore += 1;
    }
    
    else if (result.includes('Win'))
      userScore += 1;
    
    else pcScore += 1;
  }
  if (userScore > pcScore) 
    console.log("You win the game!");
  else if (userScore == pcScore)
    console.log("This game is a draw!");
  else console.log("You lose the game!");
}

game();