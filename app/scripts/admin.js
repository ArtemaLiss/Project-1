// Admin-panel, load-img

function toggleMenu() {
	$('i.toggle_menu').on('click', function() {
		$('.small-menu').slideToggle(300, function() {
			if ($('.small-menu').css('display') == 'none') {
				$('.small-menu').removeAttr('style');
			}
		});
	});
	
}

$(document).ready(function() {
	toggleMenu();
	
});

function handleFileSelect(evt) {
	var file = evt.target.files;
	var f = file[0];
	var reader = new FileReader();
	reader.onload = (function(theFile) {
		return function(e) {
			$('.img-file span').remove();
			var span = document.createElement('span');
			span.innerHTML = ['<img class="thumb" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');
			$('.base-bg').css('display', 'none');
			document.getElementById('output').insertBefore(span, null);
		};
	})(f);
	reader.readAsDataURL(f);
}
document.getElementById('file').addEventListener('change', handleFileSelect, false);