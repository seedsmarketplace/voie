define([
  'jquery',
  'underscore',
  'backbone',
  'backboneExt',
  'utils',
  'navigation',
  'models/appState',
], function($, _, Backbone,backboneExt,utils,navigationIns,appStateIns){
	
	var LoginSignup = backboneExt.SeedsView.extend({
		
		name : "LoginSignup",
		
		targetElSelector : ".content-main",
		
		templateName : 'website/loginSignupLayout',
		
		initialize : function(){
			_.bindAll(this);
		},
		
		render : function(){
			this.renderTemplate({
				appState : appStateIns.toJSON(),
				navigation : navigationIns
			});
			return this;
		},
		
		onRenderComplete : function(){
		}

	 });
	
	return LoginSignup;
	  
});
