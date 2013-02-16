SeedData = {
	on : function(method,model,options){
		var url = (options.url||model.url);
		if(typeof url == "function"){
			url  = url(options);
		}
		console.log("*Loading test data '" + method + "-" + url);
		if(!this.data[method+"-"+url]){
			return {
				dataFound : false
			};
			
		}
		else {
			if(typeof this.data[method+"-"+url] == "function"){
				return this.data[method+"-"+url](options);
			}
			else {
				return this.data[method+"-"+url];
			}
		}
		
	},
	
	data : {
		//Application Session
		"read-seeds/service/session" : {
			user : {}
		},
		
		"read-seeds/service/get_user/js" : {
			username : "js",
			password : "js",
			roles : ["JS"] 
		},

		"read-seeds/service/get_user/emp" : {
			username : "emp",
			password : "emp",
			roles : ["EMP"] 
		},

		"read-seeds/service/get_user/exp" : {
			username : "exp",
			password : "exp",
			roles : ["EXP"] 
		},

		"read-seeds/service/get_user/admin" : {
			username : "admin",
			password : "admin",
			roles : ["ADMIN"] 
		},
		
		
	}
	
};