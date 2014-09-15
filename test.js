var sortBy = require('./index.js'),
    assert = require('chai').assert,
    array, array2;

array = [
    {x: 4, y: 1},
    {x: 3, y: 1},
    {x: 2, y: 3},
    {x: 1, y: 2}
];

array2 = [
    {x: 4, y: 1, z: {a: 2}},
    {x: 3, y: 1, z: {a: 3}},
    {x: 2, y: 3, z: {a: 3}},
    {x: 1, y: 2, z: {a: 1}}
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

    it('should sort an array of objects with nested properties', function () {
        array2.sort(sortBy('z.a', 'y'));
        assert.deepEqual(array2, [{x: 1, y: 2, z: {a: 1}}, {x: 4, y: 1, z: {a: 2}}, {x: 3, y: 1, z: {a: 3}}, {x: 2, y: 3, z: {a: 3}}]);
    });

    it('should reverse sort an array of objects with nested properties', function () {
        array2.sort(sortBy('-z.a', 'y'));
        assert.deepEqual(array2, [{x: 3, y: 1, z: {a: 3}}, {x: 2, y: 3, z: {a: 3}}, {x: 4, y: 1, z: {a: 2}}, {x: 1, y: 2, z: {a: 1}}]);
    });
});