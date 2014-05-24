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

	$('.bootstrap-slider').slider();
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
	})
});