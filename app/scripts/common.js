$(document).ready(function() {
	$('.toggle_menu').on('click', function() {
		$('.menu').slideToggle(300, function() {
			if ($('.menu').css('display') == 'none') {
				$(this).removeAttr('style');
			}	
		});
	});
//	$test = ('.favorite i');
//	if ($test.is(':hover')) {
//		$('.favorite i').removeClass();
//		$('.favorite i').addClass('fa fa-heart');		
//	} else {
//		$('.favorite i').removeClass();
//		$('.favorite i').addClass('fa fa-heart-o');		
//	}
	$('#heart').hover(function() {	
		$('#heart').removeClass();
		$('#heart').addClass('fa fa-heart');
	}, function() {
		$('#heart').removeClass();
		$('#heart').addClass('fa fa-heart-o');			
	});
});