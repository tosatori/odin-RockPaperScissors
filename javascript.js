/* Computer players choice gets randomly picked */

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    switch (num) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissor";
    }
}

/** Let player type in its choice. Make sure input is valid, if not repeat process. 
 * Return players choice in all lower case letters */

function getPlayerChoice() {
    while(true) {
        let input = prompt("Please Enter your choice: ").toLowerCase();
            if (input === "rock" || input === "paper" || input === "scissor") {
                return input;
            } else {
                window.alert("Something went wrong. Please make sure to only choose between Rock, Paper and Scissor.");
                }
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

    if (p === "rock" && c === "scissors" || p === "paper" && c === "rock" || p === "scissor" && c === "paper") {
        return "player";
    } else {
        return "computer";
    }
}

/* play one round */

function playRound(playerSelection, computerChoice) {
    let plyr = getPlayerChoice();
    let cmptr = getComputerChoice();
    if (checkChoice(plyr, cmptr)) {
        return "tie";
    } else {
        return checkWinner(plyr, cmptr);
    }
}


let test = getComputerChoice();
console.log(test);

let test2 =getPlayerChoice();
console.log(test2);

let test3 = checkChoice(test, test2);

let test4 = checkWinner(test, test2);

let test5 = playRound(test, test2);