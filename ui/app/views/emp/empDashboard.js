define([
  'jquery',
  'underscore',
  'backbone',
  'backboneExt',
  'utils',
  'navigation','jqueryJQPlot','jqueryJQPlotPilotRenderer',
  'models/appState',
], function($, _, Backbone,backboneExt,utils,navigationIns,jqueryJQPlot,jqueryJQPlotPilotRenderer,appStateIns){
	
	var EmpDashboardView = backboneExt.SeedsView.extend({
		
		name : "EmpDashboardView",
		
		
		templateName : 'emp/empDashboard',
		
		initialize : function(){
			_.bindAll(this);
		},
		
		render : function(){
			this.onDataReady();
			return this;
		},
		
		onDataReady : function(){
			this.renderTemplate({
				appState : appStateIns.toJSON(),
			});
		},
		
		onRenderComplete : function(){

			  var data = [
			    ['JAN', 7],['FEB', 12], ['MAR', 9], 
			    ['APR', 8],['MAY', 8], ['JUN', 6],
			    ['JUL', 6],['AUG', 16], ['SEP', 6],
			    ['OCT', 9],['NOV', 4], ['DEC', 8]
			  ];
			  var plot1 = jQuery.jqplot ('chart', [data], 
			    { 
			      seriesDefaults: {
			        // Make this a pie chart.
			        renderer: jQuery.jqplot.PieRenderer, 
			        rendererOptions: {
			          // Put data labels on the pie slices.
			          // By default, labels show the percentage of the slice.
			          showDataLabels: true
			        }
			      }, 
			      legend: { show:true, location: 'e' }
			    }
			  );
		},
	});
		
	return EmpDashboardView;
	  
});
