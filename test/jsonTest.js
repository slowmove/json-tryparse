var assert = require('chai').assert;
require('../index');

var obj = {
    foo: "bar"
};
var strObj = JSON.stringify(obj);

describe('Json', function() {
    describe('tryParse', function() {
        it('Should return the object even if trying to parse existing object', function() {
            assert.equal(obj, JSON.tryParse(obj));
        });
        it('Should return the object trying to parse a stringified json', function() {
            assert.isObject(JSON.tryParse(strObj));
        });
    });
    describe('tryStringify', function() {
        it('Should return the stringified object even if already stringified', function() {
            assert.equal(strObj, JSON.tryStringify(strObj));
        });
        it('Should return the stringified object trying to parse a json object', function() {
            assert.equal(strObj, JSON.tryStringify(obj));
        });
    });
});