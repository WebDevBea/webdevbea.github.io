
// GALLERY (Masonry) JQUERY

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
    contactInfo();

    masonry();
    $(window).trigger("resize");

    lightbox();

    videoPlayer();
    
    tabbing();
}

$(document).ready(main);
