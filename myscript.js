const computerChoiceArray = ["rock", "paper", "scissors"];
const playerWinMessage = "You win";
const computerWinMessage = "Computer wins";
const playerWinCollectionArray = [];
const computerWinCollectionArray = [];

let button = document.querySelectorAll("button");
//console.log(button);
const div = document.querySelector(".displayResults");

button.forEach((button) => {
  button.addEventListener("click", (e) => {
    //console.log(e.target.id);
    div.textContent = "";
    if (computerChoiceArray.includes(e.target.id)) {
      playRound(e.target.id);
    }

    if (
      playerWinCollectionArray.length + computerWinCollectionArray.length ===
      5
    ) {
      displayWinner();
    }
  });
});

function displayWinner() {
  if (playerWinCollectionArray.length > computerWinCollectionArray.length) {
    div.textContent = "You win the whole shabang";
  } else {
    // const div = document.querySelector(".displayResults");
    div.textContent = "Whomp, whomp.";
  }
  playerWinCollectionArray.length = 0;
  computerWinCollectionArray.length = 0;
  console.log(playerWinCollectionArray.length);
  console.log(computerWinCollectionArray.length);
}

function playRound(playerChoice) {
  let computerChoice = selectComputerValue();
  console.log(playerChoice);
  console.log(computerChoice);
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(playerWinMessage);
    playerWinCollectionArray.push("P");
  } else if (playerChoice === computerChoice) {
    alert("Draw, you're going again");
    return;
  } else {
    console.log(computerWinMessage);
    computerWinCollectionArray.push("C");
  }
}

function selectComputerValue() {
  return computerChoiceArray[Math.floor(Math.random() * 3)];
}
