define([
    'jquery',
    'underscore',
    'backbone',
    'utils',
    'models/appState',
], function($, _, Backbone,utils,appStateIns){

	var currentLayoutView = null;
	var currentLayout = null;
	
	
	var BaseController = utils.Class.extend({
		
		
		init : function(){
			//Initialization Code
			this.authorizedRoles = []; //Override in Domain Controllers
		},
		
		name : "BaseModule",
		
		handlePageRequest : function(page,params){
			var userRoles = (appStateIns.get("user") != null && appStateIns.get("user").get("roles")!=null)?appStateIns.get("user").get("roles"):["GUEST"];			
			var isUserAuthorized = false;
			if($.inArray("ADMIN",userRoles) > -1 ){
				isUserAuthorized = true;
			}
			else {
				$.each(this.authorizedRoles,function(index,authorizedRole){
					if(authorizedRole == "*" || $.inArray(authorizedRole,userRoles) > -1){
						isUserAuthorized = true;
						return;
					}
				});
			}
			if(!isUserAuthorized){
				Backbone.history.navigate("#login/#"+page.path,true);//Send to unauthorized
				return;
			}
			
			var paramsArr = params?params.split("/"):[];
			var desiredPageDetails = this.getViewDetails(page,paramsArr);
			if(desiredPageDetails.layoutViewDef != currentLayoutView){
			  currentLayout = utils.RenderUtil.renderView(desiredPageDetails.layoutViewDef,{domain : page.domain},{el : $("body")});
			  currentLayoutView = desiredPageDetails.layoutViewDef;
			}
			if(currentLayout.beforeShowPage){
				currentLayout.beforeShowPage(page);
			}

			(function(){
				  this.showPage(page,params,currentLayout.targetElSelector,desiredPageDetails);
			}).defer(100,this);
		},
		
		showPage : function(page,params,layoutTargetElSelector,desiredPageDetails){
			var $layoutTargetEl = $(layoutTargetElSelector);
			var context = desiredPageDetails.context || {};
			context.el = $layoutTargetEl;
			return utils.RenderUtil.renderView(desiredPageDetails.pageViewDef,desiredPageDetails.data,context);
		},
	
	});
	
	return BaseController;	  
});



