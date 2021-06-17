/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let output = [];
    indices.forEach((value, index) => {
       output[value] = s.charAt(index);
    });
    return output.join("");
};