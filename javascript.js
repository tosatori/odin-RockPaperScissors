const game = () => {
    let playerScore = 0;
    let computerScore = 0;

     /** Function to play game */
     const playGame = () => {

     /**Add eventlistener to buttons */

     const btnScissors = document.querySelector("#btnScissors");
     btnScissors.addEventListener("click", () => {
         playRound("scissors");
     });
     const btnRock = document.querySelector("#btnRock");
     btnRock.addEventListener("click", () => {
         playRound("rock");
     });
     const btnPaper = document.querySelector("#btnPaper");
     btnPaper.addEventListener("click", () => {
         playRound("paper");
     });    

    /** Create  a div for messages, one for playerscore an one for computerscore*/

    const info = document.querySelector("#info");

    const message = document.createElement("div");
    message.classList.add("info");
    message.textContent = "Let's play a game!";

    info.appendChild(message);
    
    const pScore = document.createElement("div");
    pScore.classList.add("info");
    pScore.textContent = `Your Score: ${playerScore}`;

    info.appendChild(pScore);

    const cScore = document.createElement("div");
    cScore.classList.add("info");
    cScore.textContent = `Computer Score: ${computerScore}`;

    info.appendChild(cScore);

    /* Play one round. Print the winner on screen. */

    function playRound(choice) {
        let plyr = choice;
        let cmptr = getComputerChoice();
        if (checkChoice(plyr, cmptr)) {
            message.textContent = "It's a tie. Do it again!";
            return;
        } else {
        let winner = checkWinner(plyr, cmptr);
        if (winner === "player") {
            message.textContent = "You win! " + plyr + " beats " + cmptr + ".";
            playerScore++;
            pScore.textContent = `Your Score: ${playerScore}`;
            win();
            return;
        } else {
            message.textContent = "You loose! " + cmptr + " beats " + plyr + ".";
            computerScore++;
            cScore.textContent = `Computer Score: ${computerScore}`;
            win();
            return;
        }
        }
    }

    /* Computer players choice gets randomly picked */

    function getComputerChoice() {
        let num = Math.floor(Math.random() * 3) + 1;
        switch (num) {
            case 1:
                return "rock";
            case 2:
                return "paper";
            case 3:
                return "scissors";
        }
    }


    /**
    * Check if player and computer have made the same choice. If so return true.
    */
    function checkChoice(playerSelection, computerChoice) {
        return playerSelection === computerChoice ? true : false;
    }

    /**
    * Check who is the winner and return result.
    */
    function checkWinner(playerSelection, computerChoice){
        let p = playerSelection;
        let c = computerChoice;

        if (p === "rock" && c === "scissors" || p === "paper" && c === "rock" || p === "scissors" && c === "paper") {
            return "player";
        } else {
            return "computer";
        }
    }   
    /** Check if one of the players has reached a score of 5 wins */
    function win() {
        if (playerScore === 5) {
            message.textContent = "You are the winner! Congratulations!";
            clean();
        } else if (computerScore === 5) {
            message.textContent = "And once again we Computer beat the human! So long suckers!";
            clean();
        }
    }    
    /** After a winner is found, remove all buttons and the running score */
    
    function clean() {
        btnPaper.remove();
        btnRock.remove();
        btnScissors.remove();
        pScore.remove();
        cScore.remove();
    }
    }
 
    // Calling playGame function inside game
    playGame(); 
}
 
// Calling the game function
game();