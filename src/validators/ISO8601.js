"use strict";

const validator = require("validator");

/**
 * @name ISO8601
 * @description Test if `value` is a valid ISO 8601 date; for additional checks for valid dates, e.g. invalidates dates like 2009-02-29, pass options object as a second parameter with options.strict = true.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @return {Boolean} true if `value` is a valid ISO 8601, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.ISO8601("2009-12T12:34"); // => True
 * is.ISO8601("200905"); // => False
 *
 * is.ISO8601("2000-02-29", { strict: true }); // => True
 * is.ISO8601("2010-02-30", { strict: true }); // => False
 *
 */

module.exports = function (value) {
    return validator.isISO8601(...arguments);
};
