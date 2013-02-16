define([
    'jquery',
    'underscore',
    'backbone',
    'utils'
], function($, _, Backbone,utils){
	 
	var SeedsCollection = Backbone.Collection.extend({
		
		constructor : function(options){
			Backbone.Collection.call(this, options);
		},
		
		where : function(filter,convertToJson){
			var response = Backbone.Collection.prototype.where.call(this,filter);
			if(convertToJson){
				if(!response || response.length == 0){
					return response;
				}
				else {
					var jsonResponse = [];
					_.each(response,function(item){
						jsonResponse.push(item.toJSON());
					});
					return jsonResponse;
				}

			}
			else {
				return response;
			}
		},
		
		sync: function(method, model, options) {
			options = options || {};
			if(options.urlParams && typeof model.url =="function"){
				options.url = model.url(options.urlParams);
			}
		    Backbone.sync(method, model, options);
		 }	
	 });

	 return SeedsCollection;
	  
});
