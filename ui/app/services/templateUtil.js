define([
        'jquery',
        "services/logger",
        "handlebars",
        ], function($,Logger,Handlebars) {
	
	
	var useCompiledTemplates = false; //GJ Need to find a better way to check if templates are compiled
	
	var JST = window.JST = window.JST || {};
	
	var loadTemplate = function(templateName,callback){
		var path = 'app/templates/' + templateName+".html";
		if(useCompiledTemplates){
			//var compiledTemplateKey = null;
			var moduleSubPath = null;
			var moduleName = null;
			var compiledTemplateSubPath = "";
			if(templateName.indexOf("/") !=-1){
				compiledTemplateSubPath=templateName.substring(0,templateName.lastIndexOf("/"));
			}
			moduleSubPath=templateName.substring(0,templateName.lastIndexOf("/"));
			if(moduleSubPath.indexOf("/") !=-1){
				moduleName = moduleSubPath.substring(moduleSubPath.lastIndexOf("/")+1);
			}
			else {
				moduleName = moduleSubPath;
			}
			
    		require(["templates/" + moduleSubPath + "/" + moduleName],(function(){
    			for(var compiledTemplateKey in  Handlebars.templates){
    				var compiledTemplate = Handlebars.template(Handlebars.templates[compiledTemplateKey]);
    				var compiledTemplateName = (compiledTemplateSubPath=="")?compiledTemplateKey:(compiledTemplateSubPath+"/"+compiledTemplateKey);
    				JST[compiledTemplateName] = compiledTemplate;
    				JST[compiledTemplateName].__compiled__ = true;
    				//Handlebars does not maintain path in the template nammes. Therefore we use the variable JST to maintain compiled templates
    				delete Handlebars.templates[compiledTemplateKey];
    			}
				callback();
    		}));
		}
		else {
			$.get(path, function(templateData) {
				if(templateData == ""){
					Logger.warn("Empty template data : " + templateName );
				}
				JST[templateName] = Handlebars.compile(templateData);
				JST[templateName].__compiled__ = true;
				//Logger.info("Compiled Template " + templateName );
				callback();
			});
		}
	};	

	var render = function(templateName,context){
		var template = JST[templateName];
		try {
			return template(context);
		}
		catch(e){
		//	Logger.error(e);
			//Returning as string instead of throwing it back since the call is made asynchronously and the original callback needs to be invoked
			Logger.error("Unable to render template -'" + templateName +"'. Encountered the following exception:  " + e);
			return "Unable to render template -'" + templateName +"'. Encountered the following exception:  <br>" + e;
		}
	};	

	var TemplateUtil = {
		renderHTML : function(templateName,context,el,templateCallback){
			this.renderTemplate(templateName,context,function(html){
				$(el).html(html);
				if(templateCallback)
					templateCallback();
			});
		},

		renderTemplate : function(templateName,context,renderCallback){
			if (JST[templateName]) {
				renderCallback(render(templateName,context));
			}
			else {
				loadTemplate(templateName,(function(){
					renderCallback(render(templateName,context));
				}).createDelegate(this));
			}
		},	
	};

	return TemplateUtil;

});

