let gameState = Array(9).fill(null); //list that keeps track of gamestate
let currentPlay = "X"; //initial move at start of game
let winner = null;
let gameActive = true; // is game over?

document.addEventListener("DOMContentLoaded", loadSquares);

function loadSquares() {
  //function to load squares in board
  const board = document.querySelectorAll("#board div");

  // Loop through each div in the board layout and add the 'square' class to each
  board.forEach(function (square) {
    square.classList.add("square");

    //add listener when square is clicked
    square.addEventListener("click", function () {
      if (gameActive == true) {
        handleSquareClick(square);
      }
    });
    //add listener to square for hover
    square.addEventListener("mouseover", function () {
      if (gameActive == true) {
        square.classList.add("hover");
      }
    });
    //remove listener to square for hovering
    square.addEventListener("mouseout", function () {
      square.classList.remove("hover");
    });
  });
}

function handleSquareClick(square) {
  const index = Array.from(document.querySelectorAll("#board div")).indexOf(
    square
  ); //get the index of a square clicked
  if (gameState[index] !== null) return; //if square is clicked lock value
  gameState[index] = currentPlay; //add value to game state array

  if (currentPlay === "X") {
    //if play is X, display then alternate for the next player
    winner = "X";
    square.classList.add("X"); //add X class to square
    square.textContent = currentPlay; //show selection
    currentPlay = "O";
  } //if play is O, display then alternate for the next player
  else {
    square.classList.add("O"); //add O class to square
    winner = "O";
    square.textContent = currentPlay; //show selection
    currentPlay = "X";
  }

  let win = checkWinner(); // check for winner
  let draw = checkDraw(); // check for draw

  if (win == true && draw == false) {
    //if winner is found end game and display correct message in div
    msg = `Congratulations! ${winner} is the Winner!`;
    element = document.getElementById("status"); //get div and apply class to it and chnage text inside
    element.classList.add("status");
    element.classList.add("status");
    element.classList.add("you-won");
    element.innerHTML = msg;
    gameActive = false;
  }
  if (win == false && draw == true) {
    //if NO winner is found end game and display correct message in div
    msg = "Draw! No Winner";
    element = document.getElementById("status"); //get div and apply class to it and chnage text inside
    element.classList.add("status");
    element.classList.add("you-won");
    element.innerHTML = msg;
    gameActive = false;
  }
  if (win == true && draw == true) {
    //if winner is found at last state of game
    msg = `Congratulations! ${winner} is the Winner!`;
    element = document.getElementById("status"); //get div and apply class to it and chnage text inside
    element.classList.add("status");
    element.classList.add("you-won");
    element.innerHTML = msg;
    gameActive = false;
  }
}

function checkWinner() {
  //wining configs
  const winningCombinations = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal 1
    [2, 4, 6], // Diagonal 2
  ];

  //check state of board for winning configs
  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    if (
      gameState[a] &&
      gameState[a] === gameState[b] &&
      gameState[a] === gameState[c]
    ) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  //if all block are full its a possibly a draw
  return gameState.every((cell) => cell !== null);
}

function resetBoard() {}
