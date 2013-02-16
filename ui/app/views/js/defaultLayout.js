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
		
		templateName : 'js/defaultLayout',
		
		initialize : function(){
			_.bindAll(this);
		},
		
		render : function(){
			this.renderTemplate({
				appState : appStateIns.toJSON(),
				navigation : navigationIns
			});
			return this;
		},
		
		onRenderComplete : function(){
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
