function maxProfit(prices) {
    let buy = prices[0];
    let sell = 0;
    let profit = 0;
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (buy > prices[i]) {
            buy = prices[i];
            sell = 0;
        }
        if (sell < prices[i]) {
            sell = prices[i];
        }
        profit = sell - buy;
        maxProfit = Math.max(maxProfit, profit);
    }
    return maxProfit;
}

var prcArr1 = [7, 1, 5, 3, 6, 4];
var prcArr2 = [7, 6, 4, 3, 1];
var prcArr3 = [2,4,1];
var prices_1 = maxProfit(prcArr1);
var prices_2 = maxProfit(prcArr2);
var prices_3 = maxProfit(prcArr3);

console.log(`the max profit for ${prcArr1} is ${prices_1}`);
console.log(`the max profit for ${prcArr2} is ${prices_2}`);
console.log(`the max profit for ${prcArr3} is ${prices_3}`);