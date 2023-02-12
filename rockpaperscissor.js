const choice = ["rock","paper","scissors"];

let player_score = 0;
let computer_score = 0;

const result = document.querySelector(".result");
const player_display = document.querySelector(".player_display");
const computer_display = document.querySelector(".computer_display");

const play_btn = document.querySelector('#btn');
play_btn.addEventListener("click", (e) => play_start());
player_display.textContent = player_score;
computer_display.textContent = computer_score;
const winner = document.querySelector(".winner");

function play_start() { 
    const playerSelection = prompt("Choose Rock, Paper or Scissors: ").toLowerCase();
    const computerSelection = getComputerChoice();
    let match_result = playRound(playerSelection, computerSelection);
    result.textContent = match_result;
    player_display.textContent = player_score;
    computer_display.textContent = computer_score;
    if ( player_score >= 5) {
        winner.textContent = "Player wins!";
    }
    else if (computer_score >= 5) {
        winner.textContent = "Computer wins!";
    }
}

function getComputerChoice() {
    return choice[(Math.floor(Math.random() * 10)%3)];
}

function playRound(player, computer) {
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
        player_score++;
        return ("You Win! Rock beats Scissors");
    }
    else if (player === "rock" && computer === "paper") {
        computer_score++;
        return ("You Lose! Paper beats Rock");
    }
    else if (player === "paper" && computer === "rock") {
        player_score++;
        return ("You Win! Paper beats Rock");
    }
    else if (player === "paper" && computer === "scissors") {
        computer_score++;
        return ("You Lose! Scissors beats Paper");
    }
    else if (player === "scissors" && computer === "paper") {
        player_score++;
        return ("You Win! Scissors beats Paper");
    }
    else if (player === "scissors" && computer === "rock") {
        computer_score++;
        return ("You Lose! Rock beats Scissors");
    }
    else {
        console.log(`Your Answer: ${player} and Computer Answer: ${computer}`);
        computer_score++;
        return("Invalid Answer. you lose");
    }
}

