const numbers = [1, 2, 3, 4, 5, 6];
const even = numbers.filter(function (element) {
  return element % 2 === 0;
});
const odd = numbers.filter(function (element) {
  return element % 2 !== 0;
});

console.log(even);
console.log(odd);
