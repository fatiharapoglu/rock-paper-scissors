


const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
const text = document.querySelector("#text");
const comp = document.querySelector("#comp");
const human = document.querySelector("#human");




let tie = "VAY ANASINI A TIE";
let computerWins = "pc sikti";
let playerWins = "aha anasını siktim onun";
let result;
let playerScore = 0;
let computerScore = 0;







    // for (let i=0 ; i<5 ; i++) {

    //     let result = playRound() 

    //     if (result == computerWins) {
    //         computerScore = computerScore + 1;
    //         console.log("Round:" , (i+1))
    //         console.log("Computer score:", computerScore)
    //         console.log("Player score:", playerScore)
            

    //     }

    //     else if (result == playerWins) {
    //         playerScore = playerScore + 1;
    //         console.log("Round:" , (i+1))
    //         console.log("Player score:", playerScore)
    //         console.log("Computer score:", computerScore)


    //     }


    //     else if (result == tie) {
    //         console.log ("this round: TIE")
    //         i = i - 1
    //     }


    // }

    // if (computerScore > playerScore) {
    //     console.log("BİLGİSAYAR ANANI SİKTİ ANANI XDXDXDXD LOW KÖPEK ")


    // }

    // else {
    //     console.log("HARD KAZANDIN TEBRİKLER")
    // }




btnRock.addEventListener('click', () => {
    
    playerChoice = "rock" ;
    console.log(playerChoice) ;
    result = playRound();
    const pResult = document.createElement("p");
    pResult.textContent = `${result} \n ` ;
    text.appendChild(pResult);

    if (result == computerWins) {
        computerScore = computerScore + 1;
    }

    else if (result == playerWins) {
        playerScore = playerScore + 1;
    }

    comp.textContent = `${computerScore}`
    human.textContent = `${playerScore}`

    if (computerScore == 5) {
        computerScore = 0;
        playerScore = 0;
        alert("BİLGİSAYAR ANANI SİKTİ ANANI XDXDXDXD LOW KÖPEK");
    
    }

    else if (playerScore == 5 ) {
        computerScore = 0;
        playerScore = 0;
        alert("HARD KAZANDIN TEBRİKLER");
    }



}
);



btnPaper.addEventListener('click', () => {
    
    playerChoice = "paper" ;
    console.log(playerChoice) ;
    result = playRound()
    const pResult = document.createElement("p");
    pResult.textContent = `${result} \n ` ;
    text.appendChild(pResult);

    if (result == computerWins) {
        computerScore = computerScore + 1;
    }

    else if (result == playerWins) {
        playerScore = playerScore + 1;
    }


    comp.textContent = `${computerScore}`
    human.textContent = `${playerScore}`

    if (computerScore == 5) {
        computerScore = 0;
        playerScore = 0;
        alert("BİLGİSAYAR ANANI SİKTİ ANANI XDXDXDXD LOW KÖPEK");
    
    }

    else if (playerScore == 5 ) {
        computerScore = 0;
        playerScore = 0;
        alert("HARD KAZANDIN TEBRİKLER");
    }

});




btnScissors.addEventListener('click', () => {
    
    playerChoice = "scissors" ;
    console.log(playerChoice) ;
    result = playRound()
    const pResult = document.createElement("p");
    pResult.textContent = `${result} \n ` ;
    text.appendChild(pResult);

    if (result == computerWins) {
        computerScore = computerScore + 1;
    }

    else if (result == playerWins) {
        playerScore = playerScore + 1;
    }

    comp.textContent = `${computerScore}`
    human.textContent = `${playerScore}`

    if (computerScore == 5) {
        computerScore = 0;
        playerScore = 0;
        alert("BİLGİSAYAR ANANI SİKTİ ANANI XDXDXDXD LOW KÖPEK");
    
    }

    else if (playerScore == 5 ) {
        computerScore = 0;
        playerScore = 0;
        alert("HARD KAZANDIN TEBRİKLER");
    }

});










const options = ["rock", "paper", "scissors"];

function getComputerChoice() { 
    let computerChoice = Math.floor(Math.random() * (options.length))
    computerPlays = options[computerChoice]
    return
}











function playRound() {

    getComputerChoice()

    if (computerPlays == playerChoice) {
        return tie;
    }

    else if (computerPlays == "rock" && playerChoice == "scissors") {
        return computerWins;
    }

    else if (computerPlays == "scissors" && playerChoice == "rock") {
        return playerWins;
    }

    else if (computerPlays == "paper" && playerChoice == "rock") {
        return computerWins;
    }  

    else if (computerPlays == "rock" && playerChoice == "paper") {
        return playerWins;
    }

    else if (computerPlays == "scissors" && playerChoice == "paper") {
        return computerWins;
    }

    else if (computerPlays == "paper" && playerChoice == "scissors") {
        return playerWins;
    }    


return
}
























// let computerScore = 0
// let playerScore = 0

// function game() {

//     for (let i=0 ; i<5 ; i++) {

//         let result = playRound() 

//         if (result == computerWins) {
//             computerScore = computerScore + 1;
//             console.log("Round:" , (i+1))
//             console.log("Computer score:", computerScore)
//             console.log("Player score:", playerScore)
            

//         }

//         else if (result == playerWins) {
//             playerScore = playerScore + 1;
//             console.log("Round:" , (i+1))
//             console.log("Player score:", playerScore)
//             console.log("Computer score:", computerScore)


//         }


//         else if (result == tie) {
//             console.log ("this round: TIE")
//             i = i - 1
//         }


//     }

//     if (computerScore > playerScore) {
//         console.log("BİLGİSAYAR ANANI SİKTİ ANANI XDXDXDXD LOW KÖPEK ")


//     }

//     else {
//         console.log("HARD KAZANDIN TEBRİKLER")
//     }

// }


// game()