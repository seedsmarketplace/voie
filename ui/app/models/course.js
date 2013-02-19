define([
  'jquery',
  'underscore',
  'backbone',
  'backboneExt'
], function($, _, Backbone,backboneExt){

		var CourseModel = backboneExt.SeedsModel.extend({
			idAttribute : "code",
			url : function(params){
				params = params || {};
				return "seeds/service/get_course/"+params.code;
			}
		});
		
		var CourseCollection = backboneExt.SeedsCollection.extend({
			model : CourseModel,
			url : function(params){
				params = params || {};
				return "seeds/service/get_courses";
			},
			
			
		 });	
		
		return {
			CourseModel : CourseModel,
			CourseCollection : CourseCollection
		};
	
});