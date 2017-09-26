// Preloader
document.body.onload = function() {
	setTimeout (function() {
		var preloader = document.getElementById('preloader');
		if (!preloader.classList.contains('done')) {
			$('.load-none').css('display', 'block');
			preloader.classList.add('done');
		}
	}, 500);
}

$(document).ready(function() {
	// Hear icon translate
	$('i#heart').hover(function() {	
		$(this).removeClass();
		$(this).addClass('fa fa-heart');
	}, function() {
		$(this).removeClass();
		$(this).addClass('fa fa-heart-o');			
	});
	// MAIN-search animation
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
	// Sidebar-menu
	
	// open
	$('.sidebar-menu-icon i').on('click', function() {
		$('.sidebar-menu-icon').css('opacity', '0');
		$('.sidebar-menu-icon-close').css('display', 'block');
		$('#sidebar-menu').animate({ 
			right: '0px' 
		}, 300); 
		$('body').animate({ 
			right: '250px' 	
		}, 300);
		$('.sidebar-menu-icon-close').css({
			'opacity': '1'
		});
		$('.sidebar-menu-icon').css({
			'opacity': '0'
		});
	});
	// close
	$('.sidebar-menu-icon-close i').on('click', function() {
		$('#sidebar-menu').animate({ 
			right: '-250px' 
		}, 300); 
		$('body').animate({ 
			right: '0px' 
		}, 300);
		$('.sidebar-menu-icon-close').css({
			'opacity': '0'
		});
		$('.sidebar-menu-icon').css({
			'opacity': '1'
		});
	});
	// close for click on empty place
	$('section:not(#sidebar-menu)').on('click', function() {
		$('#sidebar-menu').animate({ 
			right: '-250px' 
		}, 300); 
		$('body').animate({ 
			right: '0px' 
		}, 300);
		$('.sidebar-menu-icon-close').css({
			'opacity': '0'
		});
		$('.sidebar-menu-icon').css({
			'opacity': '1'
		});
		//------------------------------
		$('input[name="search"]').css({
			width: '0',
			background: 'none',
			'border-radius': '90px 0 0 90px'
		});
		$('input[name="search"]').val('');
		$('button[name="search-button"]').css({
			'border-radius': '90px'	
		});
	});
	// close search-input enter
	$('body').keyup(function(){
		if(event.keyCode==13)
		{
			var input_text = $('input[name="search"]').val();
			if (input_text != '') {
				location.href = '../page2.html';
			}
		}
	});
	// close search-input button
	$('button[name="search-button"]').on('click', function() {
		var input_text = $('input[name="search"]').val();
		if (input_text != '') {
			location.href = '../page2.html';
		}	
	});
});
	
	