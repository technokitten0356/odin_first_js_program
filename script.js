const gameOptions = ["Rock", "Papar", "Scissors"]

let playerChoice = playerPrompt()

let playerWin = false
let computerWin = false

let playerScore = 0
let computerScore = 0

function playerPrompt(){
    let playerInput = prompt("Rock, Paper, or Scissors?")
    return playerInput
}

console.log(playerChoice)

