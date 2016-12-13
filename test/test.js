'use strict';

var chai = require('chai');
var expect = chai.expect;

var validify = require('../validify');

describe('validate', function() {
  
    it('should return true for isInteger', function() {
      var input = 2;
      expect(validify.isInteger(input)).to.eql(true);    
    });

    it('should return false for isInteger', function() {
      var input = "hi";
      expect(validify.isInteger(input)).to.eql(false);    
    });
    
});