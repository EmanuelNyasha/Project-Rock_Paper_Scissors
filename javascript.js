function getComputerChoice() {
    const inputs = ["Rock", "Paper", "Scissors"];
    const computerInput = inputs[Math.floor(Math.random()*inputs.length)];
    return computerInput;
    }
    getComputerChoice();
    
    function getHumanChoice() {
        let userInput = prompt("Please enter your choice here: ").toLowerCase();
    
        if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
            return userInput.charAt(0).toUpperCase() + userInput.slice(1);
        } else {
            alert("Invalid choice, please enter Rock, Paper, or Scissors.");
            return getHumanChoice();  // Recursive call to ask again
    }
}
    function playRound(humanChoice, computerChoice) {
        if (computerChoice === humanChoice) {
            return "draw";
        } else if (humanChoice === "Rock" && computerChoice === "Scissors" ||
                   humanChoice === "Paper" && computerChoice === "Rock" ||
                   humanChoice === "Scissors" && computerChoice === "Paper") {
            return "You win!";
        } else {
            return "You lose!";
        }
    }
    
       function playGame() {
        let humanScore = 0;
        let computerScore = 0;
        for (let i = 0; i < 5; i++) {
            const computerChoice = getComputerChoice();
            const humanChoice = getHumanChoice();

            console.log(`Round ${i + 1}:`);
         console.log(`Player choice: ${humanChoice}`);
         console.log(`Computer choice: ${computerChoice}`);
        
         const result = playRound(humanChoice, computerChoice);
        console.log(result);

        // Update scores based on round result
        if (result === "You win!") {
            humanScore++;
        } else if (result === "You lose!") {
            computerScore++;
        }
    }
        console.log("Game Over");
        if (humanScore > computerScore) {
            console.log("Player is the winner");
        } else if (humanScore < computerScore) {
            console.log("You lose, Computer is the winner");
        }
        else {
            console.log("It's a tie");
        }
       }

       playGame();
    