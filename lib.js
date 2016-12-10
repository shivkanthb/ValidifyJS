(function(window){
    'use strict';

    function define_library(){
        var Lib = {
            pattern: undefined,
        };
        var proj = "validify";

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