define([
    'jquery',
    'underscore',
    'backbone',
    'utils',
    'domainControllers/baseController',
    'views/emp/defaultLayout',
    'views/emp/empDashboard',
    'views/emp/findProspects',
    'views/emp/jobs',
    'views/emp/profile'
], function($, _, Backbone,utils, BaseController,DefaultLayoutDef
		,EmpDashbaordView,FindProspects,Jobs,Profile
		){

	var EmpPortalController = BaseController.extend({
		
		init : function(){
			this.authorizedRoles = ["EMP"]; 
		},
		
		getViewDetails : function(page,params){
			var pageViewDef = EmpDashbaordView;
			var layoutViewDef = DefaultLayoutDef;
			if (page.name == "empDashboard") {
				pageViewDef = EmpDashbaordView;
			} else if (page.name == "empFindProspects") {
				pageViewDef = FindProspects;
			} else if (page.name == "empAddPosition") {
				pageViewDef = Jobs;
			} else if (page.name == "empProfile") {
				pageViewDef = Profile;
			}
			
			return {
				pageViewDef : pageViewDef,
				layoutViewDef : layoutViewDef,
				data : {},
				context : {}
			};
		}
	});
	return new EmpPortalController();	  
});
