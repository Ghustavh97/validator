"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * EAN
		 * @description Test if `value` is an EAN (European Article Number).
		 *
		 * @param {String} value value to test
		 * @return {Boolean} true if `value` is an EAN (European Article Number), false otherwise
		 * @api public
		 */
		EAN: function (value) {
			return this.validator.isEAN(...arguments);
		},
	});
};
