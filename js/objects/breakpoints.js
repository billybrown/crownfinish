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


