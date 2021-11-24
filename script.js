
// make a function computerPlay() that will randomly return rock, paper, or scissors
const computerPlay = () => {
    let num = Math.floor(Math.random() * 3)
    if(num === 0){
        return 'rock'
    } else if(num === 1){
        return 'paper'
    } else {
        return 'scissors'
    }
}
console.log(computerPlay())

// make a function that plays a round() of the game
    // should take two parameters playerSelection and computerSelection
        // playerSelection should be case-insensitive
    //  return a rounnd poinnt to an appropriate variable
let playerScore = 0
let computerScore = 0
const round = (playerSelection, computerSelection) => {
    playerSelection = prompt("Rock, Paper, or Scissors?")
    computerSelection = computerPlay()
    let playerChoice = playerSelection.toLowerCase()
    if(playerChoice == 'rock' && computerSelection == 'scissors'){
        return playerScore++
    } else if(playerChoice === 'scissors' && computerSelection === 'paper'){
        return playerScore++
    } else if(playerChoice === 'paper' && computerSelection === 'rock'){
        return playerScore++    
    } else if(playerChoice === 'rock' && computerSelection === 'paper'){
        return computerScore++
    } else if(playerChoice === 'paper' && computerSelection === 'scissors'){
        return computerScore++
    } else if(playerChoice === 'scissors' && computerSelection === 'rock'){
        return computerScore++      
    } else if(playerChoice === computerSelection){
        console.log('Tie Round')
    } else {
        console.log('Invalid choice, try again.')
    }             
}

// make a new function called game() that 
// plays 5 rounds, 
// keeps score, and 
// reports a winner or loser at the end
    // use console.log() to declare the winner

const game = () => {
    for(i = 0; i <= 5; i++){
        round()
        console.log(`Computer: ${computerScore}, Player: ${playerScore}`)
    }
    if(computerScore > playerScore){
        console.log('Computer Wins!')
    } else if(computerScore < playerScore){
        console.log('Player wins!') 
    }       
}
game()
