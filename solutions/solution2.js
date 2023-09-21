function findMaxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = -1;
    let buyDay = 0;
    let sellDay = 0;
  
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] < minPrice) {
        minPrice = prices[i];
        buyDay = i;
      } else if (prices[i] - minPrice > maxProfit) {
        maxProfit = prices[i] - minPrice;
        sellDay = i;
      }
    }
  
    if (maxProfit === -1) {
      return -1;
    } else {
      return `Buy on day ${buyDay + 1} at price ${prices[buyDay]} Sell on day ${sellDay + 1} at price ${prices[sellDay]} Max profit: ${maxProfit}`;
    }
  }
  
  const prices1 = [100, 180, 260, 310, 40, 535, 695];
  console.log(findMaxProfit(prices1)); // Buy on day 5 at price 40 Sell on day 7 at price 695 Max profit: 655
  
  const prices2 = [100, 90, 80, 70, 60, 50];
  console.log(findMaxProfit(prices2)); // -1
  
  const prices3 = [100, 200, 300, 400, 500];
  console.log(findMaxProfit(prices3)); // Buy on day 1 at price 100 Sell on day 5 at price 500 Max profit: 400
  
  const prices4 = [500, 400, 300, 200, 100];
  console.log(findMaxProfit(prices4)); // -1
  
  const prices5 = [100, 200, 150, 300, 250];
  console.log(findMaxProfit(prices5)); 