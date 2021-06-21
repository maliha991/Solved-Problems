/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
	let output = s.split("");
	output.forEach((value, index) => {
		if (index % 2 != 0) {
			output[index] = String.fromCharCode(
				output[index - 1].charCodeAt() + parseInt(value)
			);
		}
	});
	return output.join("");
};
