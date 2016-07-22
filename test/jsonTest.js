var assert = require('chai').assert;
require('../index');

describe('Json', function() {
    describe('tryParse', function() {
        it('Should return the object even if trying to parse existing object', function() {
            var obj = {
                foo: "bar"
            };
            assert.equal(obj, JSON.tryParse(obj));
        });
    });
    describe('tryStringify', function() {
        it('Should return the stringified object even if already stringified', function() {
            var obj = {
                foo: "bar"
            };
            var strObj = JSON.stringify(obj);
            assert.equal(strObj, JSON.tryStringify(strObj));
        });
    });
});