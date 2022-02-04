

let playerSelection = "";
let computerSelection = "";
const options = ["rock","paper","scissors"];

function computerPlay(){
    
    computerSelection = options[getRandomInt(0,2)];
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
function playRound(playerSelection,computerSelection){
    playerSelection = prompt("Please choose rock, paper or scissors:");
    playerSelection = playerSelection.toLowerCase();
    computerPlay();
    switch(playerSelection)
    {
        case "rock":
            if(computerPlay == options[0]){
                return("You Tie!")
            }
            if(computerPlay == options[1]){
                return("You Lose!")
            }
            if(computerPlay == options[2]){
                return("You Win!")
            }
            
        }
        case "scissors":


        



    }


}

console.log(playRound(playerSelection,computerSelection));