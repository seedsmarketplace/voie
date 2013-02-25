define([
    'jquery',
    'underscore',
    'backbone',
    'utils',
    'domainControllers/baseController',
    'views/js/defaultLayout',
    'views/js/jsDashboard',
    'views/js/careerPath',
    'views/js/browseCourses',
    'views/js/profile',
    'views/js/jobs'
], function($, _, Backbone,utils, BaseController,DefaultLayoutDef,JSDashbaordView,CareerPathView,BrowseCoursesView,ProfileView,JobsView){

	var JsPortalController = BaseController.extend({
		
		init : function(){
			this.authorizedRoles = ["JS"]; 
		},
		
		getViewDetails : function(page,params){
			var pageViewDef = JSDashbaordView;
			var layoutViewDef = DefaultLayoutDef;
			if(page.name == "jsCareer"){
				pageViewDef = CareerPathView;
			}
			else if(page.name == "partners"){
				pageViewDef = PartnersViewDef;
			}
			else if(page.name == "jsCourses"){
				pageViewDef = BrowseCoursesView;
			}
			else if(page.name == "jsProfile"){
				pageViewDef = ProfileView;
			}else if(page.name == "jsJobs"){
				pageViewDef = JobsView;
			}
			return {
				pageViewDef : pageViewDef,
				layoutViewDef : layoutViewDef,
				data : {},
				context : {}
			};
		}
	});
	return new JsPortalController();	  
});
