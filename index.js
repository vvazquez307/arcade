// variables
const board = document.getElementById("board")
const player1 = "x"
const player2 = "o"
let turn_display = document.querySelector("#player_turn_display")
const gameState = {
    players: ['x', 'o'],
    board: [
      [null ,null, null],
      [null, null, null],
      [null, null, null]
    ]
  }

function render(){
    for(let i = 0; i < 9; i++){
        let cell = document.createElement("div")
        board.appendChild(cell)
        cell.className =  "square"
    }
}
render()

board.addEventListener('click', playerClickedSquare)

function playerClickedSquare(event){
event.target.innerText = player1
}