import { displayComputerTurn, 
  displayPlayerTurn, 
  destroyedComputerLocation, 
  displayWinner, 
  destroyedPlayerLocation } from "./controller.js";
import { hit, pushToAllDamagedShips, restartBtn,  pushToAllShotLocations, showPlayerShipsLocations, checkForDups } from "./ship.js";
import { computer, player01} from "./players.js"
import { beginGameLoop } from "./menu.js";
import { renderGameBoards } from "./gameboard";

const clickBtnAudio = new Audio ("sounds/clickButton.wav")

const newGameBtn = document.querySelector(".newGame");
const instructionsBtn = document.querySelector(".instructions");
const gameScreen = document.querySelector(".game");
const menuScreen = document.querySelector(".gameMenuScreen");
const instructionsPage = document.querySelector(".instructionsPage")
const menu = document.querySelector(".menu")

newGameBtn.addEventListener("click", () => {
  clickBtnAudio.play()
  gameScreen.style.display = "block";
  menuScreen.style.display = "none"
})

instructionsBtn.addEventListener("click", () => {
  clickBtnAudio.play()
  gameScreen.style.display = "none";
  menu.style.display = "none";
  instructionsPage.style.display = "flex";
})


renderGameBoards()
showPlayerShipsLocations()

let computerTurn = false;
  let player01Turn = true;
  
  
  let ComputerShipsCounter = () => {
    let computerCounter = 10;
    return () => --computerCounter;
  }
  
  
  let PlayerShipsCounter = () => {
    let playerCounter = 10;
    return () => --playerCounter;
  }
  
  export let decrementComputerShips = ComputerShipsCounter ();
  export let decrementPlayerShips = PlayerShipsCounter ();
    
  
  
  
  let winner = document.querySelector('.winner');
  winner.style.display = "none"
  export let player01Squares = document.querySelectorAll(".squarePL01");
  export let computerSquares = document.querySelectorAll(".squarePL02");
  export let computerShipsCount = document.querySelector(".computerShipsCount span")
  export let playerShipsCount = document.querySelector(".playerShipsCount span")
  
  
  player01Squares.forEach(square => {
    disablePointerEvents(square)
  })
  
  
  
  /* --------------------------------------------------------------------------------------- */
  //PLAYER 2 CONTROLS
  /*player01Squares.forEach( square => {
    square.addEventListener("click", (e) => {
      switchTurn();
      displayPlayerTurn();
      let coordinatesAttr = square.getAttribute("coordinates");
      let coordinates = stringToArray(coordinatesAttr)
      hit(player01, coordinates)
      if (player01.allDamagedLocations.includes(coordinates)) {
          destroyedPlayerLocation(coordinates)
      }
      pushToAllDamagedShips(player01)
      
      displayWinner(computer, player01)
      
    },  {once: true});
  });*/
  /* --------------------------------------------------------------------------------------- */
  
  
  
  export function playAi () {
    let randomNumber1 = Math.floor ( Math.random () * 10 );
    let randomNumber2 = Math.floor ( Math.random () * 10 );
    let coordinates = [randomNumber1, randomNumber2]
    let i = 0; 
    
    hit(player01, coordinates)  
    
    pushToAllShotLocations(player01, coordinates)
    if (checkForDups(player01, coordinates) ) {
  
      playAi()
    } else {
      if (player01.allDamagedLocations.includes(coordinates)) {
        destroyedPlayerLocation(coordinates)
        playerShipsCount.innerText = decrementPlayerShips();
      }
      
      pushToAllDamagedShips(player01)
      switchTurn();
      displayPlayerTurn();
      displayWinner(computer, player01)
    }
    
  }
  
  
  computerSquares.forEach( square => {
    square.addEventListener("click", (e) => {
      switchTurn();
      displayComputerTurn();
  
      let coordinatesAttr = square.getAttribute("coordinates");
      let coordinates = stringToArray(coordinatesAttr)
      
      hit(computer, coordinates)
      if (computer.allDamagedLocations.includes(coordinates)) {
          destroyedComputerLocation(coordinates)
          computerShipsCount.innerText = decrementComputerShips();
      }
  
      pushToAllDamagedShips(computer)
      
      displayWinner(computer, player01)
      
    }, {once: true});
  })
  
  
  
  function switchTurn() {
    if (player01Turn === true) {
      player01Turn = false;
      computerTurn = true;
      player01Squares.forEach(square => {
        enablePointerEvents(square)
      });
      computerSquares.forEach(square=>{
        disablePointerEvents(square)
      })
  
      setTimeout(playAi, 1000)
      
    } else if ( computerTurn === true) {
      player01Turn = true;
      computerTurn = false;
      player01Squares.forEach(square => {
        disablePointerEvents(square)
      });
      computerSquares.forEach(square=>{
        enablePointerEvents(square)
      })
    }
  }
  
  function stringToArray (str) {
      let chars = str.split(",");
      let arr = chars.map(char => {
          return parseInt(char)
      })
      return arr
  }
  
  
  restartBtn.addEventListener("click", () => {
    window.location.reload()
  })
  
  function disablePointerEvents (square) {
    square.style.pointerEvents = "none"
  }
  
  function enablePointerEvents (square) {
    square.style.pointerEvents = "auto"
  }