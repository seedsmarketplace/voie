define([
  'jquery',
  'underscore',
  'backbone',
  'backboneExt'
], function($, _, Backbone,backboneExt){

		var CategoryModel = backboneExt.SeedsModel.extend({
			idAttribute : "code",
			url : function(params){
				params = params || {};
				return "seeds/service/get_category/"+params.code;
			}
		});
		
		var CategoryCollection = backboneExt.SeedsCollection.extend({
			model : CategoryModel,
			url : function(params){
				params = params || {};
				return "seeds/service/get_categories/"+params.industryCode;
			}
			
		 });	
		
		return {
			CategoryModel : CategoryModel,
			CategoryCollection : CategoryCollection
		};
	
});