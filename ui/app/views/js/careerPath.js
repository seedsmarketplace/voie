define([
  'jquery',
  'underscore',
  'backbone',
  'backboneExt',
  'utils',
  'navigation',
  'models/appState',
], function($, _, Backbone,backboneExt,utils,navigationIns,appStateIns){
	
	var CareerPathView = backboneExt.SeedsView.extend({
		
		name : "CareerPathView",
		
		
		templateName : 'js/careerPath',
		
		initialize : function(){
			_.bindAll(this);
		},
		
		render : function(){
			this.renderTemplate({
				appState : appStateIns.toJSON(),
			});
			
			return this;
		},
		
		onDataReady : function(){
		},
		
		onRenderComplete : function(){
			$( "#jobGradeSlider" ).slider({
				  value:1,
			      min: 1,
			      max: 5,
			      step: 1,
			      slide: function( event, ui ) {
			        $( "#amount" ).val( "$" + ui.value );
			      }
			});
		},
	});
		
	return CareerPathView;
	  
});
