// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery-1.8.2.min
//= require bxslider
//= require noconflict
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require bootstrap-slider
//= require turbolinks
//= require_tree .

$(function(){
	ready();
});

$(document).on('page:load',function(){
	ready();
});

function ready(){
	$(document).scroll(function() {
		checkOffset();
	});

	$(window).resize(function(){
		checkOffset();
	});

	var checkOffset = function(){
		if($('.fixed-footer').length != 0){
			if($('.arrow-down').offset().top + $('.arrow-down').outerHeight() > $(window).scrollTop() + $(window).height()){
				$('.fixed-footer').css('position','fixed');
			}else{
				$('.fixed-footer').css('position','static');
			}
		}
	}

	$('.calculator-input').on('keyup change',function(){
		var cal_output = $('#calculator-output');
		var sum = 0;
		$('.calculator-input').each(function(){
			var input_val = parseInt($(this).val());
			if(isNaN(input_val)){
				input_val = 0;
			}
			sum += input_val;
		});
		cal_output.val("$"+sum);
	});

	var slide_margin = 10; 
	slider = jQuery1_8('.bxslider').bxSlider({
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

	if($('.bootstrap-slider').length != 0){
		$('.bootstrap-slider').slider();
	}

	$('.btn-user').on('click',function(e){
		e.preventDefault();
		var sidebar = $($(this).data('sidebar'));
		var actual_width = sidebar.width();
		sidebar.css('right',-1*actual_width);
		$('body').css('overflow','hidden');
		$('.sidebar-modal').show();
		sidebar.show();
		sidebar.animate({'right': "+="+actual_width},600,'linear');
	});

	$('.sidebar-close').on('click',function(e){
		e.preventDefault();
		var sidebar = $(this).parent('.sidebar');
		var actual_width = sidebar.width();
		sidebar.animate({'right': "-="+actual_width},600,'linear',function(){
			$(this).hide();
			$('body').css('overflow','auto');
			$('.sidebar-modal').hide();
		});
	})
}