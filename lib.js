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
	
        Lib.isEmpty = function(input) {
            return input.length == 0;
        }
	
	Lib.isMMDDYYYYDate = function(input) {
	    Lib.pattern = /^\d{2}\/\d{2}\/\d{4}$/;
	    return(Lib.pattern.test(input));
	}
	
	Lib.isDDMMYYYYDate = function(input) {
	    Lib.pattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
	    return(Lib.pattern.test(input));
	}
	
	Lib.is24HourTime = function(input) {
	    Lib.pattern = /^([01]\d|2[0-3]):?([0-5]\d)$/;
	    return(Lib.pattern.test(input));
	}
	
	Lib.is12HourTime = function(input) {
	    Lib.pattern = /^(0?[1-9]|1[012])(:[0-5]\d) [APap][mM]$/;
	    return(Lib.pattern.test(input));
	}
	
	Lib.isHtml = function(input) {
	    Lib.pattern = /(<([^>]+)>)/ig;
	    return(Lib.pattern.test(input));
	}
	
	Lib.isHexColor = function(input) {
	    Lib.pattern = /^#([0-9a-f]{6}|[0-9a-f]{3})$/i
	    return(Lib.pattern.test(input));
	}

	Lib.isUrl = function(input) {
	    Lib.pattern = /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
	    return(Lib.pattern.test(input));
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

        Lib.isIpv4 = function(input) {
            Lib.pattern = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
            return(Lib.pattern.test(input));
        }
	
	Lib.isIpv6 = function(input) {
	    Lib.pattern = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
	    return (Lib.pattern.test(input));
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