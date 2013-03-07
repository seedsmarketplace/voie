define([
  'jquery',
  'underscore',
  'backbone',
  'backboneExt',
  'utils',
  'navigation',
  'models/appState',
], function($, _, Backbone,backboneExt,utils,navigationIns,appStateIns){
	
	var MissionView = backboneExt.SeedsView.extend({
		
		name : "FindSponsorView",
		
		
		templateName : 'website/findSponsor',
		
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
		
	return MissionView;
	  
});
