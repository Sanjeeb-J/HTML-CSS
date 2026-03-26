/*
ternary operator = a shortcut to if{} and else{} statements
                   helps to assign a variable based on a condition
                   condition ? code_lf_True : code_lf_Fa1se;
*/

let age = 21;
let message = age >= 18 ? "You are an adult" : "You are a minor";
console.log(message);

let time = 9;
let greeting = time < 12 ? "Good Moring!" : "Good Afternoon";
console.log(greeting);

let isStudent = true;
let msg = isStudent ? "You are a student" : "You are Not a student";
console.log(msg);

let purchaseAmount = 200;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(
  `Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`,
);
