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

function playRound(playerSelection, computerSelection){
    console.log(`Player choice is ${playerChoice}, computer choice is ${computerChoice}`)
    if (playerSelection === computerSelection){
        playerWin = false
        computerWin = false
        console.log(`It's a tie!`)
    } else if (playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" ||playerSelection === "Scissors" && computerSelection === "Paper"){
        playerWin = true
        computerWin = false
        console.log(`You win this round! ${playerSelection} beats ${computerSelection}!`)
    } else if (playerSelection === "Scissors" && computerSelection === "Rock" || playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Scissors"){
        playerWin = false
        computerWin = true
        console.log(`You lose this round! ${computerSelection} beats ${playerSelection}!`)
    }
}

function keepingScore(){
    if (playerWin === true && computerWin === false){
        playerScore += 1
    } else if (playerWin === false && computerWin === true){
        computerScore += 1
    }
    console.log(`Player score: ${playerScore}. Computer score: ${computerScore}`)
}

function reset(){
    playerChoice = playerPrompt()
    computerChoice = computerPlay()
}

function game(){
    let i = 0;

    while (i < 4){
        playRound(playerChoice, computerChoice)
        keepingScore()
        reset()
        i++
    }
    
    if (playerScore > computerScore){
        console.log(`You win! Computer loses!`)
    } else if (computerScore > playerScore){
        console.log(`You lose! Computer wins!`)
    }
}

game()