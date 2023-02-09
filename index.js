let state = {
  players: ["", ""],
  currentPlayer: ""
}
// variables
const board = document.getElementById("board")
let turnDisplay = document.querySelector("#player_turn_display")

// name inputs and buttons
let inputName1 = document.querySelector("#player1")
let inputName2 = document.querySelector("player2")
let nameButton = document.getElementsByTagName("button")

// this will make the board/3x3 grid
function renderBoard(){
    for(let i = 0; i < 9; i++){
        let cell = document.createElement("div")
        cell.className =  "square"
        board.appendChild(cell)
    }
}
renderBoard()
// console.log(nameButton[0])
nameButton[0].addEventListener("click", (event)=>{
  event.preventDefault()
  let input = document.getElementById("player1").value
  state.players[0] = input
  let player1Display = document.getElementById("player1Display")
  player1Display.innerText = `player 1 is: ${input}`
})

nameButton[1].addEventListener("click", (event)=>{
  event.preventDefault()
  let input = document.getElementById("player2").value
  state.players[1] = input
  let player2Display = document.getElementById("player2Display")
  player2Display.innerText = `player 2 is: ${input}`
})


board.addEventListener("click", (event)=>{
  console.log("click")
  if(state.currentPlayer === state.players[0]){
    state.currentPlayer = state.players[1]
    console.log("current player is: "+ state.currentPlayer)
    changeTurnDisplay()

  }else {
    state.currentPlayer = state.players[0]
    console.log("current player is: "+ state.currentPlayer)
    changeTurnDisplay()
  }
  })

  function changeTurnDisplay(){
    turnDisplay.innerText = state.currentPlayer
  }
