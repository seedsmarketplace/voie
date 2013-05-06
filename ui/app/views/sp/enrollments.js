define([ 'jquery', 'underscore', 'backbone', 'backboneExt', 'utils',
		'navigation', 'models/appState', ], function($, _, Backbone,
		backboneExt, utils, navigationIns, appStateIns) {

	var CareerPathView = backboneExt.SeedsView.extend({

		name : "EnrollmentssView",

		templateName : 'sp/enrollments',
		
		events:{
			"click .filter":"_doFilter",
			"click #enroll_java1":"_showDilog",
			"click #enroll_java2":"_showDilog2",
			"click #closelightbox":"_hideDilog",
			"click #closelightbox1":"_hideDilog2"
		},

		initialize : function() {
			_.bindAll(this);
		},
		
		_doFilter:function(e){
			$(".selected").removeClass("selected");
			$(e.target).parent().parent().addClass("selected");
			var keyword=$(e.target).text();
			if(keyword==='Any')
				keyword='';
			this._table.fnFilter(keyword,2);
		},
		
		_showDilog: function() {
			$("#lightbox2").fadeIn();	
		},
		_hideDilog: function() {
			$("#lightbox2").fadeOut();	
		},
		_showDilog2: function() {
			$("#lightbox3").fadeIn();	
		},
		_hideDilog2: function() {
			$("#lightbox3").fadeOut();	
		},
		render : function() {
			this.renderTemplate({
				appState : appStateIns.toJSON(),
			});

			return this;
		},

		onDataReady : function() {
		},

		onRenderComplete : function() {
			this._table=$("#jobstable").dataTable();
			
		},
	});

	return CareerPathView;

});
