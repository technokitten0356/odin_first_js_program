const gameOptions = ["Rock", "Paper", "Scissors"]

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

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        playerWin = false
        computerWin = false
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" ||playerSelection === "Scissors" && computerSelection === "Paper"){
        playerWin = true
        computerWin = false
    } else if (playerSelection === "Scissors" && computerSelection === "Rock" || playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Scissors"){
        playerWin = false
        computerWin = true
    }

    console.log(playerWin)
    console.log(computerWin)

    if (playerWin === true && computerWin === false){
        playerScore += 1
        computerScore = computerScore
        return `Player score is ${playerScore}. Computer score is ${computerScore}. You win this round! ${playerSelection} beats ${computerSelection}!`
    } else if (playerWin === false && computerWin === true){
        playerScore = playerScore
        computerScore += 1
        return `Player score is ${playerScore}. Computer score is ${computerScore}. You lose this round! ${computerSelection} beats ${playerSelection}!`
    } else if (playerWin === false && computerWin === false){
        return `It's a tie!`
    }

    //playerPrompt()

    console.log(playerScore)
    console.log(computerScore)
    
}

console.log(playRound(playerChoice, computerPlay()))