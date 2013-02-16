define([
  'jquery',
  'underscore',
  'backbone',
  'backboneExt',
  'utils',
  'navigation',
  'models/appState',
], function($, _, Backbone,backboneExt,utils,navigationIns,appStateIns){
	
	var HomeView = backboneExt.SeedsView.extend({
		
		name : "HomeView",
		
		
		templateName : 'website/home',
		
		initialize : function(){
			_.bindAll(this);
		},
		
		render : function(){
			this.renderTemplate({
				appState : appStateIns.toJSON(),
			});
			return this;
		},
		
		onRenderComplete : function(){
		},
	});
		
	return HomeView;
	  
});
