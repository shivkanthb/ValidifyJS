(function() {

    var validify = {
      	isEmpty: function(input) {
            return input.length == 0;
        },

      	isMMDDYYYYDate: function(input, pattern) {
            pattern = pattern || /^\d{2}\/\d{2}\/\d{4}$/;
            return (pattern.test(input));
        },

    	isDDMMYYYYDate: function(input, pattern) {
            pattern = pattern || /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
            return (pattern.test(input));
        },

  		is24HourTime: function(input, pattern) {
            pattern = pattern || /^([01]\d|2[0-3]):?([0-5]\d)$/;
            return (pattern.test(input));
        },

  		is12HourTime: function(input, pattern) {
            pattern = pattern || /^(0?[1-9]|1[012])(:[0-5]\d) [APap][mM]$/;
            return (pattern.test(input));
        },

  		isHtml: function(input, pattern) {
            pattern = pattern || /(<([^>]+)>)/ig;
            return (pattern.test(input));
        },

  		isHexColor: function(input, pattern) {
            pattern = pattern || /^#([0-9a-f]{6}|[0-9a-f]{3})$/i
            return (pattern.test(input));
        },

  		isUrl: function(input, pattern) {
            pattern = pattern || /^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
            return (pattern.test(input));
        },

  		isEmail: function(input, pattern) {
            pattern = pattern || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return (pattern.test(input));
        },

  		isNumber: function(input, pattern) {
            pattern = pattern || /^\d+$/;
            return (pattern.test(input));
        },

  		isInteger: function(input, pattern) {
            pattern = pattern || /^[-+]?\d+$/;
            return (pattern.test(input));
        },

  		isPositive: function(input, pattern) {
            pattern = pattern || /^\d+$/;
            return (pattern.test(input));
        },

  		isNegative: function(input, pattern) {
            pattern = pattern || /^-\d+$/;
            return (pattern.test(input));
        },

        /*
        Matches the following patterns
        123-456-7890
        (123) 456-7890
        123 456 7890
        123.456.7890
        +91 (123) 456-7890
        */

  		isPhoneNumber: function(input, pattern) {
            pattern = pattern || /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
            return (pattern.test(input));
        },

  		isIpv4: function(input, pattern) {
            pattern = pattern || /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
            return (pattern.test(input));
        },

  		isIpv6: function(input, pattern) {
            pattern = pattern || /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$|^(([a-zA-Z]|[a-zA-Z][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z]|[A-Za-z][A-Za-z0-9\-]*[A-Za-z0-9])$|^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
            return (pattern.test(input));
        },
    };

    if (typeof exports == 'undefined') {
        window.validify = validify;
    } else {
        module.exports = validify;
    }
})();