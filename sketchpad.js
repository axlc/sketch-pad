// Create a 16x16 grid of square divs inside the container div
// Set up a hover effect so it changes the color of the square when mouseenter, leaving a pixelated trail through the divgrid
// Add a button to the top of the screen which will clear the grid
    // This should also give a dialog box allowing the user how many squares to user per side of grid
    // Once entered, new grid should be generated in same total space as before (such as 960px)
var retracted = true;

$(document).ready(function() {
    // Code for the pull-tab. Will go elsewhere eventually.

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

    // Set width of container div to be 80% of the page, centered
});
