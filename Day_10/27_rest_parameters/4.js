// rest parameters = (...rest) allow a function work with a variable
//                   number of arguments ay bundling them into an array

//                    spread = expands an array into separate elements
//                    rest = bundles separate elements into an array

// rest parameters used in function

function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

const total = sum(1, 2, 3, 4, 5);

console.log(`Your total is $${total}`);
