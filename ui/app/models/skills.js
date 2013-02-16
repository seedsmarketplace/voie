define([
  'jquery',
  'underscore',
  'backbone',
  'backboneExt'
], function($, _, Backbone,backboneExt){

		var SkillModel = backboneExt.SeedsModel.extend({
			idAttribute : "code",
			url : function(params){
				params = params || {};
				return "seeds/service/get_saq/"+params.code;
			}
		});
		
		var SkillCollection = backboneExt.SeedsCollection.extend({
			model : SkillModel,
			url : function(params){
				params = params || {};
				return "seeds/service/get_saqs";
			}
			
		 });	
		
		return {
			SkillModel : SkillModel,
			SkillCollection : SkillCollection
		};
	
});