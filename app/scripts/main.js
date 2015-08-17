$(document).ready(function() {
    
    
    var parPosition = [];
            $('.par').each(function() {
                parPosition.push($(this).offset().top + -150);
            });

            $('#subnav a').click(function(){
                $('html, body').animate({
                    scrollTop: $( $.attr(this, 'href') ).offset().top + -50
                }, 500);
                return false;
            });

            $(document).on('scroll', function() {
                var position = $(document).scrollTop(),
                    index;

                for (var i=0; i<parPosition.length; i++) {
                    if (position <= parPosition[i]) {
                        index = i;
                        break;
                    }
                }

                $('.navigation ul li a').removeClass('active');
                $('.navigation ul li a:eq('+index+')').addClass('active');
            });

                $('.navigation ul li a').click(function () {
                $('.navigation ul li a').removeClass('active');
                    $(this).addClass('active');
            });
    
    
    

    
    
    

    
    $('#trigger-overlay').affix({
        offset: {
            top: $('#section1').outerHeight() -50
        }
    });
    
    $('.navigation').affix({
        offset: {
            top: $('.title-container').outerHeight() -60
        }
    });
    
    
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });
    
    

    
    
}); // END ONREADY   



var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: false, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function (box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    }
});
wow.init();



// Skrollr



( function( $ ) {
    // Init Skrollr
    if ( ! $('html').is('.touch') ) {    
	    var s = skrollr.init({
	        render: function(data) {
	            //Debugging - Log the current scroll position.
	            //console.log(data.curTop);
	        },
            forceHeight: false
	    });
    
    }
} )( jQuery );




