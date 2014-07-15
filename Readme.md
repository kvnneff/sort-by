sortBy
=====================


A utility to create comparator functions for the native `Array.sort()`.  Allows for sorting by multiple properties.

A majority of the code comes from [this StackOverflow answer][1].

----------


Example
---------

    var sortBy = require('sort-by'),
        users = [];
        
    users = [{
        id: 7,
        name: 'Foo',
        age: '34'
    }, {
        id: 3,
        name: 'Baz',
        age: '67'
    }, {
        id: 4,
        name: 'Bar',
        age: '67'
    }];
    
    users.sort(sortBy('name', 'age'));
    
    /**
    *   result: 
    *       [{id: 4, name: 'Bar', age: '67'},
    *       {id: 3, name: 'Baz', age: '67'},
    *       {id: 7, name: 'Foo', age: '34'}]
    */
    
    /**
    * Use `-` to reverse the sort order
    */
    
    users.sort(sortBy('-id', 'name'));
    
    /*
    *   result: 
    *       [{id: 7, name: 'Foo', age: '34'},
    *       {id: 4, name: 'Bar', age: '67'},
    *       {id: 3, name: 'Baz', age: '67'}]
    */

Run tests
---
    npm install .
    npm test

License
---
(The MIT License)

Copyright (c) 2013 River Grimm river.grimm@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


  [1]: http://stackoverflow.com/a/4760279