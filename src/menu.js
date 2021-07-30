import { renderGameBoards } from "./gameboard";
import { showPlayerShipsLocations} from "./ship"

const body = document.querySelector("body")

export function beginGameLoop () {

    renderGameBoards();
    showPlayerShipsLocations ()

}



