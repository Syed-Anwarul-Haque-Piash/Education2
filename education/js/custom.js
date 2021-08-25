/*
Template Name: Educational Institute Template
Author: Shoumitra
*/
$(document).ready(function () {
    "use strict";

     //Preloader
     
	 $('#preloader').delay(1000).fadeOut();

    
    //counter
    $('.counter').counterUp({
      delay: 10,
      time: 5000
    });  
  

   //Home slideshow owl-carousel 
    $('.slideshow').owlCarousel({
	    nav: true,
        items: 1,
        autoplay:true,
		autoplayTimeout: 5000,
        singleItem: true,
        navigation: false,
        pagination: false,
        loop: true,
    });
	
	//Courses owl-carousel 
    $('.allcourses').owlCarousel({
	    nav: true,
        margin: 20,
        autoplay:true ,
        autoplayTimeout: 10000,
        items: 4,
        navigation: true,
        loop: true,
        pagination: false,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            }
         }
     });
	
	// Owl-teachers carusel
    $(".owl-teachers").owlCarousel({
		nav: true,
		dots:false ,
		margin: 30,
		loop: true,
		autoplay: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1200: {
				items: 4,
			},

		}
	});
	
	//Transparent navbar animation
	 var navbar = $('.navbar-fixed-top');
	 var win = $(window);
	 if (navbar.length) {
	  win.on('scroll', function() {
	   var topScroll = win.scrollTop();
	   if (topScroll >= 50) {
		navbar.addClass('navbar-sticky');
	   } else {
		navbar.removeClass('navbar-sticky');
	   }
	  }).scroll();
	 }
	 //Gallery portfolio
	 $(window).on('load', function() {
		if ($(".portfolioContainer").length || $(".gallery-filter").length) {
			var $container = $('.portfolioContainer , .gallery-filter');
			$container.isotope({
				layoutMode: 'masonry',
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false,

				}
		 });
            $('.portfolioFilter a , .galleryportfolio a').on('click', function() {
                $('.portfolioFilter .current , .galleryportfolio .current').removeClass('current');
                $(this).addClass('current');

                var selector = $(this).attr('data-filter');
                $container.isotope({
                    layoutMode: 'masonry',
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false,

                    }
                });
                return false;
            });
        }

        if ($(".gallery-packery").length) {
            var $container = $('.gallery-packery .gallery-filter');
            $container.isotope({
                layoutMode: 'packery',
                itemSelector: '.msrItem',
                packery: {

                },
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });

            $('.gallery-packery .galleryportfolio a').on('click', function() {
                $('.gallery-packery .galleryportfolio .current').removeClass('current');
                $(this).addClass('current');

                var selector = $(this).attr('data-filter');
                $container.isotope({
                    layoutMode: 'packery',
                    itemSelector: '.msrItem',
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
         }
      });
	 // Magnificate Popup call here

     $('.magnific-popup').magnificPopup({ type: 'image' });
     $('.magnific-youtube').magnificPopup({ type: 'iframe' });

     function CheckPositionMobile() {
        if (window.matchMedia('(max-width: 991px)').matches) {
            /* Scroll Bar Plugin Call here... */
            (function($) {
                $(window).on('load', function() {
                    $(".menu-main").mCustomScrollbar({
                        theme: "minimal"
                    });
                });
            })(jQuery);
         }
      }  
    // I S O T O P E
	 if ($(".portfolio-items").length) {
	  var $container = $('.portfolio-items').isotope({
	   itemSelector: '.portfolio-item',
	   masonry: {
		columnWidth: '.portfolio-item'
	   }
	  });
	  // filter items when filter link is clicked
	  $('.portfolio-filter a').on('click', function() {
	   var selector = $(this).attr('data-filter');
	   $container.isotope({
		filter: selector
	   });
	   return false;
	  });

	  $('.portfolio-filter a').on('click', function() {
	   $('.portfolio-filter').find('.current').removeClass('current');
	   $(this).parent().addClass('current');
	  });
	 }
	 
     //Back to top 
    jQuery('.back-to-top').on('click', function(event) {
        jQuery('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() > 100) {
            jQuery('.back-to-top').fadeIn(1000);
        } else {
            jQuery('.back-to-top').fadeOut(1000);
        };
    });
	 //One page Scrooll
     $('#menu a, .page-scroll').on('click', function (e) {
        e.preventDefault();

        var $anchor = $(this);

        var offset = $('body').attr('data-offset');

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - (offset - 1)
        }, 1500);
    });
    //Video Popup   
    $('.video-iframe').magnificPopup({
        type: 'iframe',
        iframe: {
            markup: '<div class="mfp-iframe-scaler">' +
                '<div class="mfp-close"></div>' +
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                '</div>',
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                }
            },
            srcAction: 'iframe_src'
        }
    }); 

	//WOW JS
		new WOW().init();

   
});

