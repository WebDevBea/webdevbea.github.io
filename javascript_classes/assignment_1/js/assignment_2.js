//In-class Assignment 2

//Part 1: Gallery of images 9 max, use jQuery to target and add the "alt" and "title" attributes.

function fillAltnTitle() {

    var images = $('img');

    images.each(function(i, image) {
        var alttext = $(image).attr("alt");
        var titletext = $(image).attr("title");

        if(alttext && alttext.length>0) {
            $(image).attr("title", alttext);
        } 
        else if(titletext && titletext.length>0) {
            $(image).attr("alt", titletext);
        }
        else {
            var srctext = $(image).attr("src");
            $(image).attr("alt", srctext);
            $(image).attr("title", srctext);
        }
    });
}

//Part 2: Add a toggle button for light and dark modes.

function toggleDark() {
    $('body').toggleClass("dark");
}


//Homework Assignment 2

// Part 2-1: Add FadeIn, Add fadeOut for a terms and conditions

function fading() {
    $('#conditions').fadeToggle("slow", "swing");
    $('#termsCon').toggleClass("mainStyle");
}

// Part 2-2: Add a hover to a "read more" button that runs a slideUp and SlideDown to another item on the page

function sliding() {
    $('#moreconditions').slideToggle();
}

// Part 2-3: Add a show and hide effect using the toggle method (replaces function from assignment 1)

function toggleCart(){
    if ($("#cart").children("ul").is(":empty")) {
        alert("Your cart is empty!");
        return;
    }
    $("#cart").children("ul").toggle(400);
}

//Initialization on document ready

function init() {
    fillAltnTitle();
    $('#lightdark').click(toggleDark);
    $('#buttonTC').click(fading);
    $('#readmore').hover(sliding);
    $("#cart").children("a").click(toggleCart);
}

$(document).ready(init);