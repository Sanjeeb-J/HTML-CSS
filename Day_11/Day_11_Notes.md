# Day 11: Advanced Functions, Objects, and OOP Basics

## 1. Function Expressions

A function can be declared as an expression and assigned to a variable. This makes it an anonymous function (no name). Use cases include passing functions as properties to objects or preventing cluttering the global scope.

```javascript
const greeting = function() {
    console.log("Hello there!");
}

greeting(); // Works like a normal function!
```

---

## 2. Arrow Functions

Arrow functions (`=>`) provide a concise syntax for writing function expressions. They are mostly used for simple, one-line operations.

```javascript
const add = (x, y) => { return x + y; }
console.log(add(5, 10));

// Arrow function with map
const nums = [1, 2, 3];
const squares = nums.map(x => x * x);
```

## 3. Built-in Array Iteration Methods

Instead of using standard `for` or `while` loops, JavaScript has robust built-in methods designed specifically for array iteration and transformation. These methods all use **callbacks**.

### 3.1 forEach()
Executes a provided callback function once for each array element without returning a new array.

```javascript
let students = ["Spongebob", "Patrick", "Squidward"];

students.forEach((element, index, array) => {
    array[index] = element[0].toUpperCase() + element.substring(1);
    console.log(array[index]);
});
```

### 3.2 map()
Creates a **new array** populated with the results of calling the provided callback function on every element in the calling array.

```javascript
let nums = [1, 2, 3, 4, 5];
let squares = nums.map(element => Math.pow(element, 2));
```

### 3.3 filter()
Creates a **new array** with all elements that pass the test implemented by the provided function.

```javascript
let ages = [18, 16, 21, 17, 19, 90];
let adults = ages.filter(element => element >= 18);
```

### 3.4 reduce()
Executes a "reducer" callback on each element, resulting in a **single output value**. Perfect for summing lists.

```javascript
let prices = [5, 30, 10, 25, 15, 20];
let total = prices.reduce((accumulator, element) => accumulator + element);
console.log(total); // 105
```

<br>

## ⭐ Exercises

### 𝓝 Class Exercise (Simple)
**Arrow Function Filter:**
Create an array of numbers. Use `.filter()` with an arrow function to find all numbers greater than 10. Log the resulting array.

### 🏠 Home Exercise (Level Up)
**Data Pipeline (Chaining Methods):**
Create an array of product prices (e.g., `let prices = [5, 12, 8, 130, 44]`). 
1. Use `.filter()` to get prices over $20.
2. Use `.map()` (with arrow functions) to add a 10% tax.
3. Use `.reduce()` to find the total sum.
Log the final result to the console!
