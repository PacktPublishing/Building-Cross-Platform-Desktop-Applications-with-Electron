module.exports = function calculateSum(arr) {
    let sum = 0;
    if (!arr instanceof Array) {
        throw new Error('The parameter should be an array');
    }
    arr.forEach(item => {
        if (typeof item != 'number') {
            throw new Error('The values in array should be number');
        }
        sum += item;
    });
    return sum;
}