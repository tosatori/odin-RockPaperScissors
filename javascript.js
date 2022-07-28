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

/* Let player type in its choice */

function getPlayerChoice() {
    let input = prompt("Please Enter your choice: ").toLowerCase();
    return input;
}

