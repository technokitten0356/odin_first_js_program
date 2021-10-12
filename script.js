const gameOptions = ["Paper", "Rock", "Scissors"]

let playerChoice = playerPrompt()
let computerChoice = computerPlay()

let playerWin = false
let computerWin = false

let playerScore = 0
let computerScore = 0

function playerPrompt(){
    let playerInput = prompt("Rock, Paper, or Scissors?")
    return playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase()
}

function computerPlay(){
    return gameOptions[Math.floor(Math.random() * gameOptions.length)]

}

// ------------------------------------------------------------------//

function playRound(playerSelection, computerSelection){
    console.log(`Player choice is ${playerChoice}, computer choice is ${computerChoice}`)
    if (playerSelection === computerSelection){
        playerWin = false
        computerWin = false
        console.log(`playerWin is ${playerWin} and computerWin is ${computerWin}`)
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" ||playerSelection === "Scissors" && computerSelection === "Paper"){
        playerWin = true
        computerWin = false
        console.log(`playerWin is ${playerWin} and computerWin is ${computerWin}`)
        return `You win this round! ${playerSelection} beats ${computerSelection}!`
    } else if (playerSelection === "Scissors" && computerSelection === "Rock" || playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Scissors"){
        playerWin = false
        computerWin = true
        console.log(`playerWin is ${playerWin} and computerWin is ${computerWin}`)
        return `You lose this round! ${computerSelection} beats ${playerSelection}!`
    }
}

playRound(playerChoice, computerChoice)

function reset(){
    playerChoice = playerPrompt()
    computerChoice = computerPlay()
}

function game(){
    playRound(playerChoice, computerChoice)
    reset()
    playRound(playerChoice, computerChoice)
    reset()
    playRound(playerChoice, computerChoice)
    reset()
    playRound(playerChoice, computerChoice)
    reset()
    playRound(playerChoice, computerChoice)

    if (playerScore > computerScore){
        console.log(`You win! Computer loses!`)
    } else if (computerScore > playerScore){
    console.log(`You lose! Computer wins!`)
    }
}

game()