function getComputerChoice() {
    const inputs = ["Rock", "Paper", "Scissors"];
    return inputs[Math.floor(Math.random() * inputs.length)];
}

function playRound(humanChoice, computerChoice) {
    if (computerChoice === humanChoice) {
        return "It's a draw!";
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

let playerScore = 0;
let computerScore = 0;

function handleChoice(humanChoice) {
    const computerChoice = getComputerChoice();
    const resultMessage = playRound(humanChoice, computerChoice);

    if (resultMessage === "You win!") {
        playerScore++;
    } else if (resultMessage === "You lose!") {
        computerScore++;
    }

    const resultDiv = document.querySelector(".result");
    resultDiv.innerHTML = `
        <p>You chose: ${humanChoice}</p>
        <p>Computer chose: ${computerChoice}</p>
        <p>Result: ${resultMessage}</p>
        <p>Score: You ${playerScore} - ${computerScore} Computer</p>
    `;

    checkForWinner();
}

function checkForWinner() {
    const winnerDiv = document.querySelector(".winner");
    if (playerScore === 5) {
        winnerDiv.innerHTML = `<h2 class="player-won">You won, ${playerScore} to ${computerScore}! Great job beating the computer!</h2>`;
        resetGame();
    } else if (computerScore === 5) {
        winnerDiv.innerHTML = `<h2 class="computer-won">You lost, ${playerScore} to ${computerScore}. Better luck next time!</h2>`;
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    const resultDiv = document.querySelector(".result");
    resultDiv.innerHTML = "";
    const winnerDiv = document.querySelector(".winner");
    winnerDiv.innerHTML = "";
}

document.querySelector("#btnRock").addEventListener("click", () => handleChoice("Rock"));
document.querySelector("#btnPaper").addEventListener("click", () => handleChoice("Paper"));
document.querySelector("#btnScissors").addEventListener("click", () => handleChoice("Scissors"));
