let state = {
  players: ["", ""],
  currentPlayer: ""
}

// variables
const board = document.getElementById("board")
let turnDisplay = document.querySelector("#player_turn_display")
let inputName1 = document.querySelector("#player1")
let inputName2 = document.querySelector("player2")
let nameButton = document.getElementsByTagName("button")

// this will make the board/3x3 grid
function renderBoard(){
    for(let i = 0; i < 9; i++){
        let cell = document.createElement("div")
        cell.className = "square"
        board.appendChild(cell)
    }
}
renderBoard()

let square1 = document.querySelector("#board > div:nth-child(1)")
let square2 = document.querySelector("#board > div:nth-child(2)")
let square3 = document.querySelector("#board > div:nth-child(3)")
let square4 = document.querySelector("#board > div:nth-child(4)")
let square5 = document.querySelector("#board > div:nth-child(5)")
let square6 = document.querySelector("#board > div:nth-child(6)")
let square7 = document.querySelector("#board > div:nth-child(7)")
let square8 = document.querySelector("#board > div:nth-child(8)")
let square9 = document.querySelector("#board > div:nth-child(9)")


nameButton[0].addEventListener("click", (event)=>{
  event.preventDefault()
  let input = document.getElementById("player1").value
  state.players[0] = input
  let player1Display = document.getElementById("player1Display")
  player1Display.innerText = `player 1 is: ${input}`
  state.currentPlayer = input
  changeTurnDisplay()
})

nameButton[1].addEventListener("click", (event)=>{
  event.preventDefault()
  let input = document.getElementById("player2").value
  state.players[1] = input
  let player2Display = document.getElementById("player2Display")
  player2Display.innerText = `player 2 is: ${input}`
})


board.addEventListener("click", (event)=>{
  if(state.currentPlayer === state.players[0]){
    if(event.target.innerText === ""){
      event.target.innerText = "x"
      state.currentPlayer = state.players[1]
      changeTurnDisplay()
      checkWinner()
    }else{
      return
    }
  }else if(state.currentPlayer === state.players[1]) {
    if(event.target.innerText === ""){
      event.target.innerText = "o"
      state.currentPlayer = state.players[0]
      changeTurnDisplay()
      checkWinner()
    }else{
      return
    }
  }
})

function changeTurnDisplay(){
    turnDisplay.innerText = state.currentPlayer
  }

  function checkWinner(){
    if(square1.innerText === "x" && square2.innerText === "x" && square3.innerText === "x"){
      console.log("player x wins")
      // reset function
    }
    if(square4.innerText === "x" && square5.innerText === "x" && square6.innerText === "x"){
      console.log("player x wins")
      // reset function
    }
    if(square7.innerText === "x" && square8.innerText === "x" && square9.innerText === "x"){
      console.log("player x wins")
      // reset function
    }
    if(square1.innerText === "x" && square4.innerText === "x" && square7.innerText === "x"){
      console.log("player x wins")
      // reset function
    }
    if(square2.innerText === "x" && square5.innerText === "x" && square8.innerText === "x"){
      console.log("player x wins")
      // reset function
    }
    if(square3.innerText === "x" && square6.innerText === "x" && square9.innerText === "x"){
      console.log("player x wins")
      // reset function
    }
    if(square1.innerText === "x" && square5.innerText === "x" && square9.innerText === "x"){
      console.log("player x wins")
      // reset function
    }
    if(square3.innerText === "x" && square5.innerText === "x" && square7.innerText === "x"){
      console.log("player x wins")
      // reset function
    }
    if(square1.innerText === "o" && square2.innerText === "o" && square3.innerText === "o"){
      console.log("player x wins")
      // reset function
    }
    if(square4.innerText === "o" && square5.innerText === "o" && square6.innerText === "o"){
      console.log("player o wins")
      // reset function
    }
    if(square7.innerText === "o" && square8.innerText === "o" && square9.innerText === "o"){
      console.log("player o wins")
      // reset function
    }
    if(square1.innerText === "o" && square4.innerText === "o" && square7.innerText === "o"){
      console.log("player o wins")
      // reset function
    }
    if(square2.innerText === "o" && square5.innerText === "o" && square8.innerText === "o"){
      console.log("player o wins")
      // reset function
    }
    if(square3.innerText === "o" && square6.innerText === "o" && square9.innerText === "o"){
      console.log("player o wins")
      // reset function
    }
    if(square1.innerText === "o" && square5.innerText === "o" && square9.innerText === "o"){
      console.log("player o wins")
      // reset function
    }
    if(square3.innerText === "o" && square5.innerText === "o" && square7.innerText === "o"){
      console.log("player o wins")
      // reset function
    }else if(true){
      console.log("draw")
    }
  }