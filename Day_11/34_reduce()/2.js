// .reduce() = reduce the elements of an array
//             to a single value

const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(e1, e2) {
  return Math.max(e1, e2);
}

function getMin(e1, e2) {
  return Math.min(e1, e2);
}
/*
95
50
*/
