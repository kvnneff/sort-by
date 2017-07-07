/**
 * Return a comparator function that sorts by multiple keys
 * @return {Function} Returns the comparator function
 */
declare function sortBy( ...args: string[] ): () => number;

export default sortBy;
