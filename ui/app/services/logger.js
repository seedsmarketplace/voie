define([  //Services
],
function(){
	
	var logMessage = function(msg,type){
		type = type || 'info';
		if(type === "error"){
			console.error("ERROR : " + ((typeof msg === 'object') ? JSON.stringify(msg):msg)) ;
		}
		else if(type === "info"){
			console.log("INFO : " + ((typeof msg === 'object') ? JSON.stringify(msg):msg)) ;
		}
		else if(type === "warn"){
			console.log("WARN : " + ((typeof msg === 'object') ? JSON.stringify(msg):msg)) ;
		}
		else if(type === "debug"){
			console.log("DEBUG : " + ((typeof msg === 'object') ? JSON.stringify(msg):msg)) ;
		}
		
	};
	
	var logger = {
		info : function(msg){
			logMessage(msg,"info");
		},
		
		debug : function(msg) {
			logMessage(msg,"debug");
		},
		
		warn : function(msg){
			logMessage(msg,"warn");
		},
		error : function(msg){
			logMessage(msg,"error");
		}
	};
	
	return {
		info : logger.info,
		debug : logger.debug,
		warn : logger.warn,
		error : logger.error
	};
});
