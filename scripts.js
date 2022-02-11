

let playerSelection = "";
let computerSelection = "";
const options = ["rock","paper","scissors"];
let playerScore = 0;
let computerScore = 0;
let ties = 0;


const buttons = document.querySelectorAll('#btn'); //Selects all buttons
//Now we need to add event listeners to each button
buttons.forEach(element => {
    element.addEventListener('click', function(e) {
        //I feel like this isnt the best or most secure method of doing this
        (playRound(e.target.innerText));
        
    })
});
//This function broke AF and idk why
function tally(arg1){
    let outcome = arg1;
    if(playerScore < 5 && computerScore < 5){

        if(outcome == 2){
            ties++;
            console.log("P:", playerScore,"C:",computerScore);
            return;
        }
        if(outcome == 0){
            computerScore++;
            console.log("P:", playerScore,"C:",computerScore);
            return;
        }
        if(outcome == 1){
            playerScore++;
            console.log("P:", playerScore,"C:",computerScore);
            return;
        }
    }
    else{
        
        if(computerScore == 5){
            alert("You Lost!");
            playerScore = 0;
            computerScore = 0;
            ties = 0;
            return;
        }
        else if(playerScore == 5){
            alert("You Won!");
            playerScore = 0;
            computerScore = 0;
            ties = 0;
            return;
        }
    }
        
    
}


function computerPlay(){
    
    let hold = options[getRandomInt(0,3)];
    computerSelection = hold;
    return(hold);
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
//Rules are the following: 2 for a tie, 0 for a loss, 1 for a win
function playRound(playerSelection){
    computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();
    console.log("P:", playerScore,"C:",computerScore);
    console.log("P:",playerSelection ,"C:", computerSelection);
    
       
    if(playerSelection.localeCompare("rock") == 0){
        if(computerSelection.localeCompare("rock")== 0){
            console.log("Tie!");
            ties++;
            return;
        }
        if(computerSelection.localeCompare("paper")== 0){
            computerScore++;
            return;
        }
        if(computerSelection.localeCompare("scissors")== 0){
            playerScore++;
            return;
        }
    } 
    if(playerSelection.localeCompare("paper") == 0){
        if(computerSelection.localeCompare("rock")== 0){
            playerScore++;
            return;
        }
        if(computerSelection.localeCompare("paper")== 0){
            console.log("Tie!");
            ties++;
            return;
        }
        if(computerSelection.localeCompare("scissors")== 0){
            computerScore++;
            return;
        }
    }
    if(playerSelection.localeCompare("scissors") == 0){
        if(computerSelection.localeCompare("rock")== 0){
            computerScore++;
            return;
        }
        if(computerSelection.localeCompare("paper")== 0){
            playerScore++;
            return;
        }
        if(computerSelection.localeCompare("scissors")== 0){
            console.log("Tie!");
            ties++;
            return;
        }
    }
    else{
        return("An error occurred");
    }
    return("this is bad");
}