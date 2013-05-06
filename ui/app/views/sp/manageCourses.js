define([ 'jquery', 'underscore', 'backbone', 'backboneExt', 'utils',
		'navigation', 'models/appState', ], function($, _, Backbone,
		backboneExt, utils, navigationIns, appStateIns) {

	var CareerPathView = backboneExt.SeedsView.extend({

		name : "ManageCoursesView",

		templateName : 'sp/manageCourses',
		
		events:{
			"click .filter":"_doFilter",
			"click .viewdetails":"_showDilog",
			"click #close":"_hideDilog",
			"click #closelightbox2":"_closeAddNewCourse",
			"click #cust_addnewcourse":"_addNewCourse",
			"click #custbtn1":"_closeAddNewCourse"
		},

		initialize : function() {
			_.bindAll(this);
		},
		
		_showDilog:function(ev){
			var d = $(ev.target).attr("id");
			$("#lightbase").fadeIn();
			$("#loading").fadeIn(1000);
			$("#loading").fadeOut(1000, function() {
				$("#close").fadeIn(500, 0);
				$(".lightboxcontainer:eq(" + e+")" ).fadeOut(200, function() {
					$("#title" + d ).fadeIn(600);
					$("#shadepart").fadeTo(500, 0.8);
					e = d;
				});
			});

			
		},
		_hideDilog:function(){
			$("#lightbase,.lightboxcontainer").fadeOut(500);
			$("#shadepart").fadeOut(500, 0);
			$("#close").fadeOut(500, 0);
			
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
			window.e = 0;
			this._table=$("#jobstable").dataTable();
		},
	});

	return CareerPathView;

});
