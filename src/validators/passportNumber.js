"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * passportNumber
		 * @description Test if `value` is a valid passport number.
		 *
		 * @since 0.0.1
		 * @param {String} value `value` to test
		 * @param {Object} countryCode one of [ 'AM', 'AR', 'AT', 'AU', 'BE', 'BG',
		 * 'CA', 'CH', 'CN', 'CY', 'CZ', 'DE', 'DK', 'DZ', 'EE', 'ES', 'FI', 'FR', 'GB',
		 * 'GR', 'HR', 'HU', 'IE' 'IN', 'IS', 'IT', 'JP', 'KR', 'LT', 'LU', 'LV', 'MT',
		 * 'NL', 'PO', 'PT', 'RO', 'SE', 'SL', 'SK', 'TR', 'UA', 'US' ].
		 * @return {Boolean} true if `value is a valid passport number, otherwise false.
		 * @throws {TypeError} if `value` is not a `string`
		 * @access public
		 * @example
		 *
		 * is.passportNumber("AF0549358", "AM"); // => True
		 * is.passportNumber("A1054935", "AM"); // => False
		 *
		 */
		passportNumber: function (value, countryCode) {
			return this.validator.isPassportNumber(...arguments);
		},
	});
};
