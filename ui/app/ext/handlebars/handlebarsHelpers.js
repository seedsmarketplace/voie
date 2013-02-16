define([
        'jquery',
        'handlebars',
        'utils',
        ], function($,Handlebars,utils) {
	
	var INLINE_TEMPLATE_ID_COUNTER = 0;
	
	var evaluateExpression = function(l,o,r){
		
		var operators = {
				'==':		function(l,r) { return l == r; },
				'===':	function(l,r) { return l === r; },
				'!=':		function(l,r) { return l != r; },
				'<':		function(l,r) { return l < r; },
				'>':		function(l,r) { return l > r; },
				'<=':		function(l,r) { return l <= r; },
				'>=':		function(l,r) { return l >= r; },
				'typeof':	function(l,r) { return typeof l == r; }
		};
	 
		if (!operators[o])
			throw new Error("Handlerbars Helper 'compare' doesn't know the operator "+o);
	 
		return operators[o](l,r);		
		
	};

	/**
	 * If Equals
	 * if_eq this compare=that
	 */
	Handlebars.registerHelper('if_eq', function(context, options) {
		if (context == options.hash.compare){
			return options.fn(this);
		}
		return options.inverse(this);
	});

	/**
	 * Unless Equals
	 * unless_eq this compare=that
	 */
	Handlebars.registerHelper('unless_eq', function(context, options) {
		if (context == options.hash.compare)
			return options.inverse(this);
		return options.fn(this);
	});


	/**
	 * If Greater Than
	 * if_gt this compare=that
	 */
	Handlebars.registerHelper('if_gt', function(context, options) {
		if (context > options.hash.compare)
			return options.fn(this);
		return options.inverse(this);
	});

	/**
	 * Unless Greater Than
	 * unless_gt this compare=that
	 */
	Handlebars.registerHelper('unless_gt', function(context, options) {
		if (context > options.hash.compare)
			return options.inverse(this);
		return options.fn(this);
	});


	/**
	 * If Less Than
	 * if_lt this compare=that
	 */
	Handlebars.registerHelper('if_lt', function(context, options) {
		if (context < options.hash.compare)
			return options.fn(this);
		return options.inverse(this);
	});

	/**
	 * Unless Less Than
	 * unless_lt this compare=that
	 */
	Handlebars.registerHelper('unless_lt', function(context, options) {
		if (context < options.hash.compare)
			return options.inverse(this);
		return options.fn(this);
	});


	/**
	 * If Greater Than or Equal To
	 * if_gteq this compare=that
	 */
	Handlebars.registerHelper('if_gteq', function(context, options) {
		if (context >= options.hash.compare)
			return options.fn(this);
		return options.inverse(this);
	});

	/**
	 * Unless Greater Than or Equal To
	 * unless_gteq this compare=that
	 */
	Handlebars.registerHelper('unless_gteq', function(context, options) {
		if (context >= options.hash.compare)
			return options.inverse(this);
		return options.fn(this);
	});


	/**
	 * If Less Than or Equal To
	 * if_lteq this compare=that
	 */
	Handlebars.registerHelper('if_lteq', function(context, options) {
		if (context <= options.hash.compare)
			return options.fn(this);
		return options.inverse(this);
	});

	/**
	 * Unless Less Than or Equal To
	 * unless_lteq this compare=that
	 */
	Handlebars.registerHelper('unless_lteq', function(context, options) {
		if (context <= options.hash.compare)
			return options.inverse(this);
		return options.fn(this);
	});

	/**
	 * Convert new line (\n\r) to <br>
	 * from http://phpjs.org/functions/nl2br:480
	 */
	Handlebars.registerHelper('nl2br', function(text) {
		var nl2br = (text + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br>' + '$2');
		return new Handlebars.SafeString(nl2br);
	});
	
	/**
	 * 
	 * Compare operator
	 * 
	 */
	Handlebars.registerHelper('compare', function() {
		var currentArgumentIndex = 0;
		var currentLogicalOperator = null;
		var currentResult = false;
		var options = arguments[arguments.length-1];
		var args = Array.prototype.slice.call(arguments).splice(0,arguments.length-1);

		if (args.length < 3)
			throw new Error("Handlerbars Helper 'compare' needs 2 parameters");
		
		while(true){
			var l = args[currentArgumentIndex];
			currentArgumentIndex++;
			var o = args[currentArgumentIndex];
			currentArgumentIndex++;
			var r = args[currentArgumentIndex];
			var result = evaluateExpression(l,o,r);
			if(currentLogicalOperator){
				if(currentLogicalOperator.toLowerCase() == "and" ){
					currentResult = result && currentResult;
				}
				else {
					currentResult = result || currentResult;
				}
			}
			else {
				currentResult = result;
			}
			
			if((args.length-1) >= currentArgumentIndex+4){
				currentArgumentIndex++;
				currentLogicalOperator = args[currentArgumentIndex];
				currentArgumentIndex++;
			}
			else {
				break;
			}
		}
				 
		if( currentResult ) {
			return options.fn(this);
		} else {
			return options.inverse(this);
		}
		
	});	

	/**
	 * Print Raw Context
	 * 
	 */
	Handlebars.registerHelper('printRawContext', function(context) {
		return new Handlebars.SafeString(JSON.stringify(context));
	});		

	/**
	 * Render a Backbone view
	 * 
	 */
	Handlebars.registerHelper('renderFragment', function(viewName,options) {
		var tempInlineTemplateId = INLINE_TEMPLATE_ID_COUNTER++;
		require([viewName],function(ViewDef){
			var view = utils.RenderUtil.renderFragmentTo(ViewDef,options.hash.data,{},null,this.mediator);
			(function(){
				$("#"+tempInlineTemplateId).replaceWith(view.$el);
			}).defer();
		});
		return "<div data='partial' id='"+tempInlineTemplateId+"'></div>"; 
	});

	/**
	 * Render a Partial. A partial is a markup fragment without any BackBoneView class associated to it
	 * 
	 */
	Handlebars.registerHelper('renderPartial', function(templateName,options) {
		var tempInlineTemplateId = INLINE_TEMPLATE_ID_COUNTER++;
		(function(){
			var templateContext ={};
			for(var prop in options.hash){
				var val = options.hash[prop];
				if ((typeof val).toLowerCase() == "object"){
					$.extend(templateContext,options.hash[prop],true);
				}
				else {
					templateContext[prop] = val;
				}
				
			}
			utils.TemplateUtil.renderTemplate(templateName,templateContext,function(html){
				$("#"+tempInlineTemplateId).replaceWith(html);
			});
		}).defer();

		return "<div data='partial' id='"+tempInlineTemplateId+"'></div>";  
	});

	/**
	 * Retrieve object property. Template cannot handle dynamic properties
	 * From the template use the following format {{#get obj "session" "user" "name"}}{{/get}}. The output would be obj["session"]["user"]["name"]
	 * 
	 */
	Handlebars.registerHelper('get', function() {
		var obj = arguments[0];
		var args = Array.prototype.slice.call(arguments).splice(1,arguments.length-2);
		//var options = arguments[arguments.length-1];
		var value = null;
		for(var i=0;i<args.length;i++){
			var prop = args[i];
			if(i==0){
				value = obj[prop];
			}
			else {
				value = value[prop];
			}	
		}
		return value; 
	});
	
	/**
	 * Iterate - pass  the current index
	 * 
	 */
	
	
	Handlebars.registerHelper('eachWithIndex', function(context, options) {
	  var fn = options.fn, inverse = options.inverse;
	  var ret = "";

	  if(context && context.length > 0) {
		  for(var i=0, j=context.length; i<j; i++) {
			  ret = ret + fn(_.extend({}, context[i], { i: i, iPlus1: i + 1 }));
		  }
	  } else {
		  ret = inverse(this);
	  }
	  return ret;
	});
	
	/**
	 * Check permissions and UI perferences to determine if a tab should be displayed
	 */
	
	Handlebars.registerHelper('shouldDisplayTab', function(page,session,options) {
		var showNav = true;
		if(page.hide){
			showNav  = false; //Hide If either marked as hidden, or is not a not level nav item
		}
		else if(page.uiProperties && page.uiProperties.hidePreference && session.osmosix_uipreference[page.uiProperties.hidePreference] == "1"){
			if(page.uiProperties && page.uiProperties.showOnlyForRoles){
				var roleFound = false;
				for(var i=0;i<page.uiProperties.showOnlyForRoles.length;i++){
					if($.inArray(page.uiProperties.showOnlyForRoles[i],session.osmosix_user.roles)){
						roleFound = true;
						break;
					}
				}
				if(!roleFound){
					showNav = false;
				}
			}
		} 
		if( showNav ) {
			return options.fn(this);
		} else {
			return options.inverse(this);
		}
	});	
	

});
