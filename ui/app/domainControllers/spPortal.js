define([
    'jquery',
    'underscore',
    'backbone',
    'utils',
    'domainControllers/baseController',
    'views/sp/defaultLayout',
    //'views/js/jsDashboard',
    //'views/js/careerPath'
], function($, _, Backbone,utils, BaseController,DefaultLayoutDef
		//,JSDashbaordView,CareerPathView
		){

	var ExpPortalController = BaseController.extend({
		
		init : function(){
			this.authorizedRoles = ["SP"]; 
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
	return new ExpPortalController();	  
});
