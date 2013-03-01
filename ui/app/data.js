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
//			user : {
//				username : "js",
//				name : "Job Seeker",
//				password : "js",
//				roles : ["JS"]
//			}
		},
		
		"read-seeds/service/get_user/js@mydomain.com" : {
			username : "js@mydomain.com",
			name : "Job Seeker",
			password : "js",
			profileStatus:true,
			roles : ["JS"] 
		},
		
		"read-seeds/service/get_user/newjs@mydomain.com" : {
			username : "newjs@mydomain.com",
			name : "Job Seeker",
			password : "newjs",
			profileStatus:false,
			roles : ["JS"] 
		},

		"read-seeds/service/get_user/emp@mydomain.com" : {
			username : "emp@mydomain.com",
			password : "emp",
			name : "Employer",
			profileStatus:true,
			roles : ["EMP"] 
		},
		"read-seeds/service/get_user/newemp@mydomain.com" : {
			username : "newemp@mydomain.com",
			password : "newemp",
			name : "Employer",
			profileStatus:false,
			roles : ["EMP"] 
		},

		"read-seeds/service/get_user/exp@mydomain.com" : {
			username : "exp@mydomain.com",
			password : "exp",
			name : "IT Expert",
			profileStatus:true,
			roles : ["EXP"] 
		},

		"read-seeds/service/get_user/admin@mydomain.com" : {
			username : "admin@mydomain.com",
			password : "admin",
			name : "Administrator",
			profileStatus:true,
			roles : ["ADMIN"] 
		},
		
		"read-seeds/service/get_user/sp@mydomain.com" : {
			username : "sp@mydomain.com",
			password : "sp",
			name : "Service Provicer",
			profileStatus:true,
			roles : ["SP"] 
		},
		
	}
	
};