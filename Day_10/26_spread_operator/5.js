// spread operator = ... allows an iterable such as an
//                       array or string to be expanded
//                       into separate elements
//                       (unpacks the elements)

// Add two array, append
let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);
