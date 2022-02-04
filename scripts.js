

let playerSelection = "";
let computerSelection = "";
const options = ["rock","paper","scissors"];


game();
console.log("Game ended");
function game(){
    let wins = 0;
    let losses = 0;
    for(let i=1; i<=5; i++){
        
        playerSelection = prompt("Please choose rock, paper or scissors:"); 
        computerPlay();
        let result = playRound(playerSelection,computerSelection);
        console.log("The result of the round is:", result );

        if(result.localeCompare("You Win!") == 0){
            wins++;
        }
        else if(result.localeCompare("You Lose!") == 0){
            losses++;
        }
        else if(result.localeCompare("You Tie!") == 0){
            i--;
        }
        
    }
    if(wins > losses){
        console.log("You won the match!");
    }
    else if(wins < losses){
        console.log("You lost the match!");
    }
    else if(wins == losses){
        console.log("huh");
    }
    


    
}

function computerPlay(){
    
    let hold = options[getRandomInt(0,3)];
    computerSelection = hold;
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
function playRound(playerSelection,computerSelection){
    
    playerSelection = playerSelection.toLowerCase();
    console.table(playerSelection , computerSelection);
       
    if(playerSelection.localeCompare("rock") == 0){
        if(computerSelection.localeCompare("rock")){
            return("You Tie!");
        }
        if(computerSelection.localeCompare("paper")){
            return("You Lose!");
        }
        if(computerSelection.localeCompare("scissors")){
            return("You Win!");
        }
    } 
    else if(playerSelection.localeCompare("paper") == 0){
        if(computerSelection.localeCompare("rock")){
            return("You Win!");
        }
        if(computerSelection.localeCompare("paper")){
            return("You Tie!");
        }
        if(computerPlaycomputerPlay.localeCompare("scissors")){
            return("You Lose!");
        }
    }
    else if(playerSelection.localeCompare("scissors") == 0){
        if(computerSelection.localeCompare("rock")){
            return("You Lose!");
        }
        if(computerSelection.localeCompare("paper")){
            return("You Win!");
        }
        if(computerSelection.localeCompare("scissors")){
            return("You Tie!");
        }
    }
    else{
        return("An error occurred");
    }
    return("this is bad");
}