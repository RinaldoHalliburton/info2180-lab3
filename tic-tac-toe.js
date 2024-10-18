let gameState = Array(9).fill(null);
let currentPlay ='X';

document.addEventListener('DOMContentLoaded',loadSquares);


function loadSquares() //function to load squares in board
{
    const board = document.querySelectorAll('#board div');

    // Loop through each square in the board layout and add the 'square' class
    board.forEach(function(square) {
        square.classList.add('square');

    square.addEventListener('click', function() {
         handleSquareClick(square);
        });
    });
}

function handleSquareClick(square) {
    const index = Array.from(document.querySelectorAll('#board div')).indexOf(square);
    if (gameState[index] !== null) return;
    gameState[index] = currentPlay;
    if (currentPlay === "X")
    {
        square.classList.add("X");
        square.textContent = currentPlay;
        currentPlay = "O";
    }
    else
    {
        square.classList.add("O");
        square.textContent = currentPlay;
        currentPlay = "X";
    }
    
  
}

