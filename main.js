function getComputerChoice() {
  // Returns a random integer from 0 to 2
  let nb = Math.floor(Math.random() * 3);

  if (nb == 0) return "Rock";
  else if (nb == 1) return "Paper";
  else return "Scissors";
}