define([
], function(){
		var paths = [{
		            	 name : "home", 
		            	 path : "home/*",
		            	 domain : "webSite"
		             },
		             {
		            	 name : "login", 
		            	 path : "login/*path",
		            	 domain : "webSite"
		             },
		             {
		            	 name : "logout", 
		            	 path : "logout/*path",
		            	 domain : "webSite"
		             },		             
		             {
		            	 name : "register", 
		            	 path : "register/*path",
		            	 domain : "webSite"
		             },
		             {
		            	 name : "mission", 
		            	 path : "mission/*path",
		            	 domain : "webSite"
		             },		             
		             {
		            	 name : "partners", 
		            	 path : "partners/*path",
		            	 domain : "webSite"
		             },		             
		             {
		            	 name : "team", 
		            	 path : "team/*path",
		            	 domain : "webSite"
		             },
		             {
		            	 name : "about", 
		            	 path : "about/*path",
		            	 domain : "webSite"
		             },
		             {
		            	 name : "js", 
		            	 path : "js/*path",
		            	 domain : "jsPortal"
		             },
		             {
		            	 name : "jsDashboard", 
		            	 path : "js/dashboard/*path",
		            	 domain : "jsPortal"
		             },		             
		             {
		            	 name : "jsProfile", 
		            	 path : "js/profile/*path",
		            	 domain : "jsPortal"
		             },
		             {
		            	 name : "jsAddProfile", 
		            	 path : "js/addProfile/*path",
		            	 domain : "jsPortal"
		             },
		             {
		            	 name : "jsCourses", 
		            	 path : "js/courses/*path",
		            	 domain : "jsPortal"
		             },
		             {
		            	 name : "jsCareer", 
		            	 path : "js/career/*path",
		            	 domain : "jsPortal"
		             },
		             {
		            	 name : "jsJobs", 
		            	 path : "js/jobs/*path",
		            	 domain : "jsPortal"
		             },
		             {
		            	 name : "sp", 
		            	 path : "sp/*path",
		            	 domain : "spPortal"
		             },
		             {
		            	 name : "spDashboard", 
		            	 path : "sp/dashboard/*path",
		            	 domain : "spPortal"
		             },
		             {
		            	 name : "spAddService", 
		            	 path : "sp/addSevice/*path",
		            	 domain : "spPortal"
		             },
		             {
		            	 name : "emp", 
		            	 path : "emp/*path",
		            	 domain : "empPortal"
		             },
		             {
		            	 name : "empDashboard", 
		            	 path : "emp/dashboard/*path",
		            	 domain : "empPortal"
		             },
		             {
		            	 name : "empProfile", 
		            	 path : "emp/profile/*path",
		            	 domain : "empPortal"
		             },
		             {
		            	 name : "empAddProfile", 
		            	 path : "emp/addProfile/*path",
		            	 domain : "empPortal"
		             },
		             {
		            	 name : "empAddPosition", 
		            	 path : "emp/addPosition/*path",
		            	 domain : "empPortal"
		             },
		             {
		            	 name : "empFindProspects", 
		            	 path : "emp/findProspects/*path",
		            	 domain : "empPortal"
		             }
		             
		             ,
		             {
		            	 name : "exp", 
		            	 path : "exp/*path",
		            	 domain : "expPortal"
		             },
		             {
		            	 name : "expDashboard", 
		            	 path : "exp/dashboard/*path",
		            	 domain : "expPortal"
		             },
		             {
		            	 name : "expDefineSkills", 
		            	 path : "emp/defineSkills/*path",
		            	 domain : "expPortal"
		             }
		             
		             ,
		             {
		            	 name : "admin", 
		            	 path : "admin/*path",
		            	 domain : "adminPortal"
		             },
		             {
		            	 name : "adminDashboard", 
		            	 path : "admin/dashboard/*path",
		            	 domain : "adminPortal"
		             },
		             {
		            	 name : "adminViewUsers", 
		            	 path : "admin/viewUsers/*path",
		            	 domain : "adminPortal"
		             },
		             {
		            	 name : "adminManageSkills", 
		            	 path : "admin/manageSkills/*path",
		            	 domain : "adminPortal"
		             }
		             ];
		
		var getPage = function(name){
			for(var i=0;i<paths.length;i++){
				if(paths[i].name == name){
					return paths[i];
				}
			}
			return null;
		};
		             
		return {
			paths : paths,
			getPage : getPage
		};
	
});