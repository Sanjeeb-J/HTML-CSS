# Day 8: Control Flow, Logic, and Strings

## 1. If Statements

`if` statements perform basic logic checks. They execute block of code if the condition is `true`.

```javascript
let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
} else if (age < 0) {
    console.log("Invalid age.");
} else {
    console.log("You are a minor.");
}
```

---

## 2. Checked Property (Forms / Programs)

When working with HTML checkboxes and radio buttons, you can determine if they are selected using the `.checked` property.

```html
<input type="checkbox" id="myCheckBox"> Subscribe
<button id="myBtn">Submit</button>

<script>
document.getElementById("myBtn").onclick = function() {
    const checkBox = document.getElementById("myCheckBox");
    if(checkBox.checked) {
        console.log("You are subscribed!");
    } else {
        console.log("You are NOT subscribed.");
    }
}
</script>
```

---

## 3. Ternary Operator

The ternary operator is a shortcut to if/else statements that assigns a value based on a condition.
**Syntax:** `condition ? exprIfTrue : exprIfFalse`

```javascript
let age = 21;
let message = (age >= 18) ? "You are an adult" : "You are a minor";

console.log(message);
```

---

## 4. Switch Statements

`switch` is used to execute different parts of code based on the value of a variable. Commonly used as an alternative to many `else if` checks.

```javascript
let day = 3;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Not a valid day!");
}
```

---

## 5. String Methods

JavaScript provides multiple built-in methods to manipulate string values.
```javascript
let userName = "  Bro Code  ";

// Trimming whitespace
userName = userName.trim();

// Capitalization
console.log(userName.toUpperCase()); // "BRO CODE"
console.log(userName.toLowerCase()); // "bro code"

// Check characters
console.log(userName.charAt(0)); // 'B'
console.log(userName.indexOf('o')); // 2
console.log(userName.lastIndexOf('o')); // 5

// Substrings and replacing
console.log(userName.replace("Bro", "Pro"));
```

---

## 6. String Slicing

Slicing extracts a section of a string and returns it as a new string, without modifying the original.
```javascript
let fullName = "Snoop Dogg";
let firstName = fullName.slice(0, 5); // "Snoop"
let lastName = fullName.slice(6); // "Dogg"
```

---

## 7. Method Chaining

You can call multiple string or object methods in one continuous line of code.
```javascript
let user = "  sanJeeB  ";
// Instead of multiple steps:
user = user.trim().charAt(0).toUpperCase() + user.trim().slice(1).toLowerCase();
console.log(user); // "Sanjeeb"
```

---

## 8. Logical Operators

Logical operators are used to connect multiple boolean logic checks into a single one.
- `&&` (AND): Both conditions must be true.
- `||` (OR): At least one condition must be true.
- `!` (NOT): Reverses the boolean state.

```javascript
let temp = 20;
let sunny = true;

if (temp > 0 && temp <= 30 && sunny) {
    console.log("The weather is good.");
}
```

---

## 9. Strict Equality

Always prefer `===` over `==`.
- `==` compares two values (loose equality) and ignores data type differences.
- `===` compares both value AND data type (strict equality).
- `!==` strict inequality.

```javascript
let x = "3.14";

if (x === 3.14) {
    console.log("This is a Number");
} else {
    console.log("This is a String!");
}
```

<br>

## ⭐ Exercises

### 𝓝 Class Exercise (Simple)
**Greeting Formatter:**
Ask the user for their name via `prompt()`. If they enter nothing (empty string), use an `if` statement to alert "Name is required". Otherwise, use string methods to alert their name in all uppercase letters.

### 🏠 Home Exercise (Level Up)
**Terms and Conditions Validator:**
Create an HTML page with a generic input text field for a name, a checkbox for "Accept Terms & Conditions", and a Submit `<button>`. 
Write a script so that when the button is clicked:
1. Ensure the text field isn't empty after `.trim()`. 
2. If the checkbox is `.checked`, use the ternary operator or an `if` statement to log a welcome message containing their name.
3. If it is not checked, alert the user that they must accept the terms.
