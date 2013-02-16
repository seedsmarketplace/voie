define([
   
  // Libraries.
  "jquery",
  "underscore",
  "backbone",
  "handlebars",
  
  //Extensions
  "fnUtils",
  "handlebarHelpers",
  
  //Utilities
  "utils",
  
  //Base Module
  "baseModule",
  
  //Layouts
  "defaultLayout",
  "abridgedLayout",
  
],

function($, _, Backbone, Handlebars,FunctionUtils,HandlebarHelpers,utils,BaseModule,DefaultLayoutDef,AbridgedLayoutDef) {
	
	
  
  //Module Registry
  var modules = {};
  
  var delegateToLayout = function(layout,moduleIns,page,params){
	  layout.showPage(moduleIns,page,params);
  };
  
	
  // Provide a global location to place configuration settings and module
  // creation.
  var app = {
    // The root path to run the application.
    root: "/",
    
    currentLayoutView : null,
    currentLayoutViewName : null,
    
    layouts : {
    	"default" : DefaultLayoutDef,
    	"abridged" : AbridgedLayoutDef,
    },
    
    renderLayout : function(layoutViewName){
    	//var currentLayoutView = null;
    	if(!this.currentLayoutViewName || this.currentLayoutViewName != layoutViewName){
    		
    		//Write destroy code
    		var LayoutViewDef = this.layouts[layoutViewName];
    		this.currentLayoutView = utils.RenderUtil.renderFragmentTo(LayoutViewDef,null,{el:$("#main")});
        	this.currentLayoutViewName = layoutViewName;
    		
    	}
    	//return currentLayoutView;
    },
    
    navigateTo : function(page,params){
    	this.renderLayout(page.get("layout"));
    	var that = this;
    	//Ensure module is loaded
		var moduleIns = modules[page.get("module")];
    	if(!moduleIns){
    		//Load Module
    		utils.Logger.info("***********Module missing..Loading " + page.get("module"));
    		require(["modules/" + page.get("module")],(function(ModuleDef){
        		if(!ModuleDef){
        			throw "Unable to load module " + page.get("module");
        		}
        		moduleIns = new ModuleDef();
        		modules[page.get("module")] = moduleIns;
            	(function(){
            		delegateToLayout(that.currentLayoutView,moduleIns,page,params);
            	}).defer();
    		}).createDelegate(this));
    	}
    	else {
    		utils.Logger.info("***********Module loaded from cache " + page.get("module"));
        	(function(){
        		delegateToLayout(that.currentLayoutView,moduleIns,page,params);
        	}).defer(100); //UGLY -- Need to find a better way
    		

    	}
    },
    
    
  
  };
  
  // Mix Backbone.Events, and layout management into the app object.
  return _.extend(app, {}, Backbone.Events);

});
