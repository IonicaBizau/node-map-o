// Dependencies
const iterateObject = require("iterate-object");

/**
 * mapObject
 * Array-map like for objects.
 *
 * @name mapObject
 * @function
 * @param {Object} obj The input object.
 * @param {Function} fn A function returning the field values.
 * @param {Boolean} clone If `true`, the input object will be cloned, so the original object will not be changed.
 * @return {Object} The modified object.
 */
function mapObject(obj, fn, clone) {
    var dst = obj;
    if (clone) {
        dst = typeof clone === "object" ? clone : {};
    }

    IterateObject(obj, function (v, n, o) {
        dst[n] = fn(v, n, o);
    });

    return dst;
}

/**
 * proto
 * Appends the `map` method to the `Object` prototype.
 *
 * @name proto
 * @function
 */
mapObject.proto = function () {
    Object.prototype.map = function (fn) {
        return mapObject(this, fn);
    };
};

module.exports = mapObject;
