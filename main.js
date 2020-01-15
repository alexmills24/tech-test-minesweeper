const grid = document.getElementById("grid");
let mines = 30;
let gridSize = 15;

const startGame = () => {
  generateGrid();
};

const generateGrid = () => {
  grid.innerHTML = "";
  for (let i = 0; i < 15; i++) {
    row = grid.insertRow(i);
    for (let j = 0; j < 15; j++) {
      cell = row.insertCell(j);
      cell.id = `cell-${i}-${j}`;
      let mine = document.createAttribute("data-mine");
      mine.value = "false";
      cell.setAttributeNode(mine);
    }
  }
  addMines();
  revealMines();
};

const addMines = () => {
  let minesPlaced = 0;
  while (minesPlaced < mines) {
    let row = Math.floor(Math.random() * gridSize);
    let column = Math.floor(Math.random() * gridSize);
    let cell = grid.rows[row].cells[column];
    if (cell.getAttribute("data-mine") === "false") {
      cell.setAttribute("data-mine", "true");
      minesPlaced++;
    }
  }
};

const revealMines = () => {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let cell = grid.rows[i].cells[j];
      if (cell.getAttribute("data-mine") === "true") cell.className = "mine";
    }
  }
};

// revealClues = () => {
//   if (cell.getAttribute("data-mine") === "true") {
//     //counts and displays the number of adjacent mines
//     let mineCount = 0;
//     let cellRow = cell.parentNode.rowIndex;
//     let cellColumn = cell.cellIndex;
//     for (
//       let i = Math.max(cellRow - 1, 0);
//       i <= Math.min(cellRow + 1, gridSize - 1);
//       i++
//     ) {
//       for (
//         let j = Math.max(cellColumn - 1, 0);
//         j <= Math.min(cellColumn + 1, gridSize - 1);
//         j++
//       ) {
//         if (grid.rows[i].cells[j].getAttribute("data-mine") == "true")
//           mineCount++;
//       }
//     }
//     cell.innerHTML = mineCount;
//   }
// };
