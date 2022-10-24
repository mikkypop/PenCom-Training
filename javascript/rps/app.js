// This function contains the game logic


/*
RPS GAME RULES
1. If you choose rock against scissors, you win.
2. If you choose paper against rock, you win.
3. If you choose scissors against paper, you win.
4. If you choose scissors against rock, you lose.
5. If you choose paper against scissors, you lose.
6. If you choose rock against paper, you lose.
*/


const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    const playGame = () => {

        // Here we just defined our buttons and options
        const rockButton = document.querySelector('.rock');
        const paperButton = document.querySelector('.paper');
        const scissorsButton = document.querySelector('.scissors');
        const playerOptions = [rockButton, paperButton, scissorsButton];
        const ComputerOptions = ['rock', 'paper', 'scissors'];

        // Function to begin the game
        // ForEach is used to implement a function to an array of elements each
        playerOptions.forEach(option => {
            option.addEventListener('Click', function () {
                const movesLeft = document.querySelector('.movesLeft');
                moves++;
                movesLeft.innerText = `Moves Left: ${10 - moves}`;
                // These two back ticks are known as
                // template literals
                // $ is used to identify an object in JS. It is an identifier

                const choiceNumber = Math.floor(Math.random() * 3);
                // equate Choice Number to computer choices as well.
                const computerChoice = computerOptions[choiceNumber];

                winner(this.innerText, computerChoice);
                // this refers to the keyword of an object

                if (moves == 10) {
                    gameOver(playerOptions, movesLeft);
                }
            });
            // This listens for any clicks on our buttons
            // The Math.floor() function always rounds down and returns 
            // the largest integer less than or equal to a given number.
        });


    }
    // Anything you pass into the bracket is a parameter
    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = result.querySelector('.player-count');
        const computerScoreBoard = result.querySelector('.computer-count');
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        // TO lovercase converts any string all to toLowerCase
        // Strict equal operator
        if (player === computer) {
            result.textContent = "It's a Tie"
        } else if (player == 'rock') {
            if (computer == 'paper') {
                result.textContent = 'The Computer won.';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'You won!'
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        } else if (player == 'scissors') {
            if (computer == 'rock') {
                result.textContent = 'The Computer wins';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = "You Won";
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        } else if (player == 'paper') {
            if (computer == 'scissors') {
                result.textContent = "The Computer Wins";
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = "You Won!";
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }

    // Function when the game is over
    const gameOver = (playerOptions, movesLeft) => {
        const chooseMoves = document.querySelector('.move');
        const result = document.querySelector
    }
}





