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
    //<!--[if lt IE 9]><script language="javascript" type="text/javascript" src="assets/js/jqPlot-1.7/excanvas.min.js"></script><![endif]-->
    jqueryJQPlot : "../assets/js/jqPlot-1.7/jquery.jqplot.min",
    jqueryJQPlotBarRenderer :  "../assets/js/jqPlot-1.7/plugins/jqplot.barRenderer.min",
    jqueryJQPlotPilotRenderer : "../assets/js/jqPlot-1.7/plugins/jqplot.pieRenderer.min",
    jqueryJQAxisRenderer : "../assets/js/jqPlot-1.7/plugins/jqplot.categoryAxisRenderer.min",
    jqueryJQHighlighter : "../assets/js/jqPlot-1.7/plugins/jqplot.highlighter.min",
    jqueryJQLabels : "../assets/js/jqPlot-1.7/plugins/jqplot.pointLabels.min", 
    jqueryJQBubbleRenderer: "../assets/js/jqPlot-1.7/plugins/jqplot.bubbleRenderer.min",
    
    jqueryJQDateAxisRenderer:"../assets/js/jqPlot-1.7/plugins/jqplot.dateAxisRenderer.min",
    jqueryJQOhlcRenderer:"../assets/js/jqPlot-1.7/plugins/jqplot.ohlcRenderer.min",
    jqueryJQHighlighter:"../assets/js/jqPlot-1.7/plugins/jqplot.highlighter.min",
    
    lightBox:'../assets/js/table/jquery.dataTables.min',
    treeView:'../assets/js/tree-view/jquery.treeview',
    
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
    }, 
    
    jqueryJQBubbleRenderer:{
    	deps: ["jquery","jqueryJQPlot"]
    },
    jqueryJQDateAxisRenderer:{
    	deps: ["jquery","jqueryJQPlot"]
    },
    jqueryJQOhlcRenderer:{
    	deps: ["jquery","jqueryJQPlot"]
    },
    jqueryJQHighlighter:{
    	deps: ["jquery","jqueryJQPlot"]
    },
        
    lightBox:{
    	deps: ["jquery"]
    	
    },
    treeView:{
    	deps:["jquery"]
    }
    
  },
  
  // Initialize the application with the main application file.
  deps: ["main"]


});
