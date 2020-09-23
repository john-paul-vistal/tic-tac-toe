$(document).ready(function() {
    let turn = 0;
    let winner = false;
    let gameBoard = ['', '', '', '', '', '', '', '', ''];

    //Appends the image to Cell
    function displayImage(cell, turn) {
        if (turn % 2 == 0) {
            cell.append('<img class="image" src="src/img/x.png" alt="">');
            setTimeout(
                function() {
                    $("#p2-flag").removeClass('hide')
                    $("#p1-flag").addClass('hide')
                }, 200);
        } else {
            cell.append('<img class="image" src="src/img/o.png" alt="">');
            setTimeout(
                function() {
                    $("#p1-flag").removeClass('hide')
                    $("#p2-flag").addClass('hide')
                }, 200);
        }
    }

    //Appends the corresponding image to array and put highlight to the latest move
    function insertTurn(cell, turn) {
        let id = $(cell).attr('id')
        let img = turn % 2 === 0 ? 'O' : 'X';
        gameBoard[id] = img;

        $("#0,#1,#2,#3,#4,#5,#6,#7,#8").css("background", "rgb(255, 255, 255,0)")
        $("#" + id).css("background", "#f6fc77")
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
                $("#prompt").removeClass("hide")
                $("#p2-flag").hide()
                $("#p1-flag").hide()
                restart();
            }
        });

    }

    function restart() {
        setTimeout(
            function() {
                $("#timer").text("5")
                setTimeout(
                    function() {
                        $("#timer").text("4")
                        setTimeout(
                            function() {
                                $("#timer").text("3")
                                setTimeout(
                                    function() {
                                        $("#timer").text("2")
                                        setTimeout(
                                            function() {
                                                $("#timer").text("1")
                                                setTimeout(
                                                    function() {
                                                        $("#timer").text("0")
                                                        winner = false;
                                                        gameBoard = ['', '', '', '', '', '', '', '', ''];
                                                        turn = 0
                                                        $("#0,#1,#2,#3,#4,#5,#6,#7,#8").children().remove()
                                                        $("#0,#1,#2,#3,#4,#5,#6,#7,#8").css("background", "rgb(255, 255, 255,0)")
                                                        $("#prompt").addClass("hide")
                                                        $("#p1-flag").removeClass('hide')
                                                        $("#p2-flag").removeClass('hide')
                                                        $("#p1-flag").show()
                                                        $("#p2-flag").show()
                                                        $("#p2-flag").addClass('hide')
                                                    }, 1000);
                                            }, 1000);
                                    }, 1000);
                            }, 1000);
                    }, 1000);
            }, 100);
    }

    function checkIfTie() {
        if (turn == 9) {
            $("#winner").text("IT'S A TIE")
            $("#prompt").removeClass("hide")
            $("#p2-flag").hide()
            $("#p1-flag").hide()
            restart();
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