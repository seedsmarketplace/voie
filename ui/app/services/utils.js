define([  //Services
          "backbone",
          "services/logger",
          "services/renderUtil",
          "services/templateUtil",
          "services/class",
          "Services/validate"
          
],function(Backbone,Logger,RenderUtil,TemplateUtil,Class,Validate){
	
	var navigate = function(location,changeUrl,lastMsg,errorMsg){
		Backbone.history.navigate(location,changeUrl);
		(function(){
			if(lastMsg){
				showLastMsg(decodeHtml(lastMsg));
			}
			
			if(errorMsg){
				showErrorMsg(decodeHtml(lastMsg));
			}
		}).defer(1000); //TODO - Avoid adding random delay, There should be a better way
	};
	
	return {
		Logger : Logger,
		RenderUtil : RenderUtil,
		TemplateUtil : TemplateUtil,
		Class : Class,
		navigate : navigate,
		Validate : Validate
	};
	
});
