# Day 9: Loops, Functions, and Variable Scope

## 1. While Loops

The `while` loop loops through a block of code as long as a specified condition is true.

```javascript
let count = 0;

while (count < 5) {
    console.log("Count is " + count);
    count++;
}
```

**Do-While Loop:** Ensures the code executes at least *once* before checking the condition.

```javascript
let number = 0;
do {
    console.log("Executing at least once. " + number);
    number++;
} while (number < 5);
```

---

## 2. For Loops

The `for` loop is ideal when you know exactly how many times you want to loop through a block of code.

```javascript
for (let i = 0; i <= 5; i++) {
    console.log("Iteration number " + i);
    // You can use 'continue' to skip iterations or 'break' to exit early.
}
```

---

## 3. Number Guessing Game (Practical Use-case)

A typical exercise combining random numbers, while loops, and conditionals.

```javascript
const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;
// Example game logic: Input -> Increment guess count -> Check -> Loop until correct
```

---

## 4. Functions

Functions are blocks of code designed to perform a particular task. They prevent repetitive code.

```javascript
// Function Declaration
function happyBirthday(userName, age) {
    console.log("Happy birthday dear " + userName);
    console.log("You are " + age + " years old!");
}

// Function Calling
happyBirthday("Sanjeeb", 25);
```

**Return statements:**
A function often computes a result and returns it.

```javascript
function add(x, y) {
    return x + y;
}
```

---

## 5. Variable Scope

Scope dictates the accessibility of variables in different parts of your code.
- **Global Scope:** Variables declared outside any function. They can be accessed anywhere.
- **Local Scope (Block or Function Scope):** Variables declared inside a block (`{}`) or function. They can only be accessed within that specific block or function.

```javascript
let myGlobal = 10;

function doSomething() {
    let myLocal = 5; // Local Scope
    console.log(myGlobal); // works
}

console.log(myLocal); // Uncaught ReferenceError: myLocal is not defined
```

**Note:** Always use `let` and `const` for cleaner scope constraints compared to `var` (which is function-scoped but ignores block scope).

---

## 6. Temperature Conversion Program

A practical application of functions and form elements (radio buttons).
```javascript
// A simple logic implementation outline:
function convert() {
    if (document.getElementById("toCelsius").checked) {
        temp = document.getElementById("textBox").value;
        temp = Number(temp);
        temp = (temp - 32) * (5/9);
        return temp;
    } else {
        // ... to Fahrenheit logic
    }
}
```

<br>

## ⭐ Exercises

### 𝓝 Class Exercise (Simple)
**Even Number Printer:**
Write a `for` loop that iterates from 1 to 20. Use an `if` statement inside the loop to check if the number is even (`number % 2 === 0`), and if so, `console.log()` it.

### 🏠 Home Exercise (Level Up)
**Temperature Conversion Engine:**
Write a function `celsiusToFahrenheit(c)` that returns the converted temperature. 
Then, use a `while` loop to continuously ask the user via `prompt()` for a temperature in Celsius. If the user types "stop", use `break` to exit the loop. Otherwise, pass their input to your function and `console.log()` the result.
