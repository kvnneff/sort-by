'use strict';
try {
    var assert = require('insist');
} catch(e) {
    var assert = require('component/assert');
}
var sortBy = require('..');
var array = [];

array.push({x: 4, y: 1, z: {a: 2}});
array.push({x: 3, y: 1, z: {a: 3}});
array.push({x: 2, y: 3, z: {a: 3}});
array.push({x: 1, y: 2, z: {a: 1}});

describe('Sort()', function () {
    it('returns a function', function () {
        assert(typeof sortBy() === 'function');
    });
});

describe('Sort(prop)', function () {
    it('sorts an array of objects using given property name', function () {
        array.sort(sortBy('x'));
        assert(array[0].x === 1);
        assert(array[0].y === 2);
        assert(array[3].x === 4);
        assert(array[3].y === 1);
    });
});

describe('Sort(prop, prop)', function () {
    it('sorts an array of objects using multiple property names', function () {
        array.sort(sortBy('y', 'x'));
        assert(array[0].x === 3);
        assert(array[0].y === 1);
        assert(array[3].x === 2);
        assert(array[3].y === 3);
    });
});

describe('Sort(-prop)', function () {
    it('reverses the sort order', function () {
        array.sort(sortBy('-y', 'x'));
        assert(array[0].x === 2);
        assert(array[0].y === 3);
        assert(array[3].x === 4);
        assert(array[3].y === 1);
    });
});

describe('Sort(prop.prop)', function () {
    it('sorts an array of objects with nested properties', function () {
        array.sort(sortBy('z.a', 'y'));
        assert(array[0].x === 1);
        assert(array[0].y === 2);
        assert(array[3].x === 2);
        assert(array[3].y === 3);
    });
});

describe('Sort(-prop.prop)', function () {
    it('reverse sorts an array of objects with nested properties', function () {
        array.sort(sortBy('-z.a', 'y'));
        assert(array[0].x === 3);
        assert(array[0].y === 1);
        assert(array[3].x === 1);
        assert(array[3].y === 2);
    });
});