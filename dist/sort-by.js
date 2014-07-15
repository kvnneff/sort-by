
;(function(){

/**
 * Require the module at `name`.
 *
 * @param {String} name
 * @return {Object} exports
 * @api public
 */

function require(name) {
  var module = require.modules[name];
  if (!module) throw new Error('failed to require "' + name + '"');

  if (!('exports' in module) && typeof module.definition === 'function') {
    module.client = module.component = true;
    module.definition.call(this, module.exports = {}, module);
    delete module.definition;
  }

  return module.exports;
}

/**
 * Registered modules.
 */

require.modules = {};

/**
 * Register module at `name` with callback `definition`.
 *
 * @param {String} name
 * @param {Function} definition
 * @api private
 */

require.register = function (name, definition) {
  require.modules[name] = {
    definition: definition
  };
};

/**
 * Define a module's exports immediately with `exports`.
 *
 * @param {String} name
 * @param {Generic} exports
 * @api private
 */

require.define = function (name, exports) {
  require.modules[name] = {
    exports: exports
  };
};
require.register("dynamic-sort", function (exports, module) {
var sortBy,
    sort;

/**
 * Return a comparator function
 * @param  {String} property The key to sort by
 * @return {Function}        Returns the comparator function
 */
sort = function sort(property) {
    var sortOrder = 1,
        fn;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    fn = function fn(a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }

    return fn;
};

/**
 * Return a comparator function that sorts by multiple keys
 * @return {Function} Returns the comparator function
 */
sortBy = function sortBy() {
    var props = arguments,
        fn;
    
    fn =  function fn(obj1, obj2) {
        var numberOfProperties = props.length,
            result = 0,
            i = 0;

        /* try getting a different result from 0 (equal)
         * as long as we have extra properties to compare
         */
        while(result === 0 && i < numberOfProperties) {
            result = sort(props[i])(obj1, obj2);
            i++;
        }
        return result;
    };

    return fn;
};

module.exports = sortBy;
});

if (typeof exports == "object") {
  module.exports = require("dynamic-sort");
} else if (typeof define == "function" && define.amd) {
  define([], function(){ return require("dynamic-sort"); });
} else {
  this["sortBy"] = require("dynamic-sort");
}
})()
