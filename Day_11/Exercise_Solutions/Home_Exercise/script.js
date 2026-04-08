// 1. Use .filter() to get prices over 20.
// 2. Use .map() (with arrow functions) to add a 10% tax (multiply by 1.1).
// 3. Use .reduce() to find the total sum.
// Log the final result.

let prices = [15, 30, 25, 10, 50];

let total = prices
    .filter(price => price > 20)
    .map(price => price * 1.1)
    .reduce((acc, price) => acc + price);

console.log("Total after tax: $" + total.toFixed(2));
