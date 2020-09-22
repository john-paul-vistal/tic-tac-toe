$(document).ready(function() {
    let turn = 0;
    let winner = false;
    let gameBoard = ['', '', '', '', '', '', '', '', ''];

    //Appends the image to Cell
    function displayImage(cell, turn) {
        if (turn % 2 == 0) {
            cell.append('<img class="image" src="src/img/o.png" alt="">');
            setTimeout(
                function() {
                    $("#p2-flag").removeClass('hide')
                    $("#p1-flag").addClass('hide')
                }, 200);
        } else {
            cell.append('<img class="image" src="src/img/x.png" alt="">');
            setTimeout(
                function() {
                    $("#p1-flag").removeClass('hide')
                    $("#p2-flag").addClass('hide')
                }, 200);
        }
    }
    //Appends the corresponding image to array
    function insertTurn(cell, turn) {
        let id = $(cell).attr('id')
        let img = turn % 2 === 0 ? 'O' : 'X';
        gameBoard[id] = img;
    }

    function currentPlayer() {
        return turn % 2 === 0 ? 'O' : 'X';
    }

    function checkWinner() {
        const winningSequences = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        winningSequences.forEach(winningCombos => {
            let cell1 = winningCombos[0];
            let cell2 = winningCombos[1];
            let cell3 = winningCombos[2];
            if (gameBoard[cell1] === currentPlayer() &&
                gameBoard[cell2] === currentPlayer() &&
                gameBoard[cell3] === currentPlayer()) {
                $("#" + cell1).css("background", "#1b1c1c")
                $("#" + cell2).css("background", "#1b1c1c")
                $("#" + cell3).css("background", "#1b1c1c")
                winner = true;
                let playerWin = currentPlayer() == 'O' ? "PLAYER 1" : "PLAYER 2"
                $("#winner").text(playerWin + " WINS THE GAME")
            }
        });

    }

    function checkIfTie() {
        if (turn == 9) {
            alert('game over a tie')
        }
    }


    //Player Click the cell 
    $("#0,#1,#2,#3,#4,#5,#6,#7,#8").on('click', function() {
        if ($(this).children().length < 1 && winner == false) {
            displayImage($(this), turn);
            insertTurn($(this), turn);
        }
        checkWinner();
        turn++;
        if (winner == false) {
            checkIfTie()
        }
    })




}); //end code