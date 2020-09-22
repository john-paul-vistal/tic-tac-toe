function appendImage(turn) {
    if (turn % 2 == 0) {
        $(this).append('<img class="image" src="src/img/o.png" alt="">');
        let id = $(this).attr('id');
        gameBoard[id] = "O";
        setTimeout(
            function() {
                $("#p2-flag").removeClass('hide')
                $("#p1-flag").addClass('hide')
            }, 200);
    } else {
        $(this).append('<img class="image" src="src/img/x.png" alt="">');
        let id = $(this).attr('id');
        gameBoard[id] = "X";
        setTimeout(
            function() {
                $("#p1-flag").removeClass('hide')
                $("#p2-flag").addClass('hide')
            }, 200);
    }
}