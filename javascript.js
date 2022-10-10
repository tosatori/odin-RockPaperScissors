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

/* Play one round. Print the winner on screen. */

function playRound(choice) {
    let plyr = choice;
    let cmptr = getComputerChoice();
    if (checkChoice(plyr, cmptr)) {
        alert("It's a tie. Do it again!")
        return "tie";
    } else {
        let winner = checkWinner(plyr, cmptr);
        if (winner === "player") {
            alert("You win! " + plyr + " beats " + cmptr + ".");
            return winner;
        } else {
            alert("You loose! " + cmptr + " beats " + plyr + ".");
            return winner;
        }
    }
}

/**
 *  Play a complete game of 5 rounds, keep track of the results and declare winner after 5 rounds.
 */
function game() {
    let plyr = 0;
    let cmptr = 0;
    for (let i = 0; i < 5; i++) {
       
        let round = playRound();
        if (round === "tie") {
            i--;
            continue;
        }
        round === "player" ? plyr++ : cmptr++;
    }
    if (plyr > cmptr) {
        alert("After five rounds you are the winner! Congratulations!")
    } else {
        alert("And once again we Computer beat the human! So long suckers!")
    }
}

/**Add eventlistener to buttons */

const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", () => {
    playRound("scissor");
});
const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", () => {
    playRound("rock");
});
const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", () => {
    playRound("paper");
});

game();