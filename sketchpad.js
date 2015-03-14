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
    if($('.grid-cell').length > 0) {
        $('.grid-cell').remove();
    }

    for(var i = 0; i < sideLength * sideLength; i++) {
        $('.div-grid-container').append("<div class='grid-cell'></div>");
    }

}

function startHoverEffect() {
    $('.grid-cell').mouseenter(function() {
        $(this).css("background-color", "#385737");
    });
}

function changeCellSize(sideLength) {
    var width = 100/sideLength;
    var height = $('.div-grid-container').height()/sideLength;

    $('.grid-cell').css({"width"  : width  + '%'});
    $('.grid-cell').css({"height" : height + 'px'});
}

function reInitializeDivGrid() {
    $('#reset').click(function() {
        var newSideLength = 0;

        while(newSideLength < 1 || newSideLength > 50) // Current computer can handle up to 50 without stuttering. Current computer is a potato-tier laptop from 2006.
            newSideLength = prompt("Enter a side length 1-50: ");

        //alert(newSideLength);
        initializeDivGrid(newSideLength);
        changeCellSize(newSideLength);
        startHoverEffect(); //I think I have to re call this because the mouseenter event listener is tied to the grid-cells which were removed.

    });
    return;
}

function changeStyle() {
    $('#apply-style').click(function() {
        var whichRadio = $("input[name=style]:checked").val();

        alert(whichRadio);
    });
    return;
}

$(document).ready(function() {

    toggleOptionsVisible();
    initializeDivGrid(16);
    startHoverEffect();
    reInitializeDivGrid();
    changeStyle();

});
