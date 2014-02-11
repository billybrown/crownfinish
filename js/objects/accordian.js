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


