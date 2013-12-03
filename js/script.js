(function ($) {

	$(document).ready( function() {
		
		// Hide links for HTML
		$('.main-nav ul li a span').html('');
		
		// Open mobile menu on click
		$('.mobile-nav button, .mobile-nav ul li a').click( function() {
			$('.mobile-nav ul').slideToggle('slow');
		});

		// make intro pattern same width as window and resize as window resizes
		var windowHeight = $(window).height();
		$('.intro-background, .intro-section').css('height',windowHeight);
		$(window).resize( function() {
			windowHeight = $(window).height();
			$('.intro-background, .intro-section').css('height',windowHeight);
		});

		// prevent default action when menu buttons are clicked and scroll to appropriate section
		$('.main-nav ul li a').click( function(e) {
			e.preventDefault();
			var destinationId = $(this).attr('href');
			var offsetTarget = $(destinationId).offset();
			$('#main-content').animate({
				scrollTop: $(destinationId).offset().top - 150
			});
		});

		$('.mobile-nav ul li a').click( function(e) {
			e.preventDefault();
			var destinationId = $(this).attr('href');
			var offsetTarget = $(destinationId).offset();
			$('#main-content').animate({
				scrollTop: $(destinationId).offset().top - 70
			});

		});



	});

})(jQuery);
