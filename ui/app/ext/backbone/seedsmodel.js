define([
    'jquery',
    'underscore',
    'backbone',
    'utils'
], function($, _, Backbone,utils){
	 
	var SeedsModel = Backbone.Model.extend({
		
		constructor : function(options){
			utils.Logger.info("Instantiating model "  );
			Backbone.Model.call(this, options);
		},
		
		set : function(key,value,options){
			if (_.isObject(key) || key == null) {
		        options = value;
		    } 			
			options = options || {};
			options.error = function(error){
				alert("Error is " + error);
				throw error;
			};
			if (_.isObject(key) || key == null) {
				Backbone.Model.prototype.set.call(this, key,options);
			}
			else {
				Backbone.Model.prototype.set.call(this, key,value,options);
			}
			
		},
		
		save : function(key,value,options){
			if (_.isObject(key) || key == null) {
		        options = value;
		    } 
			options =  options || {};
			options.error = function(model,error){
				throw error;
			};
			if (_.isObject(key) || key == null) {
				Backbone.Model.prototype.save.call(this, key,options);
			}
			else {
				Backbone.Model.prototype.save.call(this, key,value,options);
			}
			
		},
		
		sync: function(method, model, options) {
			options = options || {};
			if(options.urlParams && typeof model.url =="function"){
				options.url = model.url(options.urlParams);
			}
		    Backbone.sync(method, model, options);
		 },
		 
		 toJSON: function() {
			    var obj = _.clone(this.attributes);
			    _.each(_.keys(obj), function(key) {
			      if(!_.isUndefined(obj[key]) && !_.isNull(obj[key]) && _.isFunction(obj[key].toJSON)) {
			        obj[key] = obj[key].toJSON();
			      }
			    });
			    return obj;
		 }		 
		
		
	 });

	 return SeedsModel;
	  
});
