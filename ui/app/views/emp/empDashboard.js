define([
  'jquery',
  'underscore',
  'backbone',
  'backboneExt',
  'utils',
  'navigation','jqueryJQPlot','jqueryJQPlotPilotRenderer',"jqueryJQBubbleRenderer","jqueryJQDateAxisRenderer","jqueryJQOhlcRenderer","jqueryJQHighlighter",
  'models/appState'
], function($, _, Backbone,backboneExt,utils,navigationIns,jqueryJQPlot,jqueryJQPlotPilotRenderer,jqueryJQBubbleRenderer,jqueryJQDateAxisRenderer,jqueryJQOhlcRenderer,jqueryJQHighlighter,appStateIns){
	
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
		
		_renderJobsSeekersChart: function (){
			
			 var arr = [[11, 123, 1200, "JAVA"], [45, 92, 900, "SAP"], 
			            [24, 104, 1400, "PHP"], [50, 23, 1600, "Ruby"], 
			            [18, 17, 700, "Dot Net"], [7, 89, 900, "Others"]];
			             
			            var plot1 = $.jqplot('jstrendchart',[arr],{
			                title: 'Job Seekers Trend',
			                seriesDefaults:{
			                    renderer: $.jqplot.BubbleRenderer,
			                    rendererOptions: {
			                        bubbleGradients: true
			                    },
			                    shadow: true
			                }
			            });
			            
			     
			
		},
		
		_renderMarketTrendsChart: function (){
			
			ohlc = [
			        ['02/22/2013 16:00:00', 45, 55, 35, 40],
			        ['02/20/2013 16:00:00', 75, 95, 65, 70],
			        ['02/14/2013 16:00:00', 100, 110, 75, 90],
			        ['02/11/2013 16:00:00', 90, 100, 80, 85],
			        
			        ['01/26/2013 16:00:00', 102, 120, 75, 65],
			        ['01/15/2013 16:00:00', 73, 85, 58, 63],
			        ['01/11/2013 16:00:00', 100, 130, 70, 80],
			        ['01/04/2013 16:00:00', 80, 120, 60, 70],
			        
			        ['12/26/2012 16:00:00', 60, 75, 40, 50],
			        ['12/15/2012 16:00:00', 80, 100, 50, 45],
			        ['12/08/2012 16:00:00', 40, 55, 25, 30],
			        ['12/01/2012 16:00:00', 40, 45, 20, 30],
			        
			        ['11/26/2012 16:00:00', 60, 75, 40, 50],
			        ['11/15/2012 16:00:00', 75, 90, 60, 65],
			        ['11/08/2012 16:00:00', 75, 90, 65, 70],
			        ['11/01/2012 16:00:00', 60, 75, 50, 50],
			        
			        
			        ['10/26/2012 16:00:00', 75, 90, 55, 70],
			        ['10/15/2012 16:00:00', 70, 75, 40, 60],
			        ['10/08/2012 16:00:00', 40, 50, 30, 33],
			        ['10/01/2012 16:00:00', 50, 55, 35, 40],
			        
			        ['09/26/2012 16:00:00', 60, 75, 30, 50],
			        ['09/11/2012 16:00:00', 70, 88, 50, 60],
			        ['09/04/2012 16:00:00', 105, 110, 70, 80],
			        
			        ['08/27/2012 16:00:00', 80, 90, 58, 70],
			        ['08/20/2012 16:00:00', 70, 85, 55, 60],
			        ['08/13/2012 16:00:00', 65, 75, 40, 60],
			        ['08/06/2012 16:00:00', 70, 85, 55, 60],
			        
			        ['07/23/2012 16:00:00', 50, 60, 40, 45],
			        ['07/16/2012 16:00:00', 40, 50, 25, 30],
			        ['07/09/2012 16:00:00', 30, 40, 25, 27],
			        ['07/02/2012 16:00:00', 40, 50, 30, 35],
			        
			        ['06/23/2012 16:00:00', 65, 75, 50, 55],
			        ['06/17/2012 16:00:00', 70, 80, 40, 50],
			        ['06/09/2012 16:00:00', 52, 70, 42, 50],
			        ['06/02/2012 16:00:00', 50, 60, 40, 45],
			        
			        ['05/26/2012 16:00:00', 45, 60, 30, 35],
			        ['05/20/2012 16:00:00', 22, 25, 20, 20],
			        ['05/12/2012 16:00:00', 45, 50, 30, 40],
			        ['05/05/2012 16:00:00', 40, 50, 25, 30],
			        
			        ['04/29/2012 16:00:00', 45, 50, 25, 30],
			        ['04/22/2012 16:00:00', 40, 60, 28, 30],
			        ['04/15/2012 16:00:00', 40, 50, 27, 30],
			        ['04/08/2012 16:00:00', 30, 40, 25, 27],
			        ['04/01/2012 16:00:00', 40, 45, 25, 25],
			        
			        ['03/24/2012 16:00:00', 40, 45, 22, 30],
			        ['03/17/2012 16:00:00', 25, 40, 20, 20],    
			        ['03/10/2012 16:00:00', 30, 40, 20, 15],
			        ['03/03/2012 16:00:00', 20, 25, 17, 17],
			        
			        ['02/27/2012 16:00:00', 25, 30, 15, 15],
			        ['02/20/2012 16:00:00', 20, 30, 12, 15],
			        ['02/13/2012 16:00:00', 20, 25, 9, 15],
			        ['02/06/2012 16:00:00', 14, 17, 8, 10],
			        
			        ['01/29/2012 16:00:00', 12, 15, 7, 10],
			        ['01/22/2012 16:00:00', 15, 20, 6, 10],
			        ['01/15/2012 16:00:00', 20, 30, 5, 10]
			      ];
			
			 // Note, the ohlc data is specified below     
			  var plot1 = $.jqplot('markettrends',[ohlc],{
			    // use the y2 axis on the right of the plot 
			    //rather than the y axis on the left.
			    seriesDefaults:{yaxis:'y2axis'},
			    title: 'Jobs at Seed Market Place',
			    axes: {
			      xaxis: {
			        renderer:$.jqplot.DateAxisRenderer,
			        tickOptions:{formatString:'%b %e'}, 
			        // For date axes, we can specify ticks options as human 
			        // readable dates.  You should be as specific as possible, 
			        // however, and include a date and time since some 
			        // browser treat dates without a time as UTC and some 
			        // treat dates without time as local time.
			        // Generally, if  a time is specified without a time zone,
			        // the browser assumes the time zone of the client.
			        min: "09-01-2012 16:00",
			        max: "02-22-2013 16:00",
			        tickInterval: "4 weeks",
			      },
			      y2axis: {
			        tickOptions:{formatString:'%d'}
			      }
			    },
			    series: [{renderer:$.jqplot.OHLCRenderer}],
			    highlighter: {
			      show: true,
			      showMarker:false,
			      tooltipAxes: 'xy',
			      yvalues: 4,
			      // You can customize the tooltip format string of the highlighter
			      // to include any arbitrary text or html and use format string
			      // placeholders (%s here) to represent x and y values.
			      formatString:'<table class="jqplot-highlighter"> \
			      <tr><td>Date:</td><td>%s</td></tr> \
			      <tr><td>Applied:</td><td>%s</td></tr> \
			      <tr><td>Qualified:</td><td>%s</td></tr> \
			      <tr><td>Vacancies:</td><td>%s</td></tr> \
			      <tr><td>Interviewed:</td><td>%s</td></tr></table>'
			    }
			  });
			            
			     
			
		},
		
		onRenderComplete : function(){
			
			this._renderJobsSeekersChart();
			this._renderMarketTrendsChart();

/*			  var data = [
['JAVA', 12],['SAP', 9], ['PHP', 14], 
['Ruby', 16],['Dot Net', 7], ['Others', 9]
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
			  );*/
			
			
			
		},
	});
	


	return EmpDashboardView;
	  
});
