// This deploys the pic rows

var picrow = {
	onReady: function($button_next, $button_prev, $slider, $slides) {
		var slides ={
			amount: 7,
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


