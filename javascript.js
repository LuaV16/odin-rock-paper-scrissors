/* 
Create a random int number between 1 and 3
Create an If condition
If the number is 1, return 'rock'
If the number is 2, return 'paper'
If the number is 3, return 'scissors'
*/


function getComputerChoice(){
    let number = Math.floor(Math.random() * 3 + 1);
    if(number === 1){
        return('Rock');
    }
    else if(number === 2){
        return('Paper');
    }
    else if(number === 3){
        return('Scissors');
    }
}

/*
Create a variable and declare it as the user imput
Create an If condition
If the user writes 'Rock', return 'Rock'
If the user writes 'Paper', return 'Paper'
If the user writes 'Scissors', return 'Scissors'
If the user writes something else, return a warning
*/

function getHumanChoice(){
    let answer = prompt('Rock, paper, scissors?');
    answer = answer.toLowerCase();
    if(answer === 'rock'){
        return('Rock');
    }
    else if(answer === 'paper'){
        return('Paper');
    }
    else if(answer === 'scissors'){
        return('Scissors');
    }
    else{
        return('Invalid answer')
    }
}

function playRound(humanChoice, computerChoice){
    let rock = "Rock";
    let paper = "Paper";
    let scissors = "Scissors";
    let win = "Win";
    let lose = "Lose";
    let tie = "Tie";
    let rockDictionary = {
        [scissors]: win,
        [paper]: lose,
        [rock]: tie,
    }
    let paperDictionary = {
        [scissors]: lose,
        [paper]: tie,
        [rock]: win,
    }
    let scissorsDictionary = {
        [scissors]: tie,
        [paper]: win,
        [rock]: lose,
    }
    let rockPaperScissors = {
        [rock]: rockDictionary,
        [paper]: paperDictionary,
        [scissors]: scissorsDictionary,
    }

    let additionalResponse = "";

    if (rockPaperScissors[`${humanChoice}`][`${computerChoice}`] === win){
        additionalResponse = humanChoice + " beats " + computerChoice + "!";
    }
    else if(rockPaperScissors[`${humanChoice}`][`${computerChoice}`] === lose){
        additionalResponse = computerChoice + " beats " + humanChoice + "!";
    }
    
    console.log("You " + rockPaperScissors[`${humanChoice}`][`${computerChoice}`] + "! " + additionalResponse);
    
    return(rockPaperScissors[humanChoice][computerChoice]);
}

function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    for(let i = 1; i < 6; i++){

        console.log('Round ' + i);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        if (result === 'Lose'){
            computerScore += 1
        }
        else if (result === 'Win'){
            humanScore += 1
        }
    }

    if (humanScore > computerScore){
        console.log('You win!')
    }
    else if (humanScore < computerScore){
        console.log('You lose')
    }
    else  {
        console.log('Its a tie!');
    }
}


playGame();