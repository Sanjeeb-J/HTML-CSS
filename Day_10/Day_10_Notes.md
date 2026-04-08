# Day 10: Arrays, Spread/Rest, Callbacks, and Iteration Methods

## 1. Arrays

An array is a special variable that can hold more than one value at a time. It's essentially a list.

```javascript
let fruits = ["Apple", "Orange", "Banana"];

console.log(fruits[0]); // Apple

// Array modification
fruits.push("Coconut"); // Adds to the end
fruits.pop();           // Removes from the end
fruits.unshift("Mango");// Adds to the beginning
fruits.shift();         // Removes from the beginning
```

---

## 2. Spread Operator

The spread operator (`...`) allows an iterable (like an array or string) to be expanded into individual elements. It's a quick way to copy an array or combine arrays.

```javascript
let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers); // Expands array into individual arguments

let class1 = ["Spongebob", "Patrick"];
let class2 = ["Squidward", "Sandy"];

// Combining two arrays
class1.push(...class2);
```

---

## 3. Rest Parameters

The rest parameter (`...`) allows a function to accept an indefinite number of arguments as an array. It looks identical to syntax of the spread operator but does the opposite.

```javascript
function sum(...numbers) {
    let total = 0;
    for (let i of numbers) {
        total += i;
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7)); // works beautifully
```

---

## 4. Array Callbacks

A callback is a function passed as an argument to another function. When the first function completes its task, it "calls back" the passed function.

```javascript
function hello(callback) {
    console.log("Hello!");
    callback(); // function passed in will execute here
}

function goodbye() {
    console.log("Goodbye!");
}

hello(goodbye); // Output: Hello! Goodbye!
```

---

## 5. Built-in Array Iteration Methods

Instead of using standard `for` or `while` loops, JavaScript has robust built-in methods designed specifically for array iteration and transformation. These methods all use **callbacks**.

### 5.1 forEach()
Executes a provided callback function once for each array element without returning a new array.

```javascript
let students = ["Spongebob", "Patrick", "Squidward"];

students.forEach(capitalize);

function capitalize(element, index, array) {
    array[index] = element[0].toUpperCase() + element.substring(1);
    console.log(array[index]);
}
```

### 5.2 map()
Creates a **new array** populated with the results of calling the provided callback function on every element in the calling array.

```javascript
let nums = [1, 2, 3, 4, 5];
let squares = nums.map(square);

function square(element) {
    return Math.pow(element, 2);
}
```

### 5.3 filter()
Creates a **new array** with all elements that pass the test implemented by the provided function.

```javascript
let ages = [18, 16, 21, 17, 19, 90];
let adults = ages.filter(checkAge);

function checkAge(element) {
    return element >= 18;
}
```

### 5.4 reduce()
Executes a "reducer" callback on each element, resulting in a **single output value**. Perfect for summing lists.

```javascript
let prices = [5, 30, 10, 25, 15, 20];
let total = prices.reduce(sum);

function sum(accumulator, element) {
    return accumulator + element;
}
console.log(total); // 105
```

<br>

## ⭐ Exercises

### 𝓝 Class Exercise (Simple)
**Favorite Foods Iterator:**
Create an array of 5 of your favorite foods. Use the `.forEach()` array method along with a callback function to print each food out in the console structured as a sentence: "I love [food]".

### 🏠 Home Exercise (Level Up)
**Data Pipeline (Chaining Methods):**
Create an array of numbers (e.g., `let numbers = [5, 12, 8, 130, 44]`). 
1. Use `.filter()` to get only numbers greater than 10.
2. Use `.map()` to multiply those remaining numbers by 2.
3. Use `.reduce()` to find the sum of this final array.
Log the final result to the console!
