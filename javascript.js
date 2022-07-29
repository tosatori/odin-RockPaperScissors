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

