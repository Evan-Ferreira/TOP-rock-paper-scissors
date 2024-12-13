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
    const pscore = document.querySelector('#pscore');
    const cscore = document.querySelector('#cscore');
    const ptext = pscore.textContent;
    const ctext = cscore.textContent;
    const h4 = document.querySelector('h4');
    if (humanChoice === computerChoice) {
        h4.textContent =
            "It's a tie! Both of you selected " + humanChoice + '.';
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        h4.textContent =
            'You win! ' + humanChoice + ' beats ' + computerChoice + '.';
        pscore.textContent = String(Number(ptext) + 1);
    } else {
        computerScore++;
        h4.textContent =
            'You lose! ' + computerChoice + ' beats ' + humanChoice + '.';
        cscore.textContent = String(Number(ctext) + 1);
    }
}

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    playRound('rock', computerChoice);
});

paper.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    playRound('paper', computerChoice);
});

scissors.addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    playRound('scissors', computerChoice);
});
