// IN-CLASS ASSIGNMENT --------------------------------------------------------

function setActive(target){
    if(target.length === 0){
        return;
    }
    $('.active').removeClass('active');
    $(target).parent("div").addClass('active');

    var newsrc = $(target).attr("src");

    $("#fullimg").attr("src", newsrc);
}


$(document).ready(function(){

    $(document).on('keydown', function(event){
     
        if (event.keyCode === 37) {

            var previmg = $('.active').prev().children('img');
            setActive(previmg);
        } else if (event.keyCode === 39){
            var nextimg = $('.active').next().children('img');
            setActive(nextimg);
        }
    });

    $("#cats .row .col14 img").hover(function(event){
        setActive(event.target);
    });
});


// HOMEWORK ASSIGNMENT --------------------------------------------------------

function displayInfo(target){
    $(target).siblings('.homework3').slideDown();
}

function hideInfo(target){
    $(target).siblings('.homework3').slideUp();
}

function delayTitle(){
    $('h1').delay(1500).fadeIn(2500);
    $('h2').delay(3000).fadeIn(2500);
}

function stopAnimation(){
    $("*").stop(true,true);
    $("h1,h2").show();      //Display titles when the animation is interrupted
} 

$(document).ready(function(){

    $("#outfits .col16 img").hover(function(event){
        displayInfo(event.target);
        
    },function(event){
        hideInfo(event.target);
    });

    delayTitle();

    $("#stopa").click(stopAnimation);
});