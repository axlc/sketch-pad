// Create a 16x16 grid of square divs inside the container div
// Set up a hover effect so it changes the color of the square when mouseenter, leaving a pixelated trail through the divgrid
// Add a button to the top of the screen which will clear the grid
    // This should also give a dialog box allowing the user how many squares to user per side of grid
    // Once entered, new grid should be generated in same total space as before (such as 960px)
var retracted = true;

function toggleOptionsVisible() {
    $('.pull-tab').on("click",function() {
        if(retracted) {
            $('.buttons-panel').slideToggle();
            $('.pull-tab, .slider').animate({top: '120px'}, function() {
                retracted = false;
            });
        }
        else {
            $('.buttons-panel').slideToggle();
            $('.pull-tab, .slider').animate({top: '0px'}, function() {
                retracted = true;
            });
        }
    });
}

function initializeDivGrid(sideLength) {
    // var $divGridContainer = $('div-grid-container');
    // var $gridCell = $("");
    for(var i = 0; i < sideLength; i++) {
        for(var j = 0; j < sideLength; j++) {
                $('.div-grid-container').append("<div class='grid-cell'></div>");
        }
    }
}

function startHoverEffect() {
    $('.grid-cell').mouseenter(function() {
        $(this).css("background-color", "#385737");
    });
}

$(document).ready(function() {

    toggleOptionsVisible();
    initializeDivGrid(16);
    startHoverEffect();
});
