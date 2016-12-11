(function(window){
    'use strict';

    function define_library(){
        var Lib = {
            pattern: undefined,
        };
        var proj = "validify";
	
	Lib.validateForm = function(form) {
	    var elements = form.elements, response = [], responseObject, i, input, check;
	    for(i=0;i<elements.length;i++) {
		input = elements[i];
		check = input.getAttribute("data-validify");
		if(check != null) {
		    responseObject = {};
		    responseObject.field = input.id;
		    responseObject.status = Lib["is"+check.charAt(0).toUpperCase() + check.slice(1)](input.value);
		    response.push(responseObject);
		}
	    }
	    return response;
	}
	
        Lib.isInputEmpty = function(input) {
            return input.length == 0;
        }

        Lib.isEmail = function(input){
            Lib.pattern= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return(Lib.pattern.test(input));
        }

        Lib.isNumber = function(input) {
            Lib.pattern =  /^\d+$/;
            return(Lib.pattern.test(input));
        }

        Lib.isInteger = function(input) {
            Lib.pattern =  /^[-+]?\d+$/;
            return(Lib.pattern.test(input));
        }

        Lib.isPositive = function(input) {
            Lib.pattern =  /^\d+$/;
            return(Lib.pattern.test(input));
        }

        Lib.isNegative = function(input) {
            Lib.pattern =  /^-\d+$/;
            return(Lib.pattern.test(input));
        }

        /*
        Matches the following patterns
        123-456-7890
        (123) 456-7890
        123 456 7890
        123.456.7890
        +91 (123) 456-7890
        */
        
        Lib.isPhoneNumber = function(input) {
            Lib.pattern = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
            return(Lib.pattern.test(input));
        }

        Lib.isIPv4 = function(input) {
            Lib.pattern = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
            return(Lib.pattern.test(input));
        }

        return Lib;
    }

    //define globally if it doesn't already exist
    if(typeof(Lib) === 'undefined'){
        window.Lib = define_library();
    }
    else{
        console.log("Library already defined.");
    }
})(window);