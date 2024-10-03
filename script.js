function playGame() {
    let humanScore = 0;
    let computerScore = 0;


    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        } else if (humanChoice == "rock" && computerChoice == "paper") {
            console.log("You lose! Paper beats Rock")
            computerScore++;
        } else if (humanChoice == "rock" && computerChoice == "rock") {
            console.log("Tie");
        }

        if (humanChoice == "paper" && computerChoice == "rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
        } else if (humanChoice == "paper" && computerChoice == "scissors") {
            console.log("You lose! Scissors beats Paper")
            computerScore++
        } else if (humanChoice == "paper" && computerChoice == "paper") {
            console.log("Tie");
        }

        if (humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win! Scissors beats Paper")
            humanScore++;
        } else if (humanChoice == "scissors" && computerChoice == "rock") {
            console.log("You lose! Rock beats Scissors")
            computerScore++;
        } else if (humanChoice == "scissors" && computerChoice == "scissors") {
            console.log("Tie");
        }
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`Your Score: ${humanScore}, Computer Score: ${computerScore}`);

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

function getHumanChoice(){
    let humanChoice = prompt("Please enter your choice");

    let lowerCaseHumanChoice = humanChoice.toLowerCase();

    if(lowerCaseHumanChoice == "rock" || lowerCaseHumanChoice == "paper" || lowerCaseHumanChoice == "scissors"){
        return lowerCaseHumanChoice;
    }else{
        return "Invalid Choice";
    }
}


playGame();