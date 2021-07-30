
import { checkWinner, turn, winner } from "./ship";
import { computer, player01 } from "./players";

export let hitAudio = new Audio('sounds/hit.wav');
export let shipDestructionAudio = new Audio('sounds/shipDestroyed.wav');



function displayPlayerTurn () {
    turn.innerText = "Your turn";
    turn.style.color = "rgb(1, 123, 236)"
}

function displayComputerTurn () {
    turn.innerText = "Computer's turn"
    turn.style.color = "rgb(228, 7, 37)"
}

function destroyedComputerLocation (coordinate) {
    let coords = document.querySelector(`.squarePL02[coordinates = "${coordinate}"]`);
    coords.innerText = "X"
    coords.style.color = "rgb(1, 123, 236)";
    coords.style.borderColor = "#000"
    coords.style.backgroundImage = "url('images/ship1.svg')";
    coords.style.backgroundRepeat = "no-repeat"
    
    shipDestructionAudio.play();
}

function destroyedPlayerLocation (coordinate) {
    let coords = document.querySelector(`.squarePL01[coordinates = "${coordinate}"]`);
    coords.innerText = "X"
    coords.style.color = "rgb(228, 7, 37)";
    coords.style.borderColor = "#000"
    shipDestructionAudio.play();
}

function displayWinner (firstPlayer, secondPlayer) {
    winner.innerText = checkWinner(firstPlayer, secondPlayer)
    winner.style.color = "rgb(0, 255, 50)"
    
}



function displayMissedShot (player, coordinates) {
    let playerMissedShotCoords = document.querySelector(`.squarePL02[coordinates = "${coordinates}"]`);
    let computerMissedShotCoords = document.querySelector(`.squarePL01[coordinates = "${coordinates}"]`);
    
    if (player === computer.name) {
        playerMissedShotCoords.style.background = "none"
        playerMissedShotCoords.style.backgroundSize = "50px"
        playerMissedShotCoords.style.backgroundImage = "url('images/wave.jpg')";
        playerMissedShotCoords.style.backgroundRepeat = "no-repeat"
        hitAudio.play()
    } else if (player === player01.name) {
        computerMissedShotCoords.style.background = "none"
        computerMissedShotCoords.style.backgroundSize = "50px"
        computerMissedShotCoords.style.backgroundImage = "url('images/wave.jpg')";
        computerMissedShotCoords.style.backgroundRepeat = "no-repeat"
        hitAudio.play()
    }
}

export {displayComputerTurn,
    displayPlayerTurn, 
    destroyedComputerLocation,
    displayWinner, 
    destroyedPlayerLocation,
    displayMissedShot,
    
}