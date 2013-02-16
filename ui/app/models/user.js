define([
  'jquery',
  'underscore',
  'backbone',
  'backboneExt'
], function($, _, Backbone,backboneExt){

		var UserModel = backboneExt.SeedsModel.extend({
			idAttribute : "username",
			url : function(params){
				params = params || {};
				return "seeds/service/get_user/"+params.username;
			}
		});
		
		var UserCollection = backboneExt.SeedsCollection.extend({
			model : UserModel
		 });
		
		return {
			UserModel : UserModel,
			UserCollection : UserCollection
		};
	
});