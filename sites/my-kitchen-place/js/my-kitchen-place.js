
//LIGHT AND DARK MODE//

function toggleDark(){
    $("body").toggleClass("dark");
}


//READ MORE TEXT ANIMATIONS//

function showHide(event){
    if ($(".show").siblings('p').is(":visible")){
    $(this).siblings("p").hide();
    } else {
    $(this).siblings("p").show();

    }
}

function toggleShow(event){
    $(event.target).siblings("p").toggle();
}


function slideUpDown(event){
    if ($(this).siblings('p').is(":visible")){
    $(this).siblings("p").slideUp();
    } else {
    $(this).siblings("p").slideDown();

    }
}

function toggleSlide(event){
    $(event.target).siblings("p").slideToggle("slow");
}


function fadeTo(event){
    if ($(this).siblings('p').is(":visible")){
    $(this).siblings("p").fadeOut("slow");
    } else {
    $(this).siblings("p").fadeTo("slow", 0.7);
    }
}

function fadeInOut(event){
    if ($(this).siblings('p').is(":visible")){
        $(this).siblings("p").fadeOut("slow");
        } else {
        $(this).siblings("p").fadeIn("slow");
        }
}





//MAIN FUNCTION//

function main() {
    $("#lightdark").click(toggleDark);
    
    $(".show").click(showHide);
    $(".show-toggle").click(toggleShow);
    $(".slideUpDown").click(slideUpDown);
    $(".slide-toggle").click(toggleSlide);
    $(".fadeTo").click(fadeTo);
    $(".fadeInOut").click(fadeInOut);
}

$(document).ready(main);