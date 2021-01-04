function getMoneyChange (money) {
  let result = '';
  let stocksReverse = Object.keys(moneyStocks).reverse();

  // karena moneyStocks constan
  let stocks = moneyStocks;
  
  stocksReverse.forEach(el => {
    let totalStock = 0;
  
    for (const key in stocks) {
      if (stocks[`${key}`]) {
        totalStock += +key * stocks[`${key}`];
      }
    }
  
    let temp = 0;
    
    while (totalStock >= money && money >= el && stocks[`${el}`] != 0) {
      stocks[`${el}`] --;
      money -= el;
      temp ++;
    }
    
    if (temp) result += `${el} ${temp} lembar\n`;

  })

  if (result) {
    return result;
  } else return 'Maaf uang kembalian tidak cukup';
};

const moneyStocks = {
  100000: 1,
  50000: 2,
  20000: 4,
  10000: 5,
  5000: 5,
  1000: 10,
  500: 5
};

console.log(getMoneyChange(75000));
console.log(getMoneyChange(190000));
console.log(getMoneyChange(190000));
console.log(getMoneyChange(100000));
console.log(getMoneyChange(400));