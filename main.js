function getComputerChoice() {
  // Returns a random integer from 0 to 2
  let nb = Math.floor(Math.random() * 3);
  let choice;

  if (nb == 0) choice = "Rock";
  else if (nb == 1) choice = "Paper";
  else choice = "Scissors";

  return choice;
}

function playSingleRound(playerSelection, computerSelection) {
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
