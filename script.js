'use strict';

let secretNumber = Math.trunc(Math.random()* 20) + 1 
// document.querySelector('.number').textContent = secretNumber
let defaultScore = 20;
let highScore = 0;

const displayMessage = function (message){
    document.querySelector('.message').textContent = message
}

const displayScore = function (score){
    document.querySelector('.score').textContent= score
}

const dsiplayNumber = function (num){
    document.querySelector('.number').textContent = num
}

console.log(secretNumber)
document.querySelector('.check').addEventListener('click', function(){
    const gs = Number(document.querySelector('.guess').value)

    if(!gs){
        displayMessage('please enter a number...')
    }else if(gs === secretNumber){
        dsiplayNumber(secretNumber)
        displayMessage('😍Yay! correct answer...')
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        if(defaultScore > highScore){
            highScore = defaultScore
            document.querySelector('.highscore').textContent = highScore;
        }
    }else if (gs > secretNumber){
        if(defaultScore > 1){
            displayMessage('😱Too high! \n  You lost a point 😢')
            defaultScore--;
            displayScore(defaultScore)
        }else{
            displayMessage('You lost the game 😢')
            displayScore(0)
        }   
        
    }else if (gs < secretNumber){
        if(defaultScore > 1){
            displayMessage('😒Too  low! \n  You lost a point 😢')
            defaultScore--;
            displayScore(defaultScore)
        }else{
            displayMessage('You lost the game 😢')
            displayScore(0)
        }   
    }
})

document.querySelector('.again').addEventListener('click', function(){
    defaultScore = 20
    secretNumber = Math.trunc(Math.random()* 20) + 1 
    document.querySelector('.guess').value = ''
    displayScore(defaultScore)
    document.querySelector('.number').style.width = '15rem'
    dsiplayNumber('?')
    document.querySelector('body').style.backgroundColor = '#222'
    displayMessage('Start guessing...')

})