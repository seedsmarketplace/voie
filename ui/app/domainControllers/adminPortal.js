define([
    'jquery',
    'underscore',
    'backbone',
    'utils',
    "models/appState",
    'domainControllers/baseController'
], function($, _, Backbone,utils,appStateIns,BaseController){

	var AdminPortalController = BaseController.extend({
		
		init : function(){
			this.authorizedRoles = ["ADMIN"]; 
		},
 
		getViewDetails : function(page,params){
			
			
		}
			
		
	});
	return new AdminPortalController();	  
});
