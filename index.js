let state = {
  players: [" ", " "],
  currentPlayer: " ",
}
// variables
const board = document.getElementById("board")
let turn_display = document.querySelector("#player_turn_display")

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
// nameButton[1].addEventListener("click", (event)=>{
//   const player1 = event.target.innerText.includes("1")
//   console.log(player1)
//   state.players[1] = inputName1.value
//   console.log(state.currentPlayer)
// })

// for(let i = 0;i <nameButton.length; i++){
//   nameButton[i].addEventListener("click", (event)=>{
//     const player1 = event.target.innerText.includes("1")
//     console.log(player1)
//     state.currentPlayer = inputName1.value
//     console.log(state.currentPlayer)
//   })
// }

// listeners for the name input buttons

// input1Button.addEventListener("click", input1ButtonClicked)

// function input1ButtonClicked(event){
// console.log(event.innerHtml)
// }