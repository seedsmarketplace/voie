define([
    'jquery',
    'underscore',
    'backbone',
    'utils',
    "models/appState",
    'domainControllers/baseController',
    'views/website/defaultLayout',
    'views/website/loginSignupLayout',
    'views/website/home',
    'views/website/mission',
    'views/website/partners',
    'views/website/team',
    'views/website/login','views/website/register'
], function($, _, Backbone,utils,
		appStateIns,
		BaseController,DefaultWebSiteLayout,LoginSignupLayout,
		HomeViewDef,MissionViewDef,PartnersViewDef,
		TeamViewDef,LoginViewDef,RegisterViewDef){

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
			else if(page.name == "logout"){
				appStateIns.set({user:null},{silent : true});
				Backbone.history.navigate("#home/",true);			
			}
			else if(page.name == "register"){
				pageViewDef = RegisterViewDef;
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
