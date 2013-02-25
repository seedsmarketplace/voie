define([
  'jquery',
  'underscore',
  'backbone',
  'backboneExt',
  'utils',
  'navigation',
  'models/appState',
], function($, _, Backbone,backboneExt,utils,navigationIns,appStateIns){
	
	var BrowseCoursesView = backboneExt.SeedsView.extend({
		
		name : "BrowseCoursesView",
		
		
		templateName : 'js/browseCourses',
		
		events : {
			"click .vdetails" : '_startLightBox',
			"click #close" : '_closeLightBox',
			"click .menuitem" : '_doFilter',
			"click #viewall" : '_resetFilter',

		},

		
		initialize : function(){
			_.bindAll(this);
		},
		
		render : function(){
			this.renderTemplate({
				appState : appStateIns.toJSON(),
			});
			
			return this;
		},
		
		
		_startLightBox : function(event) {
			var d = $(event.target).parent().index();
		
			$("#lightbase").fadeIn();
			$("#loading").fadeIn(1000);
			$("#loading").fadeOut(1000, function() {
				$("#close").fadeIn(500, 0);
				$(".lightboxcontainer:eq(" + e + ")").fadeOut(200, function() {
					$(".lightboxcontainer:eq(" + d + ")").fadeIn(600);
					$("#shadepart").fadeTo(500, 0.8);
					e = d;
				});
			});


		},
		_closeLightBox : function(event) {
			$("#lightbase,.lightboxcontainer").fadeOut(500);
			$("#shadepart").fadeOut(500, 0);
			$("#close").fadeOut(500, 0);

		},
		_resetFilter : function(event) {
			$(".light1").fadeIn(500);
		},
		_doFilter : function(event) {
			$(".selected").removeClass("selected");
			$(event.target).parent().addClass("selected");
			var citemid = $(event.target).attr("id");
			$(".light1."+pitemid).fadeOut(500,function(){$(".light1."+citemid).fadeIn(500);});	
			pitemid = citemid;
		},

		
		onDataReady : function(){
		},
		
		onRenderComplete : function(){
			window.e = 0;
			window.pitemid = "all";
			$(".light1").hide();
			$(".light1.all").show();

		}
	  
	
	});
		
	return BrowseCoursesView;
	  
});
