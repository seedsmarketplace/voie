define([  //Services
          "ext/backbone/seedscollection",
          "ext/backbone/seedsmodel",
          "ext/backbone/seedsrouter",
          "ext/backbone/seedsview",
],function(SeedsCollection,SeedsModel,SeedsRouter,SeedsView){
	
	return {
		SeedsCollection : SeedsCollection,
		SeedsModel : SeedsModel,
		SeedsRouter : SeedsRouter,
		SeedsView : SeedsView
	};
	
});
