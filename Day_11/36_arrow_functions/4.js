// arrow functions = a concise way to write function expressions
//                   good for simple functions that you use only once
//                   (parameters) => some code

// Function
setTimeout(hello, 1000);

function hello() {
  console.log("Hello");
}

// Function expression
setTimeout(function () {
  console.log("Hello");
}, 2000);

// By arrow function
setTimeout(() => console.log("Hello"), 3000);
