
// MASONRY JQUERY

function masonry(){
    var wall = new Freewall("#freewall");

    wall.reset({
        selector: '.brick',
        animate: true,
        cellW: 200,
        cellH: 'auto',
        onResize: function() {
            wall.fitWidth();
        }
    });

    wall.container.find('.brick img').load(function() {
        wall.fitWidth();
    });
}

// STICKY HEADER


var stickyHeaderTop;
function stickyHeader(){
    var scrollTop = $(window).scrollTop();

    if(scrollTop > stickyHeaderTop) {
        $('#mainHeader').addClass('sticky');
    } else {
        $('#mainHeader').removeClass('sticky');
    }

}

// SMOOTH SCROLLING

function smoothScroll(){
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - 250
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
}


// FLEXSLIDER

function getGridSize() {
    return (window.innerWidth < 600) ? 2 :
           (window.innerWidth < 900) ? 3 : 4;
}

function setUpFlexslider(){
    $('.flexslider').flexslider({
        slideshowSpeed: 3500,
        animationSpeed: 1500,
        animation: "slide",
        animationLoop: true,
        itemWidth: 210,
        itemMargin: 5,
        minItems: getGridSize(), 
        maxItems: getGridSize() 
    });
}

// ACCORDION

// LIGHTBOX
function lightbox(){
    $("a[rel^='prettyPhoto']").prettyPhoto({
        slideshowSpeed: 3000,
        autoplay_slideshow: true,
        social_tools: "",
        show_title: true,
        theme: 'light_rounded'
    });
}


function main() {

    smoothScroll();
    masonry();

    stickyHeaderTop = $("#mainHeader").offset().top;
    stickyHeader();
    $(window).scroll(stickyHeader);

    $(window).trigger("resize");

    setUpFlexslider();

    $( "#accordion" ).accordion({
        collapsible: true
    });

    lightbox();
}

$(document).ready(main);


    
