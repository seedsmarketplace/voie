define([
  'jquery',
  'underscore',
  'backbone',
  'backboneExt'
], function($, _, Backbone,backboneExt){

		var JobGradeModel = backboneExt.SeedsModel.extend({
			idAttribute : "code",
			url : function(params){
				params = params || {};
				return "seeds/service/get_job_grade/"+params.code;
			}
		});
		
		var JobGradeCollection = backboneExt.SeedsCollection.extend({
			model : JobGradeModel,
			url : function(params){
				params = params || {};
				return "seeds/service/get_job_grades";
			}
			
		 });	
		
		return {
			JobGradeModel : JobGradeModel,
			JobGradeCollection : JobGradeCollection
		};
	
});