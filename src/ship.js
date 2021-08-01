import { displayMissedShot, hitAudio, shipDestructionAudio } from "./controller";


import { player01, computer } from "./players";

export let winner = document.querySelector('.winner');
export let turn = document.querySelector('.turn');
export let overlay = document.querySelector(".gameboards span");
export let restartBtn = document.querySelector(".gameboards button")
let winAudio = new Audio ("sounds/win.wav")


export class Ship {
  constructor(locations, damage) {
    this.locations = locations;
    this.damage = damage;
  }
}

export let hit = function (player, coordinates) {
    for (let i = 0; i < player.ships.length; i++) {
        for (let j = 0; j < player.ships[i].locations.length; j++) {
            if (
                player.ships[i].locations[j][0] === coordinates[0] &&
                player.ships[i].locations[j][1] === coordinates[1]
            ) {                
                player.ships[i].damage.push(coordinates);
                pushToAllDamagedLocations(player, coordinates);
                
                
            } 
        }
    }

    if (!player.allDamagedLocations.includes(coordinates)) {
      
      pushToMissedShots(player, coordinates);
      displayMissedShot(player.name, coordinates)
      
      
    }
    
}




export function pushToAllShotLocations (player, coordinates) {
  player.allShotLocations.push(coordinates)
  pushToUniqueLocations(player, coordinates)
  
}

export function pushToUniqueLocations (player, coordinates) {
  if (!JSON.stringify(player.uniqueLocations).includes(coordinates)) {
    player.uniqueLocations.push(coordinates)
    
  } else {
    player.duplicateLocations.push(coordinates)
    
  }
  
}

export function checkForDups (player, coordinates) {
  if (JSON.stringify(player.duplicateLocations).includes(coordinates)) {
    return true
  }
}
  

export function pushToAllDamagedLocations(player, coordinates) {
  player.allDamagedLocations.push(coordinates);
}

let checker = (arr, target) => target.every(v => arr.includes(v));
export function pushToAllDamagedShips(player) {
  
  for (let i = 0; i < player.ships.length; i++) {
      let merged01 = [].concat.apply([], player.ships[i].damage);
      let merged02 = [].concat.apply([], player.ships[i].locations);
      if (checker(merged01, merged02)) {
        if (player.allDamagedShips.includes(player.ships[i])){
          continue
        } else {
          player.allDamagedShips.push(player.ships[i])
      }
    }
  }
}



export function showPlayerShipsLocations () {
    for (let i = 0; i < player01.ships.length; i++ ) {
      for (let j = 0; j < player01.ships[i].locations.length; j++ ) {
        let coords = document.querySelector(`.squarePL01[coordinates = "${player01.ships[i].locations[j]}"]`);
        coords.style.backgroundImage = "url('images/ship2.svg')";
        coords.style.backgroundRepeat = "no-repeat"
      }
    }
    
}

export function checkForDamagedLocations(player, coordinates) {
  for (let i = 0; i < player.ships.length; i++) {
    for (let j = 0; j < player.ships[i].locations.length; j++) {
      if (
        coordinates[0] === player.ships[i].damage[j][0] &&
        coordinates[1] === player.ships[i].damage[j][1] &&
        player.allDamagedLocations[j][0] === coordinates[0] &&
        player.allDamagedLocations[j][1] === coordinates[1]
      ) {
        return true;
      }
    }
    return false;
  }
}


export const pushToMissedShots = (player, coordinates) => {
    player.missedShots.push(coordinates);
};


export function checkWinner(firstPlayer, secondPlayer) {
    

    let firstPlayerDamagedShipsLength = firstPlayer.allDamagedShips.length;
    let secondPlayerDamagedShipsLength = secondPlayer.allDamagedShips.length;

    let firstPlayerTotalShipsLength = firstPlayer.ships.length;
    let secondPlayerTotalShipsLength = secondPlayer.ships.length;


    if (firstPlayerDamagedShipsLength < secondPlayerDamagedShipsLength
      && secondPlayerTotalShipsLength === secondPlayerDamagedShipsLength ) {
      hit = null;
      hitAudio.muted = true;
      shipDestructionAudio.muted = true;
      winner.style.display = "flex"
      turn.style.display = "none"
      overlay.style.display = "block"
      restartBtn.style.display = "block"
      winAudio.play()
      winAudio.loop = true
      return firstPlayer.name + " wins";

    } else if (firstPlayerDamagedShipsLength > secondPlayerDamagedShipsLength
      && firstPlayerTotalShipsLength === firstPlayerDamagedShipsLength) {
      hit = null;
      hitAudio.muted = true;
      shipDestructionAudio.muted = true;
      winner.style.display = "flex"
      turn.style.display = "none";
      overlay.style.display = "block"
      restartBtn.style.display = "block"
      winAudio.play()
      winAudio.loop = true
      return secondPlayer.name + " win";

    } else {
      winner.style.display = "none"
    }
}





