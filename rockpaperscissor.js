const playerSelection = prompt("Choose Rock, Paper or Scissors: ");
const choice = ["rock","paper","scissors"];

function getComputerChoice() {
    return choice[(Math.floor(Math.random() * 10)%3)];
}

function winner_loser(player, computer) {
    if (player === "rock" && computer === "rock") {
        return ("Draw! Rock doesn't beat Rock");
    }
    else if (player === "paper" && computer === "paper") {
        return ("Draw! Paper doesn't beat Paper");
    }
    else if (player === "scissors" && computer === "scissors") {
        return ("Draw! Scissors doesn't beat Scissors");
    }
    else if (player === "rock" && computer === "scissors") {
        return ("You Win! Rock beats Scissors");
    }
    else if (player === "rock" && computer === "paper") {
        return ("You Lose! Paper beats Rock");
    }
    else if (player === "paper" && computer === "rock") {
        return ("You Win! Paper beats Rock");
    }
    else if (player === "paper" && computer === "scissors") {
        return ("You Lose! Scissors beats Paper");
    }
    else if (player === "scissors" && computer === "paper") {
        return ("You Win! Scissors beats Paper");
    }
    else if (player === "scissors" && computer === "rock") {
        return ("You Lose! Rock beats Scissors");
    }
    else {
        console.log(`Your Answer: ${player} and Computer Answer: ${computer}`);
        return("Invalid Answer. you lose");
    }
}

console.log(winner_loser(playerSelection, getComputerChoice()) );