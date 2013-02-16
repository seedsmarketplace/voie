define([
  'jquery',
  'underscore',
  'backbone',
  'backboneExt',
  'utils',
  'navigation',
  'models/appState',
], function($, _, Backbone,backboneExt,utils,navigationIns,appStateIns){
	
	var DefaultLayout = backboneExt.SeedsView.extend({
		
		name : "DefaultWebsiteLayout",
		
		targetElSelector : ".content-main",
		
		templateName : 'website/defaultLayout',
		
		initialize : function(){
			_.bindAll(this);
		},
		
		render : function(){
			if(appStateIns.get("user")){
				var l = appStateIns.toJSON();
				
			}
				
			this.renderTemplate({
				appState : appStateIns.toJSON(),
				navigation : navigationIns
			});
			return this;
		},
		
		onRenderComplete : function(){
		    $("#section-menu")
		        .accordion({
		            "header": "a.menuitem"
		        })
		        .bind("accordionchangestart", function (e, data) {
		            data.newHeader.next().andSelf().addClass("current");
		            data.oldHeader.next().andSelf().removeClass("current");
		        })
		        .find("a.menuitem:first").addClass("current")
		        .next().addClass("current");
				
			$('#section-menu .submenu').css('height','auto');
				
			
			
			$('.sidemenu').css('height',500);
		},
		
		beforeShowPage : function(page,params){
			
		    //Remove existing page 
			var prevPageView = utils.RenderUtil.getFragment(this.targetElSelector);
			if(prevPageView){
				prevPageView.destroy(); //Destroys the view
			}
			var that = this;
			this.$el.find(this.targetElSelector).children().fadeOut(200, function() { //Fading to prevent the main content div from reducing size then expanding  
				that.$el.find(this.targetElSelector).empty();
			});
			
			//Get Root Page & setup the main tab as active
//			var rootPage = this._getRootPage(page);
//			this.$el.find('nav li').removeClass('selected');
//			this.$el.find('#nav_' + rootPage.name).addClass('selected');
//			
//		    var sidebarPages = navigationIns.childPages(rootPage.name);
//		    if(sidebarPages && sidebarPages.length > 0) {
//		    	utils.RenderUtil.renderFragmentTo(Sidebar,
//				    	{
//				    		pages : sidebarPages,
//				    		session : sessionIns.toJSON(),
//				    		currentPageName : page.name,
//				    	},
//		    			{el : this.$el.find(".content-aside")}
//			    );
//		    	
//		    	this.$el.find(".content-aside").show();
//		    }
//		    else {
//		    	this.$el.find(".content-aside").hide();
//		    } 
		},
		
		_getRootPage : function(page){
			if(page.parentPage){
				var parentPage = navigationIns.get(page.parentPage);
				if(parentPage){
					return this._getRootPage(parentPage);
				}
				else {
					throw ("Invalid navigation setup. A page with the name '" + page.parentPage + "'. does not exist");
				}
			}
			else {
				return page;
			}
		}

	 });
	
	return DefaultLayout;
	  
});
