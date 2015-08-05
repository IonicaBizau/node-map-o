// Dependencies
var IterateObject = require("iterate-object")
  , Ul = require("ul")
  ;

/**
 * Mapo
 * Array-map like for objects.
 *
 * @name Mapo
 * @function
 * @param {Object} obj The input object.
 * @param {Function} fn A function returning the field values.
 * @param {Boolean} clone If `true`, the input object will be cloned, so the original object will not be changed.
 * @return {Object} The modified object.
 */
function Mapo(obj, fn, clone) {
    if (clone) {
        obj = Ul.clone(obj);
    }
    IterateObject(obj, function (v, n, o) {
        obj[n] = fn(n, v, o);
    });
    return obj;
}

/**
 * proto
 * Appends the `map` method to the `Object` prototype.
 *
 * @name proto
 * @function
 */
Mapo.proto = function () {
    Object.prototype.map = function (fn) {
        return Mapo(this, fn);
    };
};

module.exports = Mapo;
