/* 
 * Jessica Chan 
 * jessicachanstudios@gmail.com
 * http://www.jessicachanstudios.com/
 * Hastily coded by a bride under pressure!
 */
  
(function (quandAndJess,$,undefined) {

	$(document).ready( function() {
		
		// Hide links for HTML
		$('.main-nav ul li a span').html('');
		
		// Open mobile menu on click
		$('.mobile-nav button, .mobile-nav ul li a').click( function() {
			$('.mobile-nav ul').slideToggle('slow');
		});

		// make intro pattern, registry, and rsvp section the same height as window and resize as window resizes
		var windowHeight = $(window).height();
		$('.intro-background, .intro-section, .registry-section, #user-login-form').css('height',windowHeight);
		$(window).resize( function() {
			windowHeight = $(window).height();
			$('.intro-background, .intro-section, .registry-section').css('height',windowHeight);
		});

		// prevent default action when menu buttons are clicked and scroll to appropriate section
		$('.main-nav ul li a').on('click touchend', function(e) {
			e.preventDefault();
			var destinationId = $(this).attr('href');
			destinationId = destinationId.substring(1);
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
				$('.main-nav ul li a span').hide();
				$('.main-nav ul li a').removeClass('active');
			}
				
		});

		$('.mobile-nav ul li a').on('click touchend', function(e) {
			e.preventDefault();
			var destinationId = $(this).attr('href');
			destinationId = destinationId.substring(1);
			var offsetTarget = $(destinationId).offset();
			if ( destinationId != '#main-content') {
				$('html,body').animate({
					scrollTop: $(destinationId).offset().top - 50
				});
			} else if ( destinationId == '#main-content') {
				$('html,body').animate({
					scrollTop: 0
				});
			}

		});

		// Fade in menu highlight
		$('.main-nav ul li a').hover( function() {
			var destinationId = $(this).attr('href');
			var isActive = $(this).hasClass('active');
			if ( destinationId != '#main-content' && isActive === false) {
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

		// Apply autoScroll to these sections
		quangAndJess.autoScroll('story');
		quangAndJess.autoScroll('event');
		quangAndJess.autoScroll('registry');
		quangAndJess.autoScroll('rsvp');

		// Position status message above form
		var messagesDiv = $('.front .drupal-messages').html();
		$('.front .drupal-messages').remove();
		$('#rsvp').before(messagesDiv);

		// Close status messages on click
		$('.messages').click( function() {
			$(this).hide();
		});

	});

	quangAndJess.autoScroll = function(sectionName) {
			// Scroll to the sectionName div and activate the menu item
				var destinationScroll = null;
				var locationString = window.location.search;
				var pattern = new RegExp(sectionName, 'i');
				var matchLocation = locationString.match(pattern);
				if (matchLocation == sectionName ) {
					if ($(window).width() >= 600) {
						destinationScroll = $('#main-content').scrollTop() + ($('#' + sectionName).offset().top - $('#main-content').offset().top) - 150;
					$('#main-content').scrollTop(destinationScroll);
					$('.' + sectionName + '-hover').css({ display:'block', opacity: 1});
				}
					else {
						destinationScroll = $('#' + sectionName).position().top - 50;
						$('html,body').scrollTop(destinationScroll);
					}
				}
		};

	quangAndJess.sectionImages = {
		'intro-section': 'proposal.jpg',
		'story': 'santamonica.jpg',
		'uscPic': 'couplepic2.jpg',
		'proposalPic': 'proposal2.jpg',
		'event': 'bently.jpg',
		'registry': 'weddingpic.jpg',
		'rsvp': 'names.jpg'
	};

	
	var targetPosition = null;

	quangAndJess.windowScroll = function(event) {
		for (var key in quangAndJess.sectionImages) {
			if (key === 'intro-section') {
				targetPosition = $('#' + key).offset().top;
			} else {
				targetPosition = $('#' + key).offset().top - 150;
			}
			if (targetPosition >= 0 && targetPosition <= 10 ) {
				$('.left-col-background-image').prepend('<img src="/sites/all/themes/qandj2/img/' + quangAndJess.sectionImages[key] + '">');
				$('.left-col-background-image img').last().fadeOut('slow', function() {
					$('.left-col-background-image img:not(:first)').remove();
				});
				
			}
		}
	};

	$('#main-content').scroll(function(event) {
       quangAndJess.windowScroll(event);
    });

	

}(window.quangAndJess = window.quangAndJess || {},jQuery));
