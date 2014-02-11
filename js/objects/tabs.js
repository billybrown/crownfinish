


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
