/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let first = cost[0];
    let second = cost[1];
    if(cost.length <=2) return Math.min(first, second);
    let current = 0;
    for(let i=2; i<cost.length; i++){
        current = cost[i] + Math.min(first, second);
        first = second;
        second = current;
    }
    return Math.min(first, second);
};