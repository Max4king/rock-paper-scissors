const playerSelection = prompt("Choose Rock, Paper or Scissors: ");
const choice = ["rock","paper","scissors"];

function getComputerChoice() {
    return choice[(Math.floor(Math.random() * 10)%3)];
}

function winner_loser(player, computer) {
    if (player === "rock" && computer === "rock") {
        console.log("Draw! Rock doesn't beat Rock");
    }
    else if (player === "paper" && computer === "paper") {
        console.log("Draw! Paper doesn't beat Paper");
    }
    else if (player === "scissors" && computer === "scissors") {
        console.log("Draw! Scissors doesn't beat Scissors");
    }
    else if (player === "rock" && computer === "scissors") {
        console.log("You Win! Rock beats Scissors");
    }
    else if (player === "rock" && computer === "paper") {
        console.log("You Lose! Paper beats Rock");
    }
    else if (player === "paper" && computer === "rock") {
        console.log("You Win! Paper beats Rock");
    }
    else if (player === "paper" && computer === "scissors") {
        console.log("You Lose! Scissors beats Paper");
    }
    else if (player === "scissors" && computer === "paper") {
        console.log("You Win! Scissors beats Paper");
    }
    else if (player === "scissors" && computer === "rock") {
        console.log("You Lose! Rock beats Scissors");
    }
    else {
        console.log("Invalid Answer. you lose");
        console.log(`Your Answer: ${player} and Computer Answer: ${computer}`);
    }
}

winner_loser(playerSelection, getComputerChoice());