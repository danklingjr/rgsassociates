jQuery(document).ready(function($) {

	
	if($('#map_canvas').length >0){
	
		if($('.page-id-65').length >0){
			var map = new google.maps.Map(document.getElementById('map_canvas'), {
		      zoom: 14,
		      center: new google.maps.LatLng(40.045873,-76.308974),
		      mapTypeId: google.maps.MapTypeId.ROADMAP
		    });
		    marker = new google.maps.Marker({
		        position: new google.maps.LatLng(40.045873,-76.308974),
		        map: map
		      });
		}
		else if($('.page-id-67').length >0){
			var map = new google.maps.Map(document.getElementById('map_canvas'), {
		      zoom: 15,
		      center: new google.maps.LatLng(39.964351,-76.728719),
		      mapTypeId: google.maps.MapTypeId.ROADMAP
		    });
		     marker = new google.maps.Marker({
		        position: new google.maps.LatLng(39.964351,-76.728719),
		        map: map
		      });
		}
		
	}
	
	if($('.single-rgs_casestudy').length >0){
		var visiblePopover;
	
		// enable popovers - all of mine in this instance have a class of .hov
		$(".po").popover({ 'container': 'body', 'animation': true });
		
		// only allow 1 popover at a time
		// all my popovers hav
		$('.po').on('click', function(e) {
		    // don't fall through
		    e.stopPropagation();
		    var $this = $(this);
		    // check if the one clicked is now shown
		    if ($this.data('popover').tip().hasClass('in')) {
		        // if another was showing, hide it
		        visiblePopover && visiblePopover.popover('hide');
		        // then store the current popover
		        visiblePopover = $this;
		    } else {
		        // if it was hidden, then nothing must be showing
		        visiblePopover = '';
		    }
		});
		
		// hide all popovers if any non-popover part of the body is clicked
		$("body").on('click', function () {
		    $(".po").popover('hide');
		    visiblePopover = '';
		});
	}
	if($('.home .rslides img').length >1){
		$(".home .rslides").responsiveSlides({
		  auto: true,             // Boolean: Animate automatically, true or false
		  speed: 500,            // Integer: Speed of the transition, in milliseconds
		  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
		  pager: true,           // Boolean: Show pager, true or false
		  nav: true,             // Boolean: Show navigation, true or false
		  random: false,          // Boolean: Randomize the order of the slides, true or false
		  pause: false,           // Boolean: Pause on hover, true or false
		  pauseControls: false,    // Boolean: Pause when hovering controls, true or false
		  prevText: "Prev",   // String: Text for the "previous" button
		  nextText: "Next",       // String: Text for the "next" button
		  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
		  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
		  manualControls: "",     // Selector: Declare custom pager navigation
		  namespace: "rslides",   // String: Change the default namespace used
		  before: function(){},   // Function: Before callback
		  after: function(){}     // Function: After callback
		});
		
	}
	if($('.single-rgs_casestudy .rslides img').length >1){
		$(".single-rgs_casestudy .rslides").responsiveSlides({
		  auto: true,             // Boolean: Animate automatically, true or false
		  speed: 500,            // Integer: Speed of the transition, in milliseconds
		  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
		  pager: false,           // Boolean: Show pager, true or false
		  nav: true,             // Boolean: Show navigation, true or false
		  random: false,          // Boolean: Randomize the order of the slides, true or false
		  pause: false,           // Boolean: Pause on hover, true or false
		  pauseControls: false,    // Boolean: Pause when hovering controls, true or false
		  prevText: "",   // String: Text for the "previous" button
		  nextText: "",       // String: Text for the "next" button
		  maxwidth: "",           // Integer: Max-width of the slideshow, in pixels
		  navContainer: "",       // Selector: Where controls should be appended to, default is after the 'ul'
		  manualControls: "",     // Selector: Declare custom pager navigation
		  namespace: "rslides",   // String: Change the default namespace used
		  before: function(){},   // Function: Before callback
		  after: function(){}     // Function: After callback
		});
	}
});


