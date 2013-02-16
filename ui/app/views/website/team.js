define([
  'jquery',
  'underscore',
  'backbone',
  'backboneExt',
  'utils',
  'navigation',
  'models/appState',
], function($, _, Backbone,backboneExt,utils,navigationIns,appStateIns){
	
	var TeamView = backboneExt.SeedsView.extend({
		
		name : "TeamView",
		
		
		templateName : 'website/team',
		
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
		
	return TeamView;
	  
});
