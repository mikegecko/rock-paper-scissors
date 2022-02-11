

let playerSelection = "";
let computerSelection = "";
const options = ["rock","paper","scissors"];
let playerScore = 0;
let computerScore = 0;


const buttons = document.querySelectorAll('#btn'); //Selects all buttons
//Now we need to add event listeners to each button
buttons.forEach(element => {
    element.addEventListener('click', function(e) {
        //I feel like this isnt the best or most secure method of retrieving the button text
        let outcome = playRound(e.target.innerText, computerPlay());
        tally(outcome);
    })
});

function tally(outcome){
    if(outcome == -1){

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
function playRound(playerSelection,computerSelection){
    
    playerSelection = playerSelection.toLowerCase();
    console.log("P:",playerSelection ,"C:", computerSelection);
       
    if(playerSelection.localeCompare("rock") == 0){
        if(computerSelection.localeCompare("rock")){
            return(-1);
        }
        else if(computerSelection.localeCompare("paper")){
            return(0);
        }
        else if(computerSelection.localeCompare("scissors")){
            return(1);
        }
    } 
    else if(playerSelection.localeCompare("paper") == 0){
        if(computerSelection.localeCompare("rock")){
            return(1);
        }
        else if(computerSelection.localeCompare("paper")){
            return(-1);
        }
        else if(computerPlaycomputerPlay.localeCompare("scissors")){
            return(0);
        }
    }
    else if(playerSelection.localeCompare("scissors") == 0){
        if(computerSelection.localeCompare("rock")){
            return(0);
        }
        else if(computerSelection.localeCompare("paper")){
            return(1);
        }
        else if(computerSelection.localeCompare("scissors")){
            return(-1);
        }
    }
    else{
        return("An error occurred");
    }
    return("this is bad");
}