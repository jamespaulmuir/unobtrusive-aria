(function( $ ) {
	$.fn.unobtrusiveAria = function(rules) {
		var ariaRules = $.extend( {}, rules);

		for (var selector in ariaRules) {
			var rules = ariaRules[selector];
			$(selector).each(function () {
				if (rules.hasOwnProperty("attributes")) {
					applyAttributes(this, rules.attributes);
				}
				if (rules.hasOwnProperty("events")) {
					applyEvents(this, rules.events);
				}
			})
		}

		function applyAttributes(el, attributes) {
			$.each(attributes, function (attr, val) {
				$(el).attr(attr, val);
			})
		}

		function applyEvents(el, events) {
			$.each(events, function (event, cb) {
				$(el).bind(event, cb);
			})
		}
	};
})( jQuery );