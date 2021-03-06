"use strict";

const validator = require("validator");

/**
 * @name postalCode
 * @description Test if `value` is a postal code.
 *
 * @since 0.0.1
 * @param {String} value `value` to test
 * @param {String} locale (locale is one of [ 'AD', 'AT', 'AU', 'AZ', 'BE',
 * 'BG', 'BR', 'CA', 'CH', 'CZ', 'DE', 'DK', 'DZ', 'EE', 'ES', 'FI', 'FR', 'GB',
 * 'GR', 'HR', 'HU', 'ID', 'IE' 'IL', 'IN', 'IR', 'IS', 'IT', 'JP', 'KE', 'LI',
 * 'LT', 'LU', 'LV', 'MT', 'MX', 'NL', 'NO', 'NP', 'NZ', 'PL', 'PR', 'PT', 'RO',
 * 'RU', 'SA', 'SE', 'SI', 'TN', 'TW', 'UA', 'US', 'ZA', 'ZM' ] OR 'any'.
 * If 'any' is used, function will check if any of the locals match.
 * @return {Boolean} true if `value is a valid postal code, otherwise false.
 * @throws {TypeError} if `value` is not a `string`
 * @access public
 * @example
 *
 * is.postalCode("39100-000", "BR"); // => True
 * is.postalCode("78908", "BR"); // => False
 *
 */

module.exports = function (value, locale) {
    return validator.isPostalCode(...arguments);
};
