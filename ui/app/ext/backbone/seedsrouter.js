define([
    'jquery',
    'underscore',
    'backbone',
], function($, _, Backbone,TemplateUtil,RenderUtil){
	 
	var SeedsRouter = Backbone.Router.extend({
		
		constructor : function(options){
			Backbone.Router.call(this, options);
		},
		
	 });

	 return SeedsRouter;
	  
});
