'use strict';

var expect = require('expect'), Lib = require('../validify');

describe('isEmpty', function() {

    it('should return true for empty input', function() {
        expect(Lib.isEmpty("")).toBe(true);
    });

    it('should return false for non empty input', function() {
        expect(Lib.isEmpty("greenarrow")).toBe(false);
    });
});


describe('isMMDDYYYY', function() {

    it('should return true for MMDDYYYY input', function() {
        expect(Lib.isMMDDYYYYDate("12/31/2016")).toBe(true);
    });

    it('should return false for non MMDDYYYY input', function() {
        expect(Lib.isMMDDYYYYDate("greenarrow")).toBe(false);
    });
});

describe('isDDMMYYYYDate', function() {

    it('should return true for DDMMYYYY date input', function() {
        expect(Lib.isDDMMYYYYDate("31/12/2016")).toBe(true);
    });

    it('should return false for non DDMMYYYY date input', function() {
        expect(Lib.isDDMMYYYYDate("greenarrow")).toBe(false);
    });
});

describe('is24HourTime', function() {

    it('should return true for valid 24 hour time input', function() {
        expect(Lib.is24HourTime("23:00")).toBe(true);
    });

    it('should return false for invalid 24 hour time input', function() {
        expect(Lib.is24HourTime("11:00 PM")).toBe(false);
    });
});

describe('is12HourTime', function() {

    it('should return true for valid 12 hour time input', function() {
        expect(Lib.is12HourTime("12:00 AM")).toBe(true);
    });

    it('should return false for invalid 12 hour time input', function() {
        expect(Lib.is12HourTime("23:00")).toBe(false);
    });
});

describe('isHtml', function() {

    it('should return true for valid html tag', function() {
        expect(Lib.isHtml("<html>")).toBe(true);
    });

    it('should return false for invalid email input', function() {
        expect(Lib.isHtml("<arrow")).toBe(false);
    });
});
describe('isHexColor', function() {

    it('should return true for hexcode input', function() {
        expect(Lib.isHexColor("#FFFFFF")).toBe(true);
    });

    it('should return false for invalid hexcode input', function() {
        expect(Lib.isHexColor("#GREENA")).toBe(false);
    });
});

describe('isUrl', function() {

    it('should return true for valid url input', function() {
        expect(Lib.isUrl("http://www.google.com")).toBe(true);
    });

    it('should return false for invalid url input', function() {
        expect(Lib.isUrl("green arrow")).toBe(false);
    });
});

describe('isEmail', function() {

    it('should return true for valid email input', function() {
        expect(Lib.isEmail("hariv2992@gmail.com")).toBe(true);
    });

    it('should return false for invalid email input', function() {
        expect(Lib.isEmail("green arrow")).toBe(false);
    });
});

describe('isNumber', function() {
    it('should return true for numeric input', function() {
        expect(Lib.isNumber(2.0)).toBe(true);
    });

    it('should return false for non numeric input', function() {
        expect(Lib.isNumber("green arrow")).toBe(false);
    });
});


describe('isInteger', function() {
    
    it('should return true for integer input', function() {
	expect(Lib.isInteger(2)).toBe(true);    
    });
    
    it('should return false for non integer input', function() {
	expect(Lib.isInteger(0.5)).toBe(false);    
    });
    
});

describe('isPositive', function() {
    
    it('should return true for positive input', function() {
	expect(Lib.isPositive(2)).toBe(true);
    });

    it('should return false for negative input', function() {
        expect(Lib.isPositive(-2)).toBe(false);
    });
});

describe('isNegative', function() {

    it('should return true for negative input', function() {
        expect(Lib.isNegative(-2)).toBe(true);
    });

    it('should return false for positive input', function() {
        expect(Lib.isNegative(2)).toBe(false);
    });
});

describe('isIpv4', function() {

    it('should return true for IPv4 input', function() {
        expect(Lib.isIpv4("172.16.254.1")).toBe(true);
    });

    it('should return false for non IPv4 input', function() {
        expect(Lib.isIpv4("172.16.257.1")).toBe(false);
    });
});

describe('isIpv6', function() {

    it('should return true for IPv6 input', function() {
        expect(Lib.isIpv6("2001:0DB8:AC10:FE01::")).toBe(true);
    });

    it('should return false for non IPv6 input', function() {
        expect(Lib.isIpv6("10000000:0DB8:AC10:FE01::")).toBe(false);
    });
});