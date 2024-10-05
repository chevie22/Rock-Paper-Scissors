let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const result = document.querySelector("#result");
    const humanScoreSpan = document.querySelector("#humanScore");
    const computerScoreSpan = document.querySelector("#computerScore");


    if (humanChoice == "rock" && computerChoice == "scissors") {
        result.innerHTML = ("You win! Rock beats Scissors");
        humanScore++;
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        result.innerHTML = ("You lose! Paper beats Rock")
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "rock") {
        result.innerHTML = ("Tie");
    }

    if (humanChoice == "paper" && computerChoice == "rock") {
        result.innerHTML = ("You win! Paper beats Rock");
        humanScore++;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        result.innerHTML = ("You lose! Scissors beats Paper")
        computerScore++
    } else if (humanChoice == "paper" && computerChoice == "paper") {
        result.innerHTML = ("Tie");
    }

    if (humanChoice == "scissors" && computerChoice == "paper") {
        result.innerHTML = ("You win! Scissors beats Paper")
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        result.innerHTML = ("You lose! Rock beats Scissors")
        computerScore++;
    } else if (humanChoice == "scissors" && computerChoice == "scissors") {
        result.innerHTML = ("Tie");
    }

    const container = document.querySelector(".container");
    const winner = document.createElement("div");

    humanScoreSpan.innerHTML = humanScore;
    computerScoreSpan.innerHTML = computerScore;
    if (humanScore == 5){
        winner.innerHTML = "You won!";
    } else if (computerScore == 5){
        winner.innerHTML = "Computer won! :C";
    }

    container.appendChild(winner);
    
}

function getComputerChoice(){
    let choiceInt = Math.floor(Math.random() * 3);
    switch(choiceInt){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

let buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
    let humanChoice = e.target.id;
    let computerChoice = getComputerChoice();
    if(humanScore < 5 && computerScore < 5){
        playRound(humanChoice, computerChoice)
    }
});
