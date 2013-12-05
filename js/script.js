(function ($) {

	$(document).ready( function() {
		
		// Hide links for HTML
		$('.main-nav ul li a span').html('');
		
		// Open mobile menu on click
		$('.mobile-nav button, .mobile-nav ul li a').click( function() {
			$('.mobile-nav ul').slideToggle('slow');
		});

		// make intro pattern and registry section the same height as window and resize as window resizes
		var windowHeight = $(window).height();
		$('.intro-background, .intro-section, .registry-section').css('height',windowHeight);
		$(window).resize( function() {
			windowHeight = $(window).height();
			$('.intro-background, .intro-section, .registry-section').css('height',windowHeight);
		});

		// prevent default action when menu buttons are clicked and scroll to appropriate section
		$('.main-nav ul li a').click( function(e) {
			e.preventDefault();
			var destinationId = $(this).attr('href');
			var offsetTarget = $(destinationId).offset();
			if ( destinationId != '#main-content') {
				$('#main-content').animate({
					scrollTop: $('#main-content').scrollTop() + ($(destinationId).offset().top - $('#main-content').offset().top) - 150
				});
				$('.main-nav ul li a span').hide();
				$('.main-nav ul li a').removeClass('active');
				$(this).addClass('active');
			}	else if ( destinationId == '#main-content') {

				$('#main-content').animate({
					scrollTop: 0
				});
			}
				
		});

		$('.mobile-nav ul li a').click( function(e) {
			e.preventDefault();
			var destinationId = $(this).attr('href');
			var offsetTarget = $(destinationId).offset();
			if ( destinationId != '#main-content') {
				$('#main-content').animate({
					scrollTop: $('#main-content').scrollTop() + ($(destinationId).position().top - $('#main-content').position().top) - 50
				});
			} else if ( destinationId == '#main-content') {
				$('#main-content').animate({
					scrollTop: 0
				});
			}

		});

		// Fade in menu highlight
		$('.main-nav ul li a').hover( function() {
			var destinationId = $(this).attr('href');
			var isActive = $(this).hasClass('active');
			if ( destinationId != '#main-content' && isActive === false) {
				console.log('get it');
				$(this).children('span').css('display','block').animate({
					opacity: '1'
				}, 'slow');
			}
			}, function() {
				var destinationId = $(this).attr('href');
				var isActive = $(this).hasClass('active');
				if ( destinationId != '#main-content' && isActive === false) {
					$(this).children('span').animate({
						opacity: '0'
					}, 'slow', function() {
						$(this).css('display','none');
					});
				}
			}
		);


	});

})(jQuery);
