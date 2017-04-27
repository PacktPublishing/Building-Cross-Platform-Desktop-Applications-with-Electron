var assert = require('assert');
var calculateSum = require('../calculateSum');

describe('Sum', function () {
    describe('#calculateSum()', function () {
        it('should return sum of the array elements', function () {
            assert.equal(16, calculateSum([1, 3, 5, 7]));
        });
    });
});