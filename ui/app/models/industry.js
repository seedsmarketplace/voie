define([
  'jquery',
  'underscore',
  'backbone',
  'backboneExt'
], function($, _, Backbone,backboneExt){

		var IndustryModel = backboneExt.SeedsModel.extend({
			idAttribute : "code",
			url : function(params){
				params = params || {};
				return "seeds/service/get_industry/"+params.code;
			}
		});
		
		var IndustryCollection = backboneExt.SeedsCollection.extend({
			model : IndustryModel,
			url : function(params){
				params = params || {};
				return "seeds/service/get_industries";
			}
			
		 });	
		
		return {
			IndustryModel : CategoryModel,
			IndustryCollection : IndustryCollection
		};
	
});