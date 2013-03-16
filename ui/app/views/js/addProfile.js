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
		
		name : "AddJsProfileView",
		
		
		templateName : 'js/addprofile',
		
		initialize : function(){
			_.bindAll(this);
		},
		
		events:{
			"click .step":"_nextStep",
			"click #submit":"_submitForm"
		},
		
		render : function(){
			this.renderTemplate({
				appState : appStateIns.toJSON(),
			});
			
			return this;
		},
		_nextStep:function(event){
			
			var section=$(event.target).attr('data-type');
			$("div.info").hide();
			$('div[data-type="'+section+'"]').show();
			
		},
		_submitForm:function(){
			Backbone.history.navigate("#js/dashboard/",true);
		},
		
		onDataReady : function(){
		},
		
		onRenderComplete : function(){
			$("div.info").hide();
			$("div.active").show();
			
			
	
		},
	});
		
	return CareerPathView;
	  
});
