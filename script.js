const gameOptions = ["Rock", "Papar", "Scissors"]

let playerChoice = playerPrompt()

let playerWin = false
let computerWin = false

let playerScore = 0
let computerScore = 0

function playerPrompt(){
    let playerInput = prompt("Rock, Paper, or Scissors?")
    return playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase()
}

console.log(playerChoice)

function computerPlay(){
    return gameOptions[Math.floor(Math.random() * gameOptions.length)]
}

console.log(computerPlay())