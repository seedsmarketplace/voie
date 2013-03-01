require([
 "fnUtils",
 "handlebarHelpers",
 
 "jqueryUI",
 "lightBox",
 "treeView",
// "jqueryUIWidget",
// "jqueryUIAccordion",
// "jqueryEffects",
// "jqueryEffectsSlide",
// "jquerySlider",
// "jqueryMouse",
// 
// "jqueryJQPlot",
// "jqueryJQPlotBarRenderer",
// "jqueryJQPlotPilotRenderer",
// "jqueryJQAxisRenderer",
// "jqueryJQHighlighter",
// "jqueryJQLabels",
// 
  "router",
  "utils",
  "models/appState",
  "navigation",
  "domainControllers/domainControllers"
],

function(fnUtils,handlebarHelpers,jqueryUI,lightBox,treeView,
		//a,b,c,d,e,f,g,
		//f,g,h,i,j,k,
		Router,utils,appStateIns,navigationIns,DomainControllers) {

  // Override Backbone Sync Method to load API data locally 
  if(window.APP_MODE  && window.APP_MODE == "TEST"){
	  Backbone.sync = function(method, model, options) {
	  try {
		  var response = SeedData.on(method,model,options);
		  setTimeout(function(){options.success(response);},100); //Simulate Async
	  }
	  catch(e){
		  setTimeout(function(){options.error(e);},100); //Simulate Async
	  }
	};
  }	
	
  var startApplication = function(){
	  //Backbone.history.start({ pushState: true, root: app.root });
	  (function(){
		  Backbone.history.start();
	  }).defer(0);
  };
  
  
  var navigateTo = function(page,params){
	  var domain = null;
	  if(page){
		  domain = page.domain;
		  DomainControllers.getController(domain).handlePageRequest(page,params);
		  return;
	  }
	  else {
		  if(appStateIns.get("user") != null) {
			  var roles = appStateIns.get("user").get("roles")||["GUEST"];
			  var profileStatus=appStateIns.get("user").get("profileStatus");
			  utils.Logger.info("profileStatus : "+profileStatus);
			  if($.inArray("JS",roles) > -1){
				  if(profileStatus){
				  Backbone.history.navigate("#js/dashboard/",true);
				  }else{
					  Backbone.history.navigate("#js/addProfile/",true);  
				  }
				  
				  return;
			  }
			  else if($.inArray("EMP",roles) > -1){
				  if(profileStatus){
				  Backbone.history.navigate("#emp/dashboard/",true);
				  }else{
					  Backbone.history.navigate("#emp/addProfile/",true);  
				  }
				  return;
			  }
			  else if($.inArray("EXP",roles) > -1){
				  Backbone.history.navigate("#exp/dashboard/",true);
				  return;
			  }
			  else if($.inArray("SP",roles) > -1){
				  Backbone.history.navigate("#sp/dashboard/",true);
				  return;
			  }
			  else if($.inArray("ADMIN",roles) > -1){
				  Backbone.history.navigate("#admin/dashboard/",true);
				  return;
			  }
		  }
		  Backbone.history.navigate("#home",true);
	  }
  };

  var appRouterIns = new Router();
  appRouterIns.on('route:default', function(params){
	  utils.Logger.info("Handling Route 'route:default");
      navigateTo(null,params);
  });
  
  $.each(navigationIns.paths,function(index,page){
	  utils.Logger.info("Registering 'route:" + page.path +"'");
	  appRouterIns.on('route:'+page.name, function(params){
		  utils.Logger.info("Handling Route 'route:" + page.path+ "'" );
	      navigateTo(page,params);
	   });
  });
  
  appStateIns.bind("change", startApplication,this);
  appStateIns.fetch();

});
