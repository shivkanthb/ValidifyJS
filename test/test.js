'use strict';

var expect = require('expect'), validify = require('../validify');

describe('isEmpty', function() {
    it('should return true for empty input', function() {
        expect(validify.isEmpty("")).toBe(true);
    });

    it('should return false for non empty input', function() {
        expect(validify.isEmpty("greenarrow")).toBe(false);
    });
});

describe('isZipCode', function() {

    it('should return true for proper zipcode', function() {
        expect(validify.isZipCode(85281)).toBe(true);
    });

    it('should return false for improper zipcode', function() {
        expect(validify.isZipCode("greenarrow")).toBe(false);
    });

});
describe('isMMDDYYYY', function() {

    it('should return true for MMDDYYYY input', function() {
        expect(validify.isMMDDYYYYDate("12/31/2016")).toBe(true);
    });

    it('should return false for non MMDDYYYY input', function() {
        expect(validify.isMMDDYYYYDate("greenarrow")).toBe(false);
    });
});

describe('isDDMMYYYYDate', function() {

    it('should return true for DDMMYYYY date input', function() {
        expect(validify.isDDMMYYYYDate("31/12/2016")).toBe(true);
    });

    it('should return false for non DDMMYYYY date input', function() {
        expect(validify.isDDMMYYYYDate("greenarrow")).toBe(false);
    });
});

describe('is24HourTime', function() {

    it('should return true for valid 24 hour time input', function() {
        expect(validify.is24HourTime("23:00")).toBe(true);
    });

    it('should return false for invalid 24 hour time input', function() {
        expect(validify.is24HourTime("11:00 PM")).toBe(false);
    });
});

describe('is12HourTime', function() {

    it('should return true for valid 12 hour time input', function() {
        expect(validify.is12HourTime("12:00 AM")).toBe(true);
    });

    it('should return false for invalid 12 hour time input', function() {
        expect(validify.is12HourTime("23:00")).toBe(false);
    });
});

describe('isHtml', function() {

    it('should return true for valid html tag', function() {
        expect(validify.isHtml("<html>")).toBe(true);
    });

    it('should return false for invalid email input', function() {
        expect(validify.isHtml("<arrow")).toBe(false);
    });
});
describe('isHexColor', function() {

    it('should return true for hexcode input', function() {
        expect(validify.isHexColor("#FFFFFF")).toBe(true);
    });

    it('should return false for invalid hexcode input', function() {
        expect(validify.isHexColor("#GREENA")).toBe(false);
    });
});

describe('isUrl', function() {

    it('should return true for valid url input', function() {
        expect(validify.isUrl("http://www.google.com")).toBe(true);
    });

    it('should return false for invalid url input', function() {
        expect(validify.isUrl("green arrow")).toBe(false);
    });
});

describe('isEmail', function() {

    it('should return true for valid email input', function() {
        expect(validify.isEmail("hariv2992@gmail.com")).toBe(true);
    });

    it('should return false for invalid email input', function() {
        expect(validify.isEmail("green arrow")).toBe(false);
    });
});

describe('isNumber', function() {
    it('should return true for numeric input', function() {
        expect(validify.isNumber(2.0)).toBe(true);
    });

    it('should return false for non numeric input', function() {
        expect(validify.isNumber("green arrow")).toBe(false);
    });
});


describe('isInteger', function() {
    
    it('should return true for integer input', function() {
	expect(validify.isInteger(2)).toBe(true);    
    });
    
    it('should return false for non integer input', function() {
	expect(validify.isInteger(0.5)).toBe(false);    
    });
    
});

describe('isPositive', function() {
    
    it('should call isNumber', function() {
	var spy = expect.spyOn(validify, 'isNumber')
	validify.isPositive(2);
	expect(spy).toHaveBeenCalled();
	expect.restoreSpies();
    });
    
    it('should return true for positive input', function() {
	expect(validify.isPositive(2)).toBe(true);
    });
    
    it('should return false for negative input', function() {
        expect(validify.isPositive(-2)).toBe(false);
    });
});

describe('isNegative', function() {

    it('should call isNumber', function() {
        var spy = expect.spyOn(validify, 'isNumber')
        validify.isNegative(2);
        expect(spy).toHaveBeenCalled();
        expect.restoreSpies();
    });
    
    it('should return true for negative input', function() {
        expect(validify.isNegative(-2)).toBe(true);
    });
    
    it('should return false for positive input', function() {
        expect(validify.isNegative(2)).toBe(false);
    });
});

describe('isPhoneNumber', function() {
    
    it('should return true for proper phone number', function() {
	expect(validify.isPhoneNumber('+91 (123) 456-7890')).toBe(true);
    });
    
    it('should return false for proper phone number', function() {
	expect(validify.isPhoneNumber('Green Arrow')).toBe(false);
    });
});

describe('isIpv4', function() {

    it('should return true for IPv4 input', function() {
        expect(validify.isIpv4("172.16.254.1")).toBe(true);
    });
    
    it('should return false for non IPv4 input', function() {
        expect(validify.isIpv4("172.16.257.1")).toBe(false);
    });
});

describe('isIpv6', function() {

    it('should return true for IPv6 input', function() {
        expect(validify.isIpv6("2001:0DB8:AC10:FE01::")).toBe(true);
    });

    it('should return false for non IPv6 input', function() {
        expect(validify.isIpv6("10000000:0DB8:AC10:FE01::")).toBe(false);
    });
});