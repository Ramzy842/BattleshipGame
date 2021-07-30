
export let gameboard1 = [];
export let gameboard2 = [];

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    gameboard1.push([i, j]);
    gameboard2.push([i, j]);
  }
}

export function renderGameBoards() {
  
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let squarePL01 = document.createElement("div");
      squarePL01.setAttribute("coordinates", [i, j]);
      squarePL01.classList.add("squarePL01");
      document.querySelector(".gameboard01").appendChild(squarePL01);
      
    }
  }

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      let squarePL02 = document.createElement("div");
      squarePL02.setAttribute("coordinates", [i, j]);
      squarePL02.classList.add("squarePL02");
      document.querySelector(".gameboard02").appendChild(squarePL02);
    }
  }

  
}
