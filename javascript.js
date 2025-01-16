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
    if(humanChoice === 'Rock'){
        if(computerChoice === 'Rock'){
            console.log('Its a tie!');
            return('Tie');
        }
        else if(computerChoice === 'Paper'){
            console.log('You lose! Paper beats Rock');
            return('Computer Wins');
        }
        else if(computerChoice === 'Scissors'){
            console.log('You win! Rock beats Scissors');
            return('Human Wins');
        }
    }
    else if(humanChoice === 'Paper'){
        if(computerChoice === 'Rock'){
            console.log('You win! Paper beats Rock');
            return('Human Wins');
        }
        else if(computerChoice === 'Paper'){
            console.log('Its a tie!');
            return('Tie');
        }
        else if(computerChoice === 'Scissors'){
            console.log('You lose! Scissors beats Paper');
            return('Computer Wins');
        }
    }
    else if(humanChoice === 'Scissors'){
        if(computerChoice === 'Rock'){
            console.log('You lose! Rock beats Scissors');
            return('Computer Wins');
        }
        else if(computerChoice === 'Paper'){
            console.log('You win! Scissors beats Paper');
            return('Human Wins');
        }
        else if(computerChoice === 'Scissors'){
            console.log('Its a tie!');
            return('Tie');
        }
    }
}

function playGame(){

    let humanScore = 0;
    let computerScore = 0;

    for(let i = 1; i < 6; i++){

        console.log('Round ' + i);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(humanChoice, computerChoice);
        if (result === 'Computer Wins'){
            computerScore =+ 1
        }
        else if (result === 'Human Wins'){
            humanScore =+ 1
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