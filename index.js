let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 1 / 3) {
        return 'rock';
    } else if (randomNumber <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let humanChoice;
    humanChoice = prompt('Enter rock, paper, or scissors: ').toLowerCase();
    while (
        humanChoice !== 'rock' &&
        humanChoice !== 'paper' &&
        humanChoice !== 'scissors'
    ) {
        humanChoice = prompt(
            'You entered an invalid choice. Enter rock, paper, or scissors: '
        );
    }
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie! Both of you selected " + humanChoice + '.');
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        console.log(
            'You win! ' + humanChoice + ' beats ' + computerChoice + '.'
        );
    } else {
        computerScore++;
        console.log(
            'You lose! ' + computerChoice + ' beats ' + humanChoice + '.'
        );
    }
}

function playGame() {
    let humanChoice;
    let computerChoice;
    for (let i = 0; i < 5; i++) {
        playRound(
            (humanChoice = getHumanChoice()),
            (computerChoice = getComputerChoice())
        );
    }
    if (humanScore > computerScore) {
        console.log('Congrats! You won the game! :)');
    } else {
        console.log('L + ratio, loser. :(');
    }
}
