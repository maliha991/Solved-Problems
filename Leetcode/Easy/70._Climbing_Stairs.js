/**
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let first = 0;
    let second = 1;
    let total = 0;
    for(let i=0; i<n; i++){
        total = first + second;
        first = second;
        second = total;
    }
    return total;
};