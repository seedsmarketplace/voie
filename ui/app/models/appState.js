define([
  'jquery',
  'underscore',
  'backbone',
  'backboneExt',
  'models/user'
], function($, _, Backbone,backboneExt,user){

		var AppStateModelDef = backboneExt.SeedsModel.extend({
			
			url : function(){
				return "seeds/service/session";
			},
			
			parse : function(response){
				if(response.user){
					this.set({"user" : new user.UserModel(response.user)});
				}
				return this.attributes;
			}
			
		 });	
		
		return new AppStateModelDef();;
	
});