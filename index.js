
module.exports = like;

/**
 * Check if the given `obj` has `prop`
 *
 * Works even if `obj` has `#hasOwnProperty`
 * overwritten because people are stupid
 *
 * @api private
 * @param {Object} obj
 * @param {String} prop
 * @return {Boolean}
 */

function hap(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/**
 * Check if the given `obj` is array-like
 *
 * @api public
 * @param {Mixed} obj
 * @return {Boolean
 */

function like(obj) {
  if (typeof obj !== 'object') return false;
  if (!hap(obj, 'length')) return false;
  if (isNaN(obj.length)) return false;
  if (obj.length == null) return false;
  return true;
}
