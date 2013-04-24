define([
    'jquery',
    'underscore',
    'backbone',
    'utils',
    'domainControllers/baseController',
    'views/sp/defaultLayout',
    'views/sp/spDashboard',
    'views/sp/enrollments',
    'views/sp/addProfile',
    'views/sp/manageCourses',
    'views/sp/newUserLayout',
    'views/sp/profile'
], function($, _, Backbone,utils, BaseController,DefaultLayoutDef
		,SPDashbaordView,EnrollmentsView,AddProfileView,ManageCoursesView,NewUserLayoutDef,ProfileView
		){

	var ExpPortalController = BaseController.extend({
		
		init : function(){
			this.authorizedRoles = ["SP"]; 
		},
		
	/*	getViewDetails : function(page,params){
			//var pageViewDef = JSDashbaordView;
			var layoutViewDef = DefaultLayoutDef;
			if(page.name == "jsCareer"){
				pageViewDef = CareerPathView;
			}
			else if(page.name == "partners"){
				pageViewDef = PartnersViewDef;
			}
			
			return {
				//pageViewDef : pageViewDef,
				layoutViewDef : layoutViewDef,
				data : {},
				context : {}
			};
		}*/
		
		getViewDetails : function(page,params){
			var pageViewDef = SPDashbaordView;
			var layoutViewDef = DefaultLayoutDef;
			if(page.name == "spAddProfile"){
				pageViewDef = AddProfileView;
				layoutViewDef = NewUserLayoutDef;
			}
			else if(page.name == "spEnrollments"){
				pageViewDef = EnrollmentsView;
			}
			else if(page.name == "spCourses"){
				pageViewDef = ManageCoursesView;
			}
			else if(page.name == "spProfile"){
				pageViewDef = ProfileView;
			}
			return {
				pageViewDef : pageViewDef,
				layoutViewDef : layoutViewDef,
				data : {},
				context : {}
			};
		}
		
		
	});
	return new ExpPortalController();	  
});
