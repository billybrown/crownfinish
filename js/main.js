
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