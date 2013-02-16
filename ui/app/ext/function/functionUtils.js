// Add some types into function
define([
  'jquery'
], function($) {

	$.extend(Function.prototype, {
		createInterceptor : function(fcn, scope) {
			var method = this;
			return !toString.apply(fcn) === '[object Function]' ? this : function() {
				var me = this, args = arguments;
				fcn.target = me;
				fcn.method = method;
				return (fcn.apply(scope || me || window, args) !== false) ? method.apply(me || window, args) : null;
			};
		},
	
		createCallback : function(/* args... */) {
			// make args available, in function below
			var args = arguments, method = this;
			return function() {
				return method.apply(window, args);
			};
		},
	
		createDelegate : function(obj, args, appendArgs) {
			var method = this;
			return function() {
				var callArgs = args || arguments;
				if (appendArgs === true) {
					callArgs = Array.prototype.slice.call(arguments, 0);
					callArgs = callArgs.concat(args);
				} else if (typeof appendArgs === 'number') {
					callArgs = Array.prototype.slice.call(arguments, 0); // copy arguments first
					var applyArgs = [ appendArgs, 0 ].concat(args); // create method call params
					Array.prototype.splice.apply(callArgs, applyArgs); // splice them in
				}
				return method.apply(obj || window, callArgs);
			};
		},
	
		defer : function(millis, obj, args, appendArgs) {
			millis = millis || 0;
			var fn = this.createDelegate(obj, args, appendArgs);
			return setTimeout(fn, millis);
		},
	
		createSequence : function(fcn, scope) {
			var method = this;
			return (typeof fcn != 'function') ? this : function() {
				var retval = method.apply(this || window, arguments);
				fcn.apply(scope || this || window, arguments);
				return retval;
			};
		}
		
	});
	
	$.fn.outerHtml = function(){
		if (this.length){
			var div = $('<div style="display:none"></div>');
			var clone = $(this[0].cloneNode(false)).html(this.html()).appendTo(div);
			var outer = div.html();
			div.remove();
			return outer;
		}
		else {
			return null;
		};
	}	
});
