define([
    'jquery',
    'underscore',
    'backbone',
    'utils',
    'domainControllers/baseController',
    'views/admin/defaultLayout',
    //'views/js/jsDashboard',
    //'views/js/careerPath'
], function($, _, Backbone,utils, BaseController,DefaultLayoutDef
		//,JSDashbaordView,CareerPathView
		){

	var AdminPortalController = BaseController.extend({
		
		init : function(){
			this.authorizedRoles = ["ADMIN"]; 
		},
		
		getViewDetails : function(page,params){
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
		}
	});
	return new AdminPortalController();	  
});
