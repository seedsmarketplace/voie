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
		
		name : "SpProfileView",
		
		
		templateName : 'sp/profile',
		
		initialize : function(){
			_.bindAll(this);
		},
		
		events:{
			"click .pmenuitem":"_doSwitch",
			"click .addskill":"_openDilog",
			"change .skillset":"_renderSAQ",
			"click #closebut":"_closeSAQ",
			"click .closediv":"_submitSAQ"
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
			$("div.info").hide();
			$('div[data-type="'+section+'"]').show();
		 
		},
		_openDilog: function() {
			$("#lightbase").fadeIn(600);
			$("#shadepart").fadeTo(500, 0.8);

		},
		_closeSAQ:function(){
			//$("form").reset();
			$("#lightbase").fadeOut();
			$("#shadepart").fadeOut(500);

		},
		_renderSAQ:function(event){
			
			var saq=$(event.target).val();
			$(".saq").hide();
			$("."+saq).show();
			
			
		},
		_submitSAQ:function(){
			$("#lightbase").fadeOut();
			$("#shadepart").fadeOut(500);
		},
		
		onDataReady : function(){
		},
		
		onRenderComplete : function(){
			$("div.info").hide();
			$("div.active").show();
			$(".saq").hide();
			$("#gray").treeview();
			
	
		},
	});
		
	return CareerPathView;
	  
});
