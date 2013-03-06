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
		
		name : "ProfileView",
		
		
		templateName : 'emp/profile',
		
		initialize : function(){
			_.bindAll(this);
		},
		
		events:{
			"click .cpmenuitem":"_doSwitch",
		},
		
		render : function(){
			this.renderTemplate({
				appState : appStateIns.toJSON(),
			});
			
			return this;
		},
		_doSwitch:function(event){
			$(".selected").removeClass("selected");
			$(event.target).parent().parent().addClass("selected");
			var section=$(event.target).attr('data-type');
			$("div.cinfo").hide();
			$('div[data-type="'+section+'"]').show();
		 
		},
				
		onDataReady : function(){
		},
		
		onRenderComplete : function(){
			$("div.cinfo").hide();
			$("div.cactive").show();
			
	
		},
	});
		
	return CareerPathView;
	  
});
