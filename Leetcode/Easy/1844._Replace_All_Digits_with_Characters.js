/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
	return s
		.split("")
		.map((value, index) => {
			if (isNaN(value)) return value;
			else
				return String.fromCharCode(s[index - 1].charCodeAt() + parseInt(value));
		})
		.join("");
};
