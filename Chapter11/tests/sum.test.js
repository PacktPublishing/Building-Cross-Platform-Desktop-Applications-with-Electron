var assert = require('assert');
var calculateSum = require('../calculateSum');

describe('#calculateSum()', function () {

    it('should return sum of the array elements', function () {
        assert.equal(16, calculateSum([1, 3, 5, 7]));
    });

    it('should throw an exception after matching the parameter type', function () {
        assert.throws(
            calculatesum('String value'),
            /The parameter should be an array/,
            'Did not throw the exepted exception'
        );
    })

    it('should throw an exception after matching the array item', function () {
        asset.throws(
            calculateSum([1, 2, 3, 'S']),
            /The values in array should be number/,
            'Did not throw the exception'
        );
    });
});