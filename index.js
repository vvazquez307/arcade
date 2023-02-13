let state = {
  players: ["", ""],
  currentPlayer: ""
}
let CPUButton = document.querySelector("#CPUButton")
let drawCounterVar = 0
let resultDisplay = document.querySelector("#player_turn_container > h1:nth-child(3)")
const board = document.getElementById("board")
let turnDisplay = document.querySelector("#player_turn_display")
let inputName1 = document.querySelector("#player1")
let inputName2 = document.querySelector("player2")
let nameButton = document.getElementsByTagName("button")

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
      checkDraw()
      if(state.players[1] === "CPU"){
        CPUPlay()
      }
    }else{
      return
  }
  }else if(state.currentPlayer === state.players[1] && state.players[1] !== "CPU") {
    if(event.target.innerText === ""){
      event.target.innerText = "o"
      state.currentPlayer = state.players[0]
      changeTurnDisplay()
      checkWinner()
      checkDraw()
    }else{
      return
    }
  }
})

  function checkWinner(){
    if(square1.innerText === "x" && square2.innerText === "x" && square3.innerText === "x"){
      turnDisplay.innerText = state.players[0]
      displayWin()
      reset()
    }
    if(square4.innerText === "x" && square5.innerText === "x" && square6.innerText === "x"){
      turnDisplay.innerText = state.players[0]
      displayWin()
      reset()
    }
    if(square7.innerText === "x" && square8.innerText === "x" && square9.innerText === "x"){
      turnDisplay.innerText = state.players[0]
      displayWin()
      reset()
    }
    if(square1.innerText === "x" && square4.innerText === "x" && square7.innerText === "x"){
      turnDisplay.innerText = state.players[0]
      displayWin()
      reset()
    }
    if(square2.innerText === "x" && square5.innerText === "x" && square8.innerText === "x"){
      turnDisplay.innerText = state.players[0]
      displayWin()
      reset()
    }
    if(square3.innerText === "x" && square6.innerText === "x" && square9.innerText === "x"){
      turnDisplay.innerText = state.players[0]
      displayWin()
      reset()
    }
    if(square1.innerText === "x" && square5.innerText === "x" && square9.innerText === "x"){
      turnDisplay.innerText = state.players[0]
      displayWin()
      reset()
    }
    if(square3.innerText === "x" && square5.innerText === "x" && square7.innerText === "x"){
      turnDisplay.innerText = state.players[0]
      displayWin()
      reset()
    }
    if(square1.innerText === "o" && square2.innerText === "o" && square3.innerText === "o"){
      turnDisplay.innerText = state.players[1]
      displayWin()
      reset()
    }
    if(square4.innerText === "o" && square5.innerText === "o" && square6.innerText === "o"){
      turnDisplay.innerText = state.players[1]
      displayWin()
      reset()
    }
    if(square7.innerText === "o" && square8.innerText === "o" && square9.innerText === "o"){
      turnDisplay.innerText = state.players[1]
      displayWin()
      reset()
    }
    if(square1.innerText === "o" && square4.innerText === "o" && square7.innerText === "o"){
      turnDisplay.innerText = state.players[1]
      displayWin()
      reset()
    }
    if(square2.innerText === "o" && square5.innerText === "o" && square8.innerText === "o"){
      turnDisplay.innerText = state.players[1]
      displayWin()
      reset()
    }
    if(square3.innerText === "o" && square6.innerText === "o" && square9.innerText === "o"){
      turnDisplay.innerText = state.players[1]
      displayWin()
      reset()
    }
    if(square1.innerText === "o" && square5.innerText === "o" && square9.innerText === "o"){
      turnDisplay.innerText = state.players[1]
      displayWin()
      reset()
    }
    if(square3.innerText === "o" && square5.innerText === "o" && square7.innerText === "o"){
      turnDisplay.innerText = state.players[1]
      displayWin()
      reset()
    }
  }

function checkDraw(){
    drawCounterVar++
    if(drawCounterVar === 9){
      reset()
    }
  }

function reset(){
  setTimeout(() => {
    square1.innerText = ""
    square2.innerText = ""
    square3.innerText = ""
    square4.innerText = ""
    square5.innerText = ""
    square6.innerText = ""
    square7.innerText = ""
    square8.innerText = ""
    square9.innerText = ""
    resultDisplay.innerText = "turn"
    state.currentPlayer = state.players[0]
    turnDisplay.innerText = state.players[0]
    drawCounterVar = 0
  }, 3000);
}

function displayWin(){
  resultDisplay.innerText = "wins"
}

function displayDraw(){
  resultDisplay.innerText = "draw"
}
function changeTurnDisplay(){
    turnDisplay.innerText = state.currentPlayer
  }

CPUButton.addEventListener("click", (event)=>{
  if(document.querySelector("#content_container > form:nth-child(3)").style.display === ""){
    document.querySelector("#content_container > form:nth-child(3)").style.display = "none"
    CPUButton.style.backgroundColor  = "green"
    state.players[1] = "CPU"
  } else if(document.querySelector("#content_container > form:nth-child(3)").style.display = "none"){
    document.querySelector("#content_container > form:nth-child(3)").style.display = ""
    CPUButton.style.backgroundColor  = "red"
    state.players[1] = ""
  }
})
function CPUPlay(){
  let i = Math.floor(Math.random() * (10 - 1) + 1)
  setTimeout(() => {
    if(i === 1){
      if(square1.innerText === ""){
        square1.innerText = "o"
      }else if(square1.innerText === "x"){
        CPUPlay()
      }
    }
    if(i === 2){
      if(square2.innerText === ""){
        square2.innerText = "o"
      }else if(square2.innerText === "x"){
        CPUPlay()
      }
    }
    if(i === 3){
      if(square3.innerText === ""){
        square3.innerText = "o"
      }else if(square3.innerText === "x"){
        CPUPlay()
      }
    }
    if(i === 4){
      if(square4.innerText === ""){
        square4.innerText = "o"
      }else if(square4.innerText === "x"){
        CPUPlay()
      }
    }
    if(i === 5){
      if(square5.innerText === ""){
        square5.innerText = "o"
      }else if(square5.innerText === "x"){
        CPUPlay()
      }
    }
    if(i === 6){
      if(square6.innerText === ""){
        square6.innerText = "o"
      }else if(square6.innerText === "x"){
        CPUPlay()
      }
    }
    if(i === 7){
      if(square7.innerText === ""){
        square7.innerText = "o"
      }else if(square7.innerText === "x"){
        CPUPlay()
      }
    }
    if(i === 8){
      if(square8.innerText === ""){
        square8.innerText = "o"
      }else if(square8.innerText === "x"){
        CPUPlay()
      }
    }
    if(i === 9){
      if(square9.innerText === ""){
        square9.innerText = "o"
      }else if(square9.innerText === "x"){
        CPUPlay()
      }
    }
      state.currentPlayer = state.players[0]
      changeTurnDisplay()
      checkWinner()
      checkDraw()
  }, 500);
}

// sorry I could'nt figure out sooner how to make cpu work better
// so far CPU only takes two guesses and if those two guesses are already taken up then it will just freeze up.
