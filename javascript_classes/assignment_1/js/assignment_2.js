
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


//Initialization on document ready

function init() {
    fillAltnTitle();
    $('#lightdark').click(toggleDark);
}


$(document).ready(init);