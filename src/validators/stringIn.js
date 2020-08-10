"use strict";

module.exports = function (v) {
	Object.assign(v.prototype, {
		/**
		 * stringIn
		 * @description Test if `value` is in an array of allowed values.
		 *
		 *
		 * @param {String} value value to test
		 * @param {Array} arr array to check in
		 * @return {Boolean} true if 'value' is in an array of allowed values, false otherwise
		 * @api public
		 */
		stringIn: function (value, arr) {
			return this.validator.isIn(...arguments);
		},
	});
};
