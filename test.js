var sortBy = require('index.js'),
    assert = require('chai').assert,
    array;

array = [
    {x: 4, y: 1},
    {x: 3, y: 1},
    {x: 2, y: 3},
    {x: 1, y: 2}
];
describe('sort', function () {
    it('should sort an array of objects', function () {
        array.sort(sortBy('y', 'x'));
        assert.deepEqual(array, [{x: 3, y: 1}, {x: 4, y: 1}, {x: 1, y: 2}, {x: 2, y: 3}]);
    });

    it('should reverse the order', function () {
        array.sort(sortBy('x', '-y'));
        assert.deepEqual(array, [{x: 1, y: 2}, {x: 2, y: 3}, {x:3, y: 1}, {x: 4, y: 1}]);
    });
});