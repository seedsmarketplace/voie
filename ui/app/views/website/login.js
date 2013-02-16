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
		
		name : "Login",
		
		
		templateName : 'website/login',
		
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
			var userIns = new user.UserModel();
			userIns.bind("change", this._checkCredentials,this);
			userIns.fetch({ urlParams: { username: $("#username").val()} });
		},
		
		_checkCredentials : function(userIns){
			if(userIns.get("username") == $("#username").val()
				&& userIns.get("password") == $("#password").val()){
				appStateIns.set({user:userIns},{silent : true});
				Backbone.history.navigate("",true);
			}
			else {
				alert("Invalid Credentials");
			}
			
		}
		
	});
		
	return LoginView;
	  
});
