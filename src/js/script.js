$(document).ready(function() {
    let counter = 0;
    $("#1,#2,#3,#4,#5,#6,#7,#8,#9").on('click', function() {
        if ($(this).children().length < 1) {
            if (counter % 2 == 0) {
                $(this).append('<img class="image" src="src/img/o.png" alt="">');
                counter++;
                setTimeout(
                    function() {
                        $("#p2-flag").removeClass('hide')
                        $("#p1-flag").addClass('hide')
                    }, 200);
            } else {
                $(this).append('<img class="image" src="src/img/x.png" alt="">');
                counter++;
                setTimeout(
                    function() {
                        $("#p1-flag").removeClass('hide')
                        $("#p2-flag").addClass('hide')
                    }, 200);
            }

        }
    })
}); //end code