var retracted = true;

function toggleOptionsVisible() {
    $('.pull-tab').on("click",function() {
        if(retracted) {
            $('.buttons-panel').slideToggle();
            $('.pull-tab, .slider').animate({top: '90px'}, function() {
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
    startHoverEffect("#385737");
}

function startHoverEffect(newHexColor) {
    $('.grid-cell').mouseenter(function() {
        if(newHexColor == "random") {
            var randHexColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
            $(this).css("background-color", randHexColor);
        }
        else {
            $(this).css("background-color", newHexColor);
        }
    });
    return;
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

        initializeDivGrid(newSideLength);
        changeCellSize(newSideLength);
        changeStyle();

    });
    return;
}

function changeStyle() {
    $('#apply-style, #reset').click(function() {
        var whichRadio = $("input[name=style]:checked").val();
        var newHexColor = "#385737"; // This is the default color

        if (whichRadio == "default") {
            startHoverEffect(newHexColor);
        }
        else if (whichRadio == "user") {
            newHexColor = $("input[name=userColor]").val();
            startHoverEffect(newHexColor);
        }
        else if (whichRadio == "random") {
            startHoverEffect("random");
        }
        else {
            startHoverEffect(newHexColor);
        }
    });
    return;
}

$(document).ready(function() {

    toggleOptionsVisible();
    initializeDivGrid(16);
    changeStyle();
    reInitializeDivGrid();

});
