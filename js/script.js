// Constants and settings
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const text = document.querySelector("#text");
const playOneMore = document.querySelector(".box");
const comp = document.querySelector("#comp");
const human = document.querySelector("#human");
const buttons = document.querySelectorAll("button");
const modalWin = document.getElementById("uWin");
const modalLose = document.getElementById("uLose");
const spanWin = document.querySelector("#close-win");
const spanLose = document.querySelector("#close-lose");
const rockSFX = new Audio("./assets/rock.mp3");
const paperSFX = new Audio("./assets/paper.mp3");
const scissorsSFX = new Audio("./assets/scissors.mp3");

let tie;
let computerWins;
let playerWins;
let result;
let playerScore = 0;
let computerScore = 0;
rockSFX.volume = 0.2;

// Modal settings start
function openModalWin() {
    modalWin.style.display = "block";
}

spanWin.onclick = function () {
    modalWin.style.display = "none";
    const playAgain = document.createElement("p");
    playAgain.innerHTML = `<a href="index.html" class="play-again">Play Again?</a>`;
    playOneMore.appendChild(playAgain);
};

function openModalLose() {
    modalLose.style.display = "block";
}

spanLose.onclick = function () {
    modalLose.style.display = "none";
    const playAgain = document.createElement("p");
    playAgain.innerHTML = `<a href="index.html" class="play-again">Play Again?</a>`;
    playOneMore.appendChild(playAgain);
};

// Disabling buttons function
function disableButtons() {
    buttons.forEach((item) => {
        item.disabled = true;
    });
}

// Buttonworks / rock
btnRock.addEventListener("click", () => {
    playerChoice = "rock";
    rockSFX.play();
    result = playRound();
    const pResult = document.createElement("p");
    pResult.innerHTML = `${result} \n `;
    text.appendChild(pResult);
    if (result == computerWins) {
        computerScore = computerScore + 1;
    } else if (result == playerWins) {
        playerScore = playerScore + 1;
    }
    comp.innerHTML = `${computerScore}`;
    human.innerHTML = `${playerScore}`;
    if (computerScore == 5) {
        computerScore = 0;
        playerScore = 0;
        openModalLose();
        disableButtons();
    } else if (playerScore == 5) {
        computerScore = 0;
        playerScore = 0;
        openModalWin();
        disableButtons();
    }
});

// Buttonworks / paper
btnPaper.addEventListener("click", () => {
    playerChoice = "paper";
    paperSFX.play();
    result = playRound();
    const pResult = document.createElement("p");
    pResult.innerHTML = `${result} \n `;
    text.appendChild(pResult);
    if (result == computerWins) {
        computerScore = computerScore + 1;
    } else if (result == playerWins) {
        playerScore = playerScore + 1;
    }
    comp.innerHTML = `${computerScore}`;
    human.innerHTML = `${playerScore}`;
    if (computerScore == 5) {
        computerScore = 0;
        playerScore = 0;
        openModalLose();
        disableButtons();
    } else if (playerScore == 5) {
        computerScore = 0;
        playerScore = 0;
        openModalWin();
        disableButtons();
    }
});

// Buttonworks / scissors
btnScissors.addEventListener("click", () => {
    playerChoice = "scissors";
    scissorsSFX.play();
    result = playRound();
    const pResult = document.createElement("p");
    pResult.innerHTML = `${result} \n `;
    text.appendChild(pResult);
    if (result == computerWins) {
        computerScore = computerScore + 1;
    } else if (result == playerWins) {
        playerScore = playerScore + 1;
    }
    comp.innerHTML = `${computerScore}`;
    human.innerHTML = `${playerScore}`;
    if (computerScore == 5) {
        computerScore = 0;
        playerScore = 0;
        openModalLose();
        disableButtons();
    } else if (playerScore == 5) {
        computerScore = 0;
        playerScore = 0;
        openModalWin();
        disableButtons();
    }
});

// Computer choice function
const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * options.length);
    computerPlays = options[computerChoice];
}

// One round function
function playRound() {
    getComputerChoice();
    if (computerPlays == playerChoice) {
        tie = "IT'S A TIE!";
        return tie;
    } else if (computerPlays == "rock" && playerChoice == "scissors") {
        computerWins = "Computer plays ROCK: <br>Rock beats scissors, you lost this round. ";
        return computerWins;
    } else if (computerPlays == "scissors" && playerChoice == "rock") {
        playerWins = "Computer plays SCISSORS: <br>Rock beats scissors, you win this round. ";
        return playerWins;
    } else if (computerPlays == "paper" && playerChoice == "rock") {
        computerWins = "Computer plays PAPER: <br>Paper beats rock, you lost this round.";
        return computerWins;
    } else if (computerPlays == "rock" && playerChoice == "paper") {
        playerWins = "Computer plays ROCK: <br>Paper beats rock, you win this round.";
        return playerWins;
    } else if (computerPlays == "scissors" && playerChoice == "paper") {
        computerWins = "Computer plays SCISSORS: <br>Scissors beats paper, you lost this round.";
        return computerWins;
    } else if (computerPlays == "paper" && playerChoice == "scissors") {
        playerWins = "Computer plays PAPER: <br>Scissors beats paper, you win this round.";
        return playerWins;
    }
}
