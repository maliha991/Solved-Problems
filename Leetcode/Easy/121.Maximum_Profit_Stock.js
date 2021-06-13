/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let maxProfit = 0;
    let minPrice = prices[0];
    prices.slice(1, prices.length).forEach((item) => {
        minPrice = Math.min(minPrice, item);
        let currProf = item - minPrice;
        maxProfit = Math.max(maxProfit, currProf);
    });
    return maxProfit;
};