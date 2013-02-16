define([
  'jquery',
  'underscore',
  'backbone',
  'backboneExt',
  'utils',
  'navigation',
  'models/appState',
], function($, _, Backbone,backboneExt,utils,navigationIns,appStateIns){
	
	var JSDashboardView = backboneExt.SeedsView.extend({
		
		name : "JSDashboardView",
		
		
		templateName : 'js/jsDashboard',
		
		initialize : function(){
			_.bindAll(this);
		},
		
		render : function(){
			this.onDataReady();
			return this;
		},
		
		onDataReady : function(){
			this.renderTemplate({
				appState : appStateIns.toJSON(),
			});
		},
		
		onRenderComplete : function(){
		},
	});
		
	return JSDashboardView;
	  
});
