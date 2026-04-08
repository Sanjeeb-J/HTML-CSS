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

## 5. Dice Roller Program

A common exercise to practice random numbers and DOM manipulation (if using HTML) or just basic JS concepts.

```javascript
// Simple dice roller
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

console.log(`You rolled a ${rollDice()}`);
```

---

## 6. Random Password Generator

Generating a random password involves picking random characters from an array or a string of allowed characters.

```javascript
function generatePassword(length) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
    let password = "";
    for(let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }
    return password;
}

console.log(generatePassword(10));
```

<br>

## ⭐ Exercises

### 𝓝 Class Exercise (Simple)
**Password Generator logic:**
Write a simple function `createPin()` that uses `Math.random()` to generate and return a 4-digit numeric PIN as a string. Log the PIN to the console.

### 🏠 Home Exercise (Level Up)
**Dice Roller Callback:**
1. Create a function `rollDice(callback)` that generates a random number between 1 and 6.
2. It should then pass that number to the `callback` function.
3. Call `rollDice` and pass in an arrow function (or normal function) that logs: "You rolled a [number]!".
