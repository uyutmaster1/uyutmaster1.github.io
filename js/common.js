 
$(document).ready(function(){

	$(".btn-ph").animated("bounce", "bounce");
	$(".filters li").animated("fadeInLeft", "fadeOutLeft");
	$(".payment").animated("swing", "fadeOutLeft");
	//scroll Header

	var HeaderTop = $('#h-menu').offset().top;
	$(window).scroll(function(){
		if( $(window).scrollTop() > HeaderTop ) {
			$('#h-menu').addClass("fixed");
		} else {
			$('#h-menu').removeClass("fixed");
		}
		});

		$('.nav li').hover(
			function(){
				$("a", this).addClass('act');	
			}, function(){
				$("a", this).removeClass('act');
			});
			
				 

		$('.icon-menu').click(function() { 
		$('.h-menu .nav').animate({ 
			top: '0px'		
		}, 200); 
		});

		$('.icon-close').click(function() { 
		$('.h-menu .nav').animate({ 
			top: '-300px'
		}, 200); 
		});


	$('.filtr-container').filterizr({filter: 1});
	$(".filtr-button").click(function() {
		$(".filtr-button").removeClass("active");	
		$(this).addClass("active").data("filter");
	});


	$(".owl-carousel .item a").magnificPopup({
		type : 'image',
		gallery : {
			enabled : true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
	$('footer .item a').magnificPopup({
		type: 'image',
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});


	$('.gal').owlCarousel({
		loop:true,
		margin:10,
		autoplay: true,
 		autoplayTimeout: 2500,
		dots: false,
		nav: true,	
		autoHeight: true,
		navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa  fa-angle-right" aria-hidden="true">'],
		responsive : {
			0 : {
				items: 1			
			},			
			480 : {
				items: 1					
			},		
			768 : {
				items: 1					
			},
			1200 : {
				items: 3
			}
	}

});

	
  $('.top').click(function() {
    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});
  $(window).scroll(function() {
    if ($(this).scrollTop() > $(window).height()) {
      $('.top').addClass("active");
    } else {
      $('.top').removeClass("active");
		}
	});


$(".preloader").fadeOut();
$(".loader").delay(400).fadeOut("slow");



	$(document).on("scroll", onScroll);
	//smoothscroll
	$('#h-menu .nav a').on('click', function (e) {
			e.preventDefault();
			$(document).off("scroll");
			$('a').each(function () {
					$(this).removeClass('active');
			});
			$('.h-menu .nav').animate({ 
				top: '-300px'
			}, 200);
			var target = this.hash,
			$target = $(target);
			$('html, body').stop().animate({
					'scrollTop': $target.offset().top
			}, 500, 'swing', function () {
					window.location.hash = '';
					$(document).on("scroll", onScroll);
			});
	});

});


function onScroll(){
	var scrollPos = $(document).scrollTop();
	$('#h-menu .nav li .a').each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));
			if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
					$('#h-menu ul li a').removeClass("active act");
					currLink.addClass("active");
			}
			else{
					currLink.removeClass("active");
			}
	});
}

