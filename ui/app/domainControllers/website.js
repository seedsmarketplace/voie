define([
    'jquery',
    'underscore',
    'backbone',
    'utils',
    "models/appState",
    'domainControllers/baseController',
    'views/website/defaultLayout',
    'views/website/loginSignupLayout',
    'views/website/home',
    'views/website/mission',
    'views/website/partners',
    'views/website/team',
    'views/website/login','views/website/register','views/website/browseCourses',
    'views/website/updateSkills','views/website/searchJobs','views/website/findCoach',
    'views/website/findSponsor','views/website/talkToExpert','views/website/findTalent',
    'views/website/addRequirement','views/website/addCourse'
], function($, _, Backbone,utils,
		appStateIns,
		BaseController,DefaultWebSiteLayout,LoginSignupLayout,
		HomeViewDef,MissionViewDef,PartnersViewDef,
		TeamViewDef,LoginViewDef,RegisterViewDef,BrowseCoursesViewDef,UpdateSkillsViewDef,SearchJobsViewDef,FindCoachViewDef,
		FindSponsorViewDef,TalkToExpertViewDef,FindTalentViewDef,AddRequirementViewDef,AddCourseViewDef
){

	var WebSiteController = BaseController.extend({
		
		init : function(){
			this.authorizedRoles = ["*"]; 
		},
		
		
		getViewDetails : function(page,params){
			var pageViewDef = HomeViewDef;
			var layoutViewDef = DefaultWebSiteLayout;
			if(page.name == "mission"){
				pageViewDef = MissionViewDef;
			}
			else if(page.name == "partners"){
				pageViewDef = PartnersViewDef;
			}
			else if(page.name == "team"){
				pageViewDef = TeamViewDef;
			}
			else if(page.name == "login"){
				pageViewDef = LoginViewDef;
				layoutViewDef = LoginSignupLayout;
			}
			else if(page.name == "logout"){
				appStateIns.set({user:null},{silent : true});
				Backbone.history.navigate("#home/",true);			
			}
			else if(page.name == "register"){
				pageViewDef = RegisterViewDef;
				layoutViewDef = LoginSignupLayout;
			}
			else if(page.name == "browseCourses"){
				pageViewDef = BrowseCoursesViewDef;

			}			
			else if(page.name == "updateSkills"){
				pageViewDef = UpdateSkillsViewDef;

			}
			else if(page.name == "searchJobs"){
				pageViewDef = SearchJobsViewDef;

			}
			else if(page.name == "findCoach"){
				pageViewDef = FindCoachViewDef;

			}
			else if(page.name == "findSponsor"){
				pageViewDef = FindSponsorViewDef;

			}
			else if(page.name == "talkToExpert"){
				pageViewDef = TalkToExpertViewDef;

			}
			else if(page.name == "findTalent"){
				pageViewDef = FindTalentViewDef;

			}
			else if(page.name == "addRequirement"){
				pageViewDef = AddRequirementViewDef;

			}
			else if(page.name == "addCourse"){
				pageViewDef = AddCourseViewDef;

			}
			
			
			return {
				pageViewDef : pageViewDef,
				layoutViewDef : layoutViewDef,
				data : {},
				context : {}
			};
		}
	});
	return new WebSiteController();	  
});
