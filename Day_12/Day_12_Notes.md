# Day 12: Advanced Objects, Destructuring, and Sorting

## 1. Getter & Setter

Getters and Setters are used to bind object properties to methods when the property is accessed or updated. This is generally used for validation to prevent invalid values from being set.

```javascript
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    set width(newWidth) {
        if (newWidth > 0) {
            this._width = newWidth; // _ indicates a private property
        } else {
            console.error("Width must be a positive number");
        }
    }

    get width() {
        return `${this._width.toFixed(1)} cm`;
    }

    get area() {
        return this._width * this._height;
    }
}
```

---

## 2. Destructuring

Destructuring lets you extract values from arrays or objects and assign them directly to independent variables in a clean syntax.

**Array Destructuring:**
```javascript
let colors = ["red", "green", "blue", "black", "white"];
let [firstColor, secondColor, ...extraColors] = colors;
// firstColor = "red", extraColors = [ "blue" ... ]
```

**Object Destructuring:**
```javascript
const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30
}

let {firstName, lastName, age, job = "Unemployed"} = person1;
```

---

## 3. Nested Objects

Objects can hold other objects, arrays, and functions inside themselves, mimicking real-world data structures like JSON files or database architectures.

```javascript
const person = {
    fullName: "Spongebob Squarepants",
    age: 30,
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Waters"
    }
}

console.log(person.address.city); // Bikini Bottom
```

---

## 4. Arrays of Objects

Arrays composed of nested objects are incredibly common, generally representing multiple items fetched from databases.

```javascript
const fruits = [
    { name: "apple", color: "red", calories: 95 },
    { name: "orange", color: "orange", calories: 45 },
    { name: "banana", color: "yellow", calories: 105 }
];

console.log(fruits[1].color); // "orange"

// You can use the map and filter functions effortlessly here
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
```

---

## 5. Sorting Array Methods (.sort())

The `sort()` method sorts the elements of an array *in place*, by comparing string values (ASCII table) by default. For numbers, you need a custom callback comparator.

**Standard Alphabetical Sorting (Strings)**
```javascript
let someFruits = ["apple", "cherry", "banana", "date"];
someFruits.sort(); // [ "apple", "banana", "cherry", "date" ]
```

**Sorting Numbers**
```javascript
let numbers = [5, 10, 2, 80, 25];

// Comparing a and b determines if a should go before b
numbers.sort((a, b) => a - b); // Ascending
numbers.sort((a, b) => b - a); // Descending
```

**Sorting Arrays of Objects**
```javascript
const items = [
    { name: "apple", calories: 95 },
    { name: "banana", calories: 105 }
];

// Determine sorting logic using an object's property
items.sort((a, b) => a.calories - b.calories);
```

<br>

## ⭐ Exercises

### 𝓝 Class Exercise (Simple)
**Movie Sorter:**
Create an array of 3 object literals representing movies. Each object should have a `title` and a `year`. 
Use the `.sort()` method with a custom comparison callback to sort the list of movies by `year` from oldest to newest. Finally, use `.forEach()` to log each movie's title and year.

### 🏠 Home Exercise (Level Up)
**Bank Account Simulator (Getters/Setters):**
Create a `BankAccount` class.
1. The constructor should take an initial balance and store it in a private property like `_balance`.
2. Create a getter for `balance` that formats the number to 2 decimal places with a `$` sign.
3. Create a setter for `balance` that only allows updating the `_balance` if the new amount is strictly greater than `0`. If they try to set a negative balance, `console.error()` a warning.
4. Finally, destructure an object `{ user: "Spongebob", account: new BankAccount(100) }` into variables and attempt to change the balance to a negative number.
