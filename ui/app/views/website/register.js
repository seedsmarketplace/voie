define([
  'jquery',
  'underscore',
  'backbone',
  'backboneExt',
  'utils',
  'navigation',
  'models/appState',
  'models/user'
], function($, _, Backbone,backboneExt,utils,navigationIns,appStateIns,user){
	
	var LoginView = backboneExt.SeedsView.extend({
		
		name : "Register",
		
		
		templateName : 'website/register',
		
		events : {
			"click #cancel" : "_cancelLogin",
			"click #submit" : "_submitLogin",
		},
		
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
		
		_cancelLogin : function(){
			Backbone.history.navigate("#home/",true);
		},
		
		_submitLogin : function(){
			if(!utils.Validate.validateAll())
				return;
			$(".form-container").hide();
			
			$(".msg").html("<p>Thanks for registering with SEEDS Market Place.</p>").show();
		},
		

		
	});
		
	return LoginView;
	  
});
