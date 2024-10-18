let gameState = Array(9).fill(null); //list that keeps track of gamestate
let currentPlay ='X'; //initial move at start of game

document.addEventListener('DOMContentLoaded',loadSquares);


function loadSquares() //function to load squares in board
{
    const board = document.querySelectorAll('#board div');

    // Loop through each div in the board layout and add the 'square' class to each
    board.forEach(function(square) {
        square.classList.add('square'); 

    square.addEventListener('click', function() { //add listener when square is clicked
         handleSquareClick(square);
        });
    square.addEventListener('mouseover',function(){ //add listener to square for hover
        square.classList.add('hover');
        })
    square.addEventListener('mouseout',function(){ //add listener to square for not hovering
        square.classList.remove('hover');
        })
    });
}

function handleSquareClick(square) {
    const index = Array.from(document.querySelectorAll('#board div')).indexOf(square); //get the index of a square clicked
    if (gameState[index] !== null) return; //if square is clicked lock value
    gameState[index] = currentPlay; //add value to game state array
    
    if (currentPlay === "X") //if play is X, display then alternate for the next player
    {
        square.classList.add("X"); //add X class to square
        square.textContent = currentPlay; //show selection
        currentPlay = "O";
    }
    else //if play is O, display then alternate for the next player
    {
        square.classList.add("O"); //add O class to square
        square.textContent = currentPlay; //show selection
        currentPlay = "X";
    }
    
  
}

