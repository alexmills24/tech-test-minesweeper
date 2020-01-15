const grid = document.getElementById("grid");
let mines = document.getElementById("mine-amount");
let gridSize = document.getElementById("grid-size");

startGame = () => {
  generateGrid();
};

generateGrid = () => {
  grid.innerHTML = "";
  for (let i = 0; i < 15; i++) {
    row = grid.insertRow(i);
    for (let j = 0; j < 15; j++) {
      cell = row.insertCell(j);
      cell.id = `cell-${i}-${j}`;
      cell.onclick = function () {
        clickCell(this);
      };
    }
  }
};