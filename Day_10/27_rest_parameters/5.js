// rest parameters = (...rest) allow a function work with a variable
//                   number of arguments ay bundling them into an array

//                    spread = expands an array into separate elements
//                    rest = bundles separate elements into an array

// rest parameters used in function

function getAverage(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result / numbers.length;
}

const total = getAverage(75, 100, 82, 92);

console.log(total);
