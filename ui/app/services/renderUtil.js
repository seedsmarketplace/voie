define([
  'jquery',
  "services/logger",
], function($,Logger) {
	
	var RenderUtil = {
		renderView : function(ViewClass,data,context){
			//Instantiate View
			if(ViewClass){
				var view = new ViewClass(data,context); 
				view.render();
				return view;
			}
			else {
				throw ( "Unable to render fragement. Invalid view class " + ViewClass );
			}
		},
	};
	
	return RenderUtil;
	
});
