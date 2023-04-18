
//LIGHT AND DARK MODE//

function toggleDark(){
  $("body").toggleClass("dark");
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
    $('#menu a[href*="#"]')
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
/////////////////////////////////////////////////////////////// OUR DESIGNS
// GALLERY (Masonry) JQUERY

function initFreewall(id) {
  var wall = new Freewall("#" + id);

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
function masonry(){
  initFreewall("freewall");
  initFreewall("freewall2");
}

/////////////////////////////////////////////////////////////// FLOORS

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

/////////////////////////////////////////////////////////////// BACKSPLASH


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

function backsplashReadMore() {
  $(".show").click(showHide);
  $(".show-toggle").click(toggleShow);
  $(".slideUpDown").click(slideUpDown);
  $(".slide-toggle").click(toggleSlide);
  $(".fadeTo").click(fadeTo);
  $(".fadeInOut").click(fadeInOut);
    contactInfo();
}

/////////////////////////////////////////////////////////////// CABINETS

// LIGHTBOX
function lightbox(){
    $("a[rel^='prettyPhoto']").prettyPhoto({
        slideshowSpeed: 4000,
        autoplay_slideshow: true,
        social_tools: "",
        show_title: true,
        theme: 'light_rounded'
    });
}

//FILTERS

function filterGallery(event){
  $("#filters button.active").removeClass("active");
  $(this).addClass("active");

  var filter = $(this).data("filter");
  if(filter == "all") {
    $("#cabinets .row > div").show();
  } else {
    $("#cabinets .row > div").hide();
    $("#cabinets .row a").filter("." + filter).parent("div").show();
  }
}

function filtering() {
  $("#filters button").click(filterGallery);
}



/////////////////////////////////////////////////////////////// LIGHTING

// VIDEO PLUGIN
function videoPlayer() {
        // Target your .container, .wrapper, .post, etc.
        $("#video").fitVids();    
}


// CONTACT POP UP

function contactInfo(){
    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      },
      minHeight: 450,
      minWidth:600,
    });
 
    $( "[href='#contact']" ).on( "click", function() {
      $( "#dialog" ).dialog( "open" );
    });
}

// TABS IN THE LIGHTING GALLERY
function tabbing(){
        $( "#lighting" ).tabs();
}

function main(){
  //light/dark toggle 
  $("#lightdark").click(toggleDark);

  //smooth scroll
  smoothScroll();

  //sticky header
  stickyHeaderTop = $("#mainHeader").offset().top;
  stickyHeader();
  $(window).scroll(stickyHeader);

  //our designs masonry
  masonry();
  $(window).trigger("resize");

  //floors flexslider
  setUpFlexslider();

  //countertops accordion
  $( "#accordion" ).accordion({
    collapsible: true
  });

  //backsplash-ReadMore javascript functions:
  backsplashReadMore()

  //cabinets lightbox
  lightbox();
  filtering();

  //lightning 


    videoPlayer();
    
    tabbing();
}

$(document).ready(main);
