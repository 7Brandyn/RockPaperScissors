let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function disableButtons() {
    buttons.forEach(e => {
        e.disabled = true
    })
}

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (playerScore == 10) {
            result += "You win!";
            disableButtons();
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('Tiebreaker! ' + playerSelection
            + "<br>Player score: " + playerScore + "<br>Computer score: " + computerScore);
    }
    else {
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (computerScore == 10) {
            result += 'You lose!'
            disableButtons()
        }
    }

    // document.getElementById('playScore').innerHTML = playerScore
    // document.getElementById('cpuScore').innerHTML = computerScore
    document.getElementById('result').innerHTML = result
    return
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})