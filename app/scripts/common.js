$(document).ready(function() {
	$('.toggle_menu').on('click', function() {
		$('.menu').slideToggle(300, function() {
			if ($('.menu').css('display') == 'none') {
				$(this).removeAttr('style');
			}	
		});
	});
	$('i#heart').hover(function() {	
		$(this).removeClass();
		$(this).addClass('fa fa-heart');
	}, function() {
		$(this).removeClass();
		$(this).addClass('fa fa-heart-o');			
	});
	
	$('button[name="search-button"]').on('click', function() {
		$('input[name="search"]').css({
			width: '50%',
			background: '#fff',
			'border-radius': '90px 0 0 90px'
		});
		$('button[name="search-button"]').css({
			'border-radius': '0 90px 90px 0'	
		});
	});
	
	$('.toggle-block').on('click', function() {
		$('.info-from-us').slideToggle("slow");	
	});
	
});
	
	