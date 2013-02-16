define([
    'jquery',
    'underscore',
    'backbone',
    'utils',
    'domainControllers/baseController',
    'views/website/defaultLayout',
    'views/website/loginSignupLayout',
    'views/website/home',
    'views/website/mission',
    'views/website/partners',
    'views/website/team',
    'views/website/login',
], function($, _, Backbone,utils,BaseController,DefaultWebSiteLayout,LoginSignupLayout,
		HomeViewDef,MissionViewDef,PartnersViewDef,
		TeamViewDef,LoginViewDef){

	var WebSiteController = BaseController.extend({
		
		init : function(){
			this.authorizedRoles = ["*"]; 
		},
		
		
		getViewDetails : function(page,params){
			var pageViewDef = HomeViewDef;
			var layoutViewDef = DefaultWebSiteLayout;
			if(page.name == "mission"){
				pageViewDef = MissionViewDef;
			}
			else if(page.name == "partners"){
				pageViewDef = PartnersViewDef;
			}
			else if(page.name == "team"){
				pageViewDef = TeamViewDef;
			}
			else if(page.name == "login"){
				pageViewDef = LoginViewDef;
				layoutViewDef = LoginSignupLayout;
			}
			
			return {
				pageViewDef : pageViewDef,
				layoutViewDef : layoutViewDef,
				data : {},
				context : {}
			};
		}
	});
	return new WebSiteController();	  
});
