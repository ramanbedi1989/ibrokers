jQuery1_8 = jQuery.noConflict(true);
jQuery1_8(function($){
	var slide_margin = 10; 
	$('.bxslider').bxSlider({
		infiniteLoop: true,
  		minSlides: 2,
  		maxSlides: 2,
  		moveSlides: 2,
  		slideWidth: ($('.container-fluid').first().width()/2 - slide_margin),
  		slideMargin: slide_margin,
  		pager: false,
  		auto: true,
  		pause: 4000,
  		speed: 1000,
  		autoHover: true
	});
	
});
