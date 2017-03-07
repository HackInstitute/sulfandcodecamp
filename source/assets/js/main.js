;(function(){

	$('#cta-main-page-link').click(function(event) {
	 	ga('send', 'event', 'registration', 'click', 'Call To Action Button Landingpage');
	});

	$('#menu-registration-link').click(function(event) {
	 	ga('send', 'event', 'registration', 'click', 'Menu Registration Click');
	});

	$('#cta-subpage-link').click(function(event) {
	 	ga('send', 'event', 'registration', 'click', 'Call To Action Button Subpage');
	});

})(jQuery)
