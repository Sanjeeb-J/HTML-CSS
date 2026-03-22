# Day 7: JavaScript Basics & Math

## 1. Connection with HTML

JavaScript can be embedded or linked within your HTML file. Inside the `<body>` or `<head>` tag, use the `<script>` tag and provide its location using the `src` attribute.

```html
<script src="script.js"></script>
```

---

## 2. Basics in JavaScript - Outputs

JavaScript can display output in different ways mainly used for debugging and user alerts.

### Console Output
Used mainly for debugging. Open **DevTools \u2192 Console** to see this.
```jsx
console.log("Hello, World!");
console.log("I like programming");
```

### Alert Box
Displays a popup message in the browser. Useful for quick testing, but not commonly used in modern real applications.
```jsx
window.alert("This is an alert box");
```

---

## 3. Display Content in HTML (DOM)

JavaScript can change HTML content dynamically.

**HTML Structure:**
```html
<h1 id="myH1"></h1>
<p id="myP"></p>
```

**JavaScript:**
```jsx
document.getElementById("myH1").textContent = "Hello";
document.getElementById("myP").textContent = "I like Pizza";
```
This updates the content of elements on the page seamlessly.

---

## 4. Comments in JavaScript

Comments are used to explain code. They are completely ignored by the browser.

### Single-line Comment
```jsx
// This is a single-line comment
```

### Multi-line Comment
```jsx
/*
   This is a
   multiline comment
*/
```

---

## 5. Variables

A variable is a container for storing data values. In modern JavaScript, we use `let` and `const`. 
- `let` is used for variables whose values might change.
- `const` is used for constant values that should NOT change.

```javascript
let age = 30; // Number
const name = "Alice"; // String
let isStudent = true; // Boolean

console.log(`Hello, my name is ${name} and I am ${age} years old.`);
```

---

## 6. Arithmetic Operators

JavaScript uses standard arithmetic operators:
- `+` (Addition)
- `-` (Subtraction)
- `*` (Multiplication)
- `/` (Division)
- `**` (Exponentiation)
- `%` (Modulus - Remainder)

```javascript
let students = 20;
students = students + 1; // 21
students += 1; // 22 (Augmented Assignment)
students++; // 23 (Increment)
```

---

## 7. Accepting User Input

You can ask for user input via standard `window.prompt` or by reading values from an HTML input field.

**Prompt approach:**
```javascript
let username = window.prompt("What is your username?");
console.log(username);
```

**HTML Input Approach:**
```javascript
let username = document.getElementById("myInput").value;
```

---

## 8. Type Conversion

Sometimes you need to convert strings into numbers or vice-versa.
```javascript
let age = window.prompt("How old are you?");
age = Number(age); // Convert String to Number
age += 1;
console.log(age, typeof age); // Logs age as a Number

let strAge = String(age); // Convert Number to String
```

---

## 9. Math Object & Random Numbers

JavaScript has a built-in `Math` object that features standard math functions.

```javascript
let x = 3.14;
console.log(Math.round(x)); // 3
console.log(Math.floor(x)); // 3
console.log(Math.ceil(x)); // 4
console.log(Math.pow(2, 3)); // 8 (2^3)
console.log(Math.sqrt(9)); // 3

// Random Number Generation (e.g. 1 to 6 for a dice roll)
let randomNum = Math.floor(Math.random() * 6) + 1;
console.log(randomNum);
```

<br>

## ⭐ Exercises

### 𝓝 Class Exercise (Simple)
**Age Calculator:**
Write a script that uses `window.prompt()` to ask for the user's birth year. Convert that input to a Number, calculate their current age (assuming the current year), and display it using `console.log()` or a `window.alert()`.

### 🏠 Home Exercise (Level Up)
**Simple Web Calculator:**
Create an HTML file with an empty `<h2>` block having id="result". Write a script that asks the user for two separate numbers using `prompt()`, adds them together (ensure you handle type conversion so they don't concatenate as strings!), and updates the `textContent` of the `<h2>` block to show: "The sum is: [result]".
