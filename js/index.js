$(document).ready(function() {
    $(".square").hover(
        function() {
            // Mouse enters the square div
            console.log("Mouse entered the white rectangle");
            $(this).css("border", "2px solid black");
        },
        function() {
            // Mouse leaves the square div
            console.log("Mouse left the white rectangle");
            $(this).css("border", "none");
        }
    ).mousedown(function() {
        // Mouse button is pressed down on the square div
        console.log("Mouse button pressed on the white rectangle");
        $(this).css("background-color", "grey");
        $(".text8").css("color", "white");
    }).mouseup(function() {
        // Mouse button is released on the square div
        console.log("Mouse button released on the white rectangle");
        $(this).delay(500).queue(function(next) {
            $(this).css("background-color", "black");
            next();
        }).delay(500).queue(function(next) {
            $(this).css("background-color", "white");
            $(".text8").css("color", "black");
            next();
        });
    });
});

