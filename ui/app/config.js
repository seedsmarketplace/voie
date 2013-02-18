// Set the require.js configuration for your application.
require.config({
    
  	
  paths: {
    // JavaScript folders.
    libs: "../assets/js/libs",

    // Libraries.
    jquery: "http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min", //"../assets/js/libs/jquery",
    underscore: "../assets/js/libs/underscore", //CHECK IF LOADDASH IS SAME AS UNDERSCORE
    backbone: "../assets/js/libs/backbone",
    handlebars: "../assets/js/libs/handlebars-1.0.0.beta.6",
    
    //Jquery Plugins
    jqueryUI :"http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.1/jquery-ui.min", //"../assets/js/jquery-ui/jquery.ui.core.min",
//    jqueryUIWidget : "../assets/js/jquery-ui/jquery.ui.widget.min",
//    jqueryUIAccordion : "../assets/js/jquery-ui/jquery.ui.accordion.min",
//    jqueryEffects : "../assets/js/jquery-ui/jquery.effects.core.min",
//    jqueryEffectsSlide : "../assets/js/jquery-ui/jquery.effects.slide.min",
//    jquerySlider : "../assets/js/jquery-ui/jquery.ui.slider.min",
//    jqueryMouse : "../assets/js/jquery-ui/jquery.ui.mouse.min",
    
    //JQPlot
    //<!--[if lt IE 9]><script language="javascript" type="text/javascript" src="assets/js/jqPlot/excanvas.min.js"></script><![endif]-->
    jqueryJQPlot : "../assets/js/jqPlot/jquery.jqplot.min",
    jqueryJQPlotBarRenderer :  "../assets/js/jqPlot/plugins/jqplot.barRenderer.min",
    jqueryJQPlotPilotRenderer : "../assets/js/jqPlot/plugins/jqplot.pieRenderer.min",
    jqueryJQAxisRenderer : "../assets/js/jqPlot/plugins/jqplot.categoryAxisRenderer.min",
    jqueryJQHighlighter : "../assets/js/jqPlot/plugins/jqplot.highlighter.min",
    jqueryJQLabels : "../assets/js/jqPlot/plugins/jqplot.pointLabels.min",   
    
    //Common Services
    utils : "services/utils",
    	
    // Load Extensions 
    fnUtils : "ext/function/functionUtils", 	//Add utility methods to the function prototype. This path would never have to be included
    handlebarHelpers : "ext/handlebars/handlebarsHelpers", //Register Handlebar helpers. This path would never have to be included	
    backboneExt : "ext/backbone/extensions",
    
    
    
  },

  shim: {
	  
    underscore: {
        exports: "_"
    },
	  
    // Backbone library depends on lodash and jQuery.
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    },

    // Handlebars has no dependencies.
    handlebars: {
      exports: "Handlebars"
    },
    
    //Logger 
    logger : {
      exports : "Logger"
    },
    
    jqueryUI : {
      deps: ["jquery"]
    },
    
//    jqueryUIWidget :{
//    	deps: ["jquery"]	
//    },
//    
//    jqueryUIAccordion :{
//    	deps: ["jquery"]	
//    },
//    
//    jqueryEffects :{
//    	deps: ["jquery"]	
//    },
//    
//    jqueryEffectsSlide : {
//    	deps: ["jquery"]
//    },
//    
//    jqueryMouse : {
//    	deps: ["jquery","jqueryUI"]
//    },
//    
//    jquerySlider : {
//    	deps: ["jquery","jqueryUI","jqueryMouse"]
//    },
//    
    
    jqueryJQPlot : {
    	deps: ["jquery"]
    },
    
    jqueryJQPlotBarRenderer :  {
    	deps: ["jquery"]
    },
    
    jqueryJQPlotPilotRenderer : {
    	deps: ["jquery"]
    },
    
    jqueryJQAxisRenderer : {
    	deps: ["jquery"]
    },
    
    jqueryJQHighlighter : {
    	deps: ["jquery"]
    },
    
    jqueryJQLabels : {
    	deps: ["jquery"]
    }    
    
  },
  
  // Initialize the application with the main application file.
  deps: ["main"]


});
