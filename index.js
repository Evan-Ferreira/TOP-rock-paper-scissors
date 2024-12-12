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
    humanChoice = prompt('Enter rock, paper, or scissors: ');
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
