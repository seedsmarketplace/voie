define([ 'jquery', 'underscore', 'backbone', 'backboneExt', 'utils',
		'navigation', 'models/appState', ], function($, _, Backbone,
		backboneExt, utils, navigationIns, appStateIns) {

	var CareerPathView = backboneExt.SeedsView.extend({

		name : "ManageCoursesView",

		templateName : 'sp/manageCourses',
		
		events:{
			"click .filter":"_doFilter",
			"click .viewdetails":"_showDilog",
			"click #closelightbox":"_hideDilog",
			"click #closelightbox2":"_closeAddNewCourse",
			"click #cust_addnewcourse":"_addNewCourse",
			"click #custbtn1":"_closeAddNewCourse"
		},

		initialize : function() {
			_.bindAll(this);
		},
		
		_showDilog:function(){
			$("#lightbox").fadeIn();
			
		},
		_hideDilog:function(){
			$("#lightbox").fadeOut();
			
		},
		_closeAddNewCourse:function(){
			$("#addnewcourse").fadeOut();
			
		},
		_addNewCourse:function(){
			$("#addnewcourse").fadeIn();
			
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
