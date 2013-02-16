define([
  'jquery',
  'underscore',
  'backbone',
  'backboneExt'
], function($, _, Backbone,backboneExt){

		var JobModel = backboneExt.SeedsModel.extend({
			idAttribute : "code",
			url : function(params){
				params = params || {};
				return "seeds/service/get_job/"+params.code;
			}
		});
		
		var JobCollection = backboneExt.SeedsCollection.extend({
			model : JobModel,
			url : function(params){
				params = params || {};
				return "seeds/service/get_jobs";
			}
			
		 });	
		
		return {
			JobModel : JobModel,
			JobCollection : JobCollection
		};
	
});