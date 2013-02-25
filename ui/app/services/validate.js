define([
        'jquery',
        "services/logger",
        ], function($,Logger) {
	
	
	var ValidateUtil = {
		validateAll : function(){
			return this.checkMandatory();
		},	
		checkMandatory : function(){
			var valid = true;
			$(".dataValidate-mandatory").siblings("span.error").remove();
			$(".dataValidate-mandatory").each(function(){
				if($(this).val() == "" || $(this).val().length == 0){
					$(this).addClass('error');
					$('<span class="error">This is a required field.</span>').insertAfter($(this));
					valid = false;
				}
			});
			return valid;
		},

	};

	return ValidateUtil;

});

