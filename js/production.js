// This is a little script for sitewide accordians
//
// deploy inside your main.js file like so:
//
// 		accordian.onReady(".accordian-title");
//


var accordian = {
	onReady: function(element) {
		jQuery(element).click(this.slide);
	},
	slide: function(event) {
		jQuery(this).next().slideToggle('fast');
	}
}



// get the current media query size: http://adactio.com/journal/5429/
// The SASS for this is in scss/layouts/_wrappers.scss
//
//
// It exists so that we can conditionally load scripts based on media queries definied inside out CSS
// It sets a global variable that can be used in any other script on the site
//
// This site has the following media queries:
//		bp_small
//		bp_medium
//		bp_large
//
//
// And you can conditioanlly load content like so:
//
// 		if (bp_size.indexOf("bp_small") !=-1) {
//			whatever your loading on real small screens;
//		}
//
//		if ( (bp_size.indexOf("bp_medium") !=-1) || (bp_size.indexOf("bp_large") !=-1) ) {	
//			whatever your loading on medium screens and large screebs;
//		}



var breakpoints = {
	onReady: function() {
		bp_size = window.getComputedStyle(document.body,':after').getPropertyValue('content');
		if (bp_size.indexOf("bp_small") !=-1) {
			return "bp_small";
		} else if ( (bp_size.indexOf("bp_medium") !=-1) || (bp_size.indexOf("bp_large") !=-1) ) {	
			return "bp_big";
		}
	}
}



// This deploys the pic rows

var picrow = {
	onReady: function($button_next, $button_prev, $slider, $slides) {
		var slides ={
			amount: 10,
			width: 650,
			height: 500,
		};
		var slider = {
			width: slides.amount * slides.width,
			height: slides.height,
			distance: 0
		};

		jQuery($button_next).click(function() {
			if (slider.distance > (-1 * slider.width)) {
				slider.distance -= slides.width;
				jQuery($slider).css("margin-left", slider.distance);
				jQuery($button_prev).removeClass("greyed");
			} else {
				jQuery(this).addClass("greyed");
			}
		});
		jQuery($button_prev).click(function() {
			if (slider.distance < 0) {
				slider.distance += slides.width;
				jQuery($slider).css("margin-left", slider.distance);
				jQuery($button_next).removeClass("greyed");
			} else {
				jQuery(this).addClass("greyed");
			}
		});
	}
}






var tabs = {

    onReady: function(item) {
        jQuery(item).click(this.activate_label);
        jQuery(item).click(this.activate_tab);
    },
    activate_label: function(event) {
        jQuery(this).siblings().removeClass('active');
		jQuery(this).parents('.tabs').find('.tabs--pane').removeClass('active');
    },
    activate_tab: function(event) {
		var tabs_id = jQuery(this).attr('class');
		var tabs_id_pane = tabs_id.replace('-nav', '-pane');
		jQuery(this).parents('.tabs').find('.' + tabs_id_pane).addClass('active');
		jQuery(this).addClass('active');
    }
}


// define the breakpoint variable as a global because its gotta be used all over
var breakpoint;


///////////////////////////////////////////////////////////////////////////////////////
// stuff to do when the html gets loaded
///////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready( function() {
	// figure out what breakpoint/media query we are at
	// possible values are "bp_big" and "bp_small"
	breakpoint = breakpoints.onReady();

	// sitewide accordians
	accordian.onReady(
		".accordian-title"						// Accordian titles that when clicked trigger showing the content below
	);

	// sitewide tabs
	tabs.onReady(
		".tabs--nav li"							// Tab labels, that when clicked show appropriate tab content
	);

	// sitewide tabs
	picrow.onReady(
		".slider .next",							// button
		".slider .prev",							// button
		".slider .photos-container",							// button
		".slider .photos li"							// button
	);

	///////////////////////////////////////////////////////////////////////////////////////
	// stuff to do when the window gets resized
	///////////////////////////////////////////////////////////////////////////////////////
	jQuery(window).resize(function() {
		// store the old breakpoint
		var breakpoint_old = breakpoint;
		// define the new breakpoint
		breakpoint = breakpoints.onReady();

	});

});