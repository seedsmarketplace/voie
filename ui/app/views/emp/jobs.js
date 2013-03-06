define([ 'jquery', 'underscore', 'backbone', 'backboneExt', 'utils',
		'navigation', 'models/appState', ], function($, _, Backbone,
		backboneExt, utils, navigationIns, appStateIns) {

	var CareerPathView = backboneExt.SeedsView.extend({

		name : "JobsView",

		templateName : 'emp/jobs',
		
		events:{
			"click .filter":"_doFilter"
		},

		initialize : function() {
			_.bindAll(this);
		},
		
		_doFilter:function(e){
			var keyword=$(e.target).text();
			if(keyword==='Any')
				keyword='';
			this._table.fnFilter(keyword,4);
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
