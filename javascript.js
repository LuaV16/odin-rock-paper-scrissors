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


console.log(getComputerChoice());