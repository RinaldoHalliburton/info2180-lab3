function loadSquares() //function to load squares in board
{
    const board = document.querySelectorAll('#board div');

    // Loop through each square in the board layout and add the 'square' class
    board.forEach(function(square) {
        square.classList.add('square');
    });
}

document.addEventListener('DOMContentLoaded',loadSquares)


