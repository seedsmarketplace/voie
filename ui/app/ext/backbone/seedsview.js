define([
    'jquery',
    'underscore',
    'backbone',
    'utils'
], function($, _, Backbone,utils){
	
	var viewId = 0;
	 
	var SeedsView = Backbone.View.extend({
		
		name : "Name should be set by child classes",
		
		constructor : function(data,context){
			this.viewId = viewId++;
			this.data = data;
			this.context = context;
			Backbone.View.call(this, context);
		},
		
		renderTemplate : function (templateContext){
			try {
				utils.TemplateUtil.renderHTML(this.templateName,templateContext,this.$el,(function(){
					this.$el.data("backboneView",this);
					//IF view does not specify an el or a tag or a className, assume the view does not want framework to generate
					//a wrapper div element However since Backbone will generate a DIV in these circumstances, remove the wrapper div after rendering is complete
					//This needs to be done after the rendering is complete.
					if(this.context){
						if(!this.context.tagName && !this.context.el && !this.context.$el && !this.context.className){
							utils.Logger.debug("Unwrapping View  " + this.name  );
							var mainViewContent = this.$el.find("div:first-child").unwrap();
							this.$el = $(mainViewContent[0]);
						}
					}
					
					//Ensure that all partials in a view template are rendered before invoking the view's onRenderComplete method
					var renderCompleteInterval = setInterval((function() {
						var renderComplete = true;
						var unloadedPartials = 	this.$el.find('[data="partial"]');
						if (unloadedPartials && unloadedPartials.length > 0) {
							utils.Logger.debug("View " + this.name + " waiting for partials to load");
							renderComplete = false; 
						}
						if (!renderComplete) { return; }
						clearInterval(renderCompleteInterval);
						this.delegateEvents(this.events);
						this.onRenderComplete();
					}).createDelegate(this), 10);
				}).createDelegate(this));
			}
			catch(e){
			
			}
		},
		
		
		onRenderComplete : function(){
			//Child Classes should implement if required
		},
				
		destroy: function(){
			this.unbind();
			this.undelegateEvents();
			//this.remove(); //Removing call removes DOM element too, which is not desirable
		},

	 });

	 return SeedsView;
	  
});
