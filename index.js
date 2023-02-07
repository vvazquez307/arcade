// variables
const board = document.querySelector("#board")
const cell = document.querySelector(".input_box")
const gameState = {
    players: ['x', 'o'],
    board: [
      [null ,null, null],
      [null, null, null],
      [null, null, null]
    ]
  }
console.log(cell)
//   listeners
board.addEventListener('click', clickedCell)

//   functions
function clickedCell(event){
    console.log(event.target)
    console.log("click")
}


