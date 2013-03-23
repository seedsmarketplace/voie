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
		
		name : "AddEmpProfileView",
		
		
		templateName : 'emp/addprofile',
		
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
			var str=$('div[data-type="'+section+'"]').attr("title");
			$(".title span").html(str);
			$('div[data-type="'+section+'"]').show();
			
		},
		_submitForm:function(){
			Backbone.history.navigate("#emp/dashboard/",true);		},
		
		onDataReady : function(){
		},
		
		onRenderComplete : function(){
			$("div.info").hide();
			$("div.active").show();

			
			
	
		},
	});
		
	return CareerPathView;
	  
});
