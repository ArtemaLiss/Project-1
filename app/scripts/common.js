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
			width: '45%',
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
	
	$('#bookImg').on('click', function() {
		window.open('http://webmaster-gambit.ru', '_blank');	
	});
	
	$('.sidebar-menu-icon i').on('click', function() {
		$('#sidebar-menu').animate({ 
			right: '0px' 
		}, 150); 
		$('body').animate({ 
			right: '300px' 	
		}, 30);
		$('.sidebar-menu-icon').css('display', 'none');
		$('.sidebar-menu-icon-close').css('display', 'block');
	});
	$('.sidebar-menu-icon-close i, .close-menu').on('click', function() {
		$('#sidebar-menu').animate({ 
			right: '-300px' 
		}, 150); 
		$('body').animate({ 
			right: '0px' 
		}, 1);
		$('.sidebar-menu-icon').css('display', 'block');
		$('.sidebar-menu-icon-close').css('display', 'none');
	});
	$('section:not(#sidebar-menu)').on('click', function() {
		$('#sidebar-menu').animate({ 
			right: '-300px' 
		}, 150); 
		$('body').animate({ 
			right: '0px' 
		}, 1);
		$('.sidebar-menu-icon').css('display', 'block');
		$('.sidebar-menu-icon-close').css('display', 'none');
		
		$('input[name="search"]').css({
			width: '0',
			background: 'none',
			'border-radius': '90px 0 0 90px'
		});
		$('button[name="search-button"]').css({
			'border-radius': '90px'	
		});
	});
	
});
	
	