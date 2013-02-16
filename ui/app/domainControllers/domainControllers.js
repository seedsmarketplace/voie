define([
    'jquery',
    'underscore',
    'backbone',
    'utils',
    "models/appState",
    'domainControllers/website',
    'domainControllers/jsPortal',
    'domainControllers/empPortal',
    'domainControllers/expPortal',
    'domainControllers/spPortal',
    'domainControllers/adminPortal',
], function($, _, Backbone,utils,appStateIns,WebSiteControllerIns,JsPortalControllerIns,EmpPortalControllerIns,
		ExpPortalControllerIns,SpPortalControllerIns,AdminPortalControllerIns){
	
	var getController = function(domain){
		var controller = null;
		switch (domain){
		case "webSite" :
			controller = WebSiteControllerIns;
			break;
		case "jsPortal" :
			controller = JsPortalControllerIns;
			break;
		case "spPortal" : 
			controller = SpPortalControllerIns;
			break;
		case "empPortal" : 
			controller = EmpPortalControllerIns;
			break;
		case "expPortal" : 
			controller = ExpPortalControllerins;
			break;
		case "adminPortal" : 
			controller = AdminPortalControllerIns;
			break;
		default : 
			controller = WebSiteControllerIns;
		}
		return controller;
	};
	
	return {
		getController: getController
	};
	
});