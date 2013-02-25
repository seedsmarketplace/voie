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
		
		
		templateName : 'js/profile',
		
		initialize : function(){
			_.bindAll(this);
		},
		
		events:{
			"click .menuitem":"_doSwitch",
			"click .addskill":"_openDilog",
			"change .skillset":"_renderSAQ",
			"click closebut":"_closeSAQ"
		},
		
		render : function(){
			this.renderTemplate({
				appState : appStateIns.toJSON(),
			});
			
			return this;
		},
		_doSwitch:function(event){
			
			var section=$(event.target).attr('data-type');
			$("div.info").hide();
			$('div[data-type="'+section+'"]').show();
		 
		},
		_openDilog: function() {
			$("#lightbase").fadeIn(600);
			$("#dialog").fadeIn(600);
		},
		_closeSAQ:function(){
			
			$("#lightbase").fadeOut();
			$("#dialog").fadeOut();
		},
		_renderSAQ:function(event){
			
			var saq=$(event.target).val();
			$(".saq").hide();
			$("."+saq).show();
			
			
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
