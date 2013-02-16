define([
    'jquery',
    'underscore',
    'backbone',
    'utils',
    'domainControllers/baseController'
], function($, _, Backbone,utils, BaseController){

	var ExpPortalController = BaseController.extend({
		
		init : function(){
			this.authorizedRoles = ["EXP"]; 
		},
		
		
		getViewDetails : function(page,params){
			
		}
	});
	return new ExpPortalController();	  
});
