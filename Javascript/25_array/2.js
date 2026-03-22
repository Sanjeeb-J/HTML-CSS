// array = a variable like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana"];

// Add an element at the end
fruits.push("coconut");
console.log(fruits);
console.log(" ");

// Remove an element at the end
fruits.pop();
console.log(fruits);
console.log(" ");

// Add element to the beginning
fruits.unshift("mango");
console.log(fruits);
console.log(" ");

// remove an element from the beginning
fruits.shift();
console.log(fruits);
console.log(" ");

// Length of an array
let numOfFruits = fruits.length;
console.log(numOfFruits);
console.log(" ");

// Locate the index
let index = fruits.indexOf("banana");
console.log(index);
console.log(" ");
// if index is -1 that means the element does not exist

// loop through each element in an array
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log(" ");

// loop through each element in an array in reverse order
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}
console.log(" ");

// sort an array
fruits.sort().reverse();

for (let fruit of fruits) {
  console.log(fruit);
}
console.log(" ");
