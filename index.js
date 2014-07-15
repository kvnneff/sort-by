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