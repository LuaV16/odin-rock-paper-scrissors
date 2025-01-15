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
    if(answer === 'Rock' || answer === 'rock'){
        return('Rock');
    }
    else if(answer === 'Paper' || answer === 'paper'){
        return('Paper');
    }
    else if(answer === 'Scissors' || answer === 'scissors'){
        return('Scissors');
    }
    else{
        return('Invalid answer')
    }
}


console.log(getHumanChoice());