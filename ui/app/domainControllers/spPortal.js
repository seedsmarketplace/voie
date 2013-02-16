define([
    'jquery',
    'underscore',
    'backbone',
    'utils',
    'domainControllers/baseController'
], function($, _, Backbone,utils,BaseController){

	var SpPortalController = BaseController.extend({
		
		init : function(){
			this.authorizedRoles = ["SP"]; 
		},
		
		
		getViewDetails : function(page,params){
			
		}
	});
	return new SpPortalController();	  
});
