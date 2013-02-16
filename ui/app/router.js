define([
        // Application.
        "backboneExt",
        "utils",
        "navigation"
        ],
 function(backboneExt,utils,navigationIns) {
    var convert = function (){
    	var routes =  {};
    	routes[""] = "default";
		for(var i=navigationIns.paths.length-1;i>=0;i--){
			var page = navigationIns.paths[i];
			routes[page.path] = page.name;
		}
		return routes;
    };
	
	// Defining the application router, you can attach sub routers here.
	var Router = backboneExt.SeedsRouter.extend({

		routes : convert()
		
//		routes: {
//			"" : "index",
//			"/signupLogin/*path" : "login",
//			"/register/*path" : "resigter",
//			"/mission/*path" : "mission",
//			"/partners/*path" : "partner",
//			"/team/*path" : "team",
//			"/about/*path" : "about",
//			
//			//Job Seeker
//			"/js/*path" : "jsDashboard",
//			"/js/dashboard/*path" : "jsDashboard",
//			"js/profile/*path" : "jsProfile",
//			"js/courses/*path" : "jsCourses",
//			"js/career/*path" : "jsCourses",
//			"js/jobs/*path" : "jsCourses",
//			
//			//Service Provider
//			"/sp/*path" : "spDashboard",
//			"/sp/dashboard/*path" : "spDashboard",
//			"/sp/addSevice/*path" : "spAddService",
//			
//			//Employers
//			"/emp/*path" : "empDashboard",
//			"/emp/dashboard/*path" : "empDashboard",
//			"/emp/addPosition" : "empAddPosition",
//			"/emp/findProspects" : "empFindProspects"
//			
//		}

	});

	return Router;

});
