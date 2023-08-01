let aroc = ["rock","paper","scissors"];
let playerSelection;
let rounds = [];

function player_Selection() {
    //prompt player choice
    let p = prompt("Enter",);
    while (p == null || p == " ") {
        p = prompt("Enter");
    }
    return validatePlayerChoice(p).toLowerCase();
}

function computer_Selection() {
    //randomly get computer choice
    return aroc[Math.floor(Math.random() * 3)];    
}

let validatePlayerChoice = function (p) {
    //let playerSelection = player_Selection();
    while (!aroc.includes(p)) {
            p = prompt("Wrong value. Choose from array again");
          }
    return p;
}

function playRound(playerSelection, computerSelection) {
    // your code here!
    playerSelection = player_Selection();
    computerSelection = computer_Selection();
    if (playerSelection === "rock" && computerSelection === "scissors"
        || playerSelection === "scissors" && computerSelection === "paper" 
        || playerSelection === "paper" && computerSelection === "rock") {
            rounds.push("P");
            alert("YOu win");
    } else if (playerSelection === computerSelection) {
        alert("A draw you will go again");
        drawfunction();
        return;
    } else {
    rounds.push("C");
    alert("Computer wins");
}
  }

function drawfunction() {
    playRound();
}

function playGame() {
    for (let gameC = 0; gameC < 5; gameC++){
        playRound();
    }

    alert (rounds);
    displayWinner();
}

function displayWinner() {
    let cInstances = [rounds.filter( (age) => {return age === "C"} )];

    if (cInstances.length < 3) {
        alert("You win the whole shabang");
    }
    else{
    alert("Computer wins the whole shabang");
    }
}

playGame();
  /**const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));*/

