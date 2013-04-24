define([ 'jquery', 'underscore', 'backbone', 'backboneExt', 'utils',
		'navigation', 'models/appState', ], function($, _, Backbone,
		backboneExt, utils, navigationIns, appStateIns) {

	var CareerPathView = backboneExt.SeedsView.extend({

		name : "ManageCoursesView",

		templateName : 'sp/manageCourses',
		
		events:{
			"click .filter":"_doFilter"
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
