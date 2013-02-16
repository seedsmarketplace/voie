define([
    'jquery',
    'underscore',
    'backbone',
    'utils',
    'domainControllers/baseController'
], function($, _, Backbone,utils,BaseControllers){

	var EmpPortalController = BaseControllers.extend({
		
		init : function(){
			this.authorizedRoles = ["EMP"]; 
		},
		
		
		getViewDetails : function(page,params){
			
		}
	});
	return new EmpPortalController();	  
});
