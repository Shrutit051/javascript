const randomNumber = Math.floor(Math.random()*100 +1)


//const userInput = document.querySelector('guess')
const userInput = document.querySelector('#guessField');
const submitButton = document.querySelector('#subt')
const previousGuesses = document.querySelector('.guesses');
const guessesLeft=document.getAnimations('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParaser')
const p = document.createElement('p')

let prevGuess=[]
let playGame= true
let guessCount=1

if(playGame){
    submitButton.addEventListener('click', function(e){
        e.preventDefault(); 
        //prevents the form inputs fromt he user from going to the server
        //as we want to process the data on the client side
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a number between 1 and 100')
    } else if(guess<1){
        alert('enter a number greater than or equal to 1')
    } else if(guess>100){
        alert('enter a number less than or equal to 100')
    } else{
        prevGuess.push(guess)
        displayGuess(guess)
        if(guessCount===11){
            playGame=false
            displayMessage(`random number was ${randomNumber}`)
            endGame()
        } else{
            checkGuess(guess)
        }
        
    }
}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You guessed it right`)
        endGame()
    } else if( guess < randomNumber){
        displayMessage(`the number you guessed is less than the actual number`)

    } else{
        displayMessage(`the number you guessed is greater than the actual number`)
    }
}

function displayGuess(guess){
    userInput.value=''
    if(previousGuesses.innerHTML === ''){
        previousGuesses.innerHTML += `${guess}`
    } else{
        previousGuesses.innerHTML += `, ${guess}`
    }
    guessCount++
    guessesLeft.innerHTML = `${11-guessCount}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){

}

function newGame(){

}



