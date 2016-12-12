
module.exports = {

	isEmpty : function(input) {
		return input.length == 0;
	},

	isInteger : function(input, pattern) {
		pattern = pattern || /^[-+]?\d+$/;
		return(pattern.test(input));
	},


};