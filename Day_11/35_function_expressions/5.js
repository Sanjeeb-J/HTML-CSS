// Squaring by function expressions

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function (element) {
  return Math.pow(element, 2);
});
const cubes = numbers.map(function (element) {
  return Math.pow(element, 3);
});

console.log(squares);
console.log(cubes);
