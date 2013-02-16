define([
  'jquery',
  'underscore',
  'backbone',
  'backboneExt'
], function($, _, Backbone,backboneExt){

		var SAQModel = backboneExt.SeedsModel.extend({
			idAttribute : "code",
			url : function(params){
				params = params || {};
				return "seeds/service/get_saq/"+params.code;
			}
		});
		
		var SAQCollection = backboneExt.SeedsCollection.extend({
			model : SAQModel,
			url : function(params){
				params = params || {};
				return "seeds/service/get_saqs";
			}
			
		 });	
		
		return {
			SAQModel : SAQModel,
			SAQCollection : SAQCollection
		};
	
});