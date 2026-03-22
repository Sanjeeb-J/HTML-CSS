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

---

## 3. Objects

An object is a collection of related properties and/or methods. It's essentially a dictionary of key-value pairs representing a single entity.

```javascript
const person1 = {
    firstName: "Sanjeeb",
    lastName: "J",
    age: 30,
    isEmployed: true,
    sayHello: function() { console.log(`Hello!`); }
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 42,
    isEmployed: false
}
```

---

## 4. The `this` Keyword

`this` references the object where it is used. It depends on the execution context. Inside an object's method, `this` refers to the object itself.

```javascript
const person = {
    firstName: "Sanjeeb",
    sayHello: function() { 
        console.log(`Hello I am ${this.firstName}`); 
    }
}
person.sayHello(); // Outputs "Hello I am Sanjeeb"
```

---

## 5. Constructors

A constructor is a special method for defining the properties and methods of objects. Think of it as a factory for turning out cookie-cutter objects. Instead of copying `person1`, `person2`, you create a blueprint.

```javascript
function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function() { console.log(`You drive the ${this.model}`); }
}

const car1 = new Car("Ford", "Mustang", 2024, "red");
```

---

## 6. Classes

ES6 introduced `class` which provides a much cleaner syntactical sugar for standard prototype-based inheritance and constructors.

```javascript
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }
}

const product1 = new Product("Shirt", 19.99);
```

---

## 7. Static Methods

The `static` keyword defines properties or methods that belong to the *class itself*, not the *objects* created from the class.

```javascript
class MathUtil {
    static PI = 3.14159;
    static getDiameter(radius) { 
        return radius * 2; 
    }
}

console.log(MathUtil.PI); // Accessible without instantiating
```

---

## 8. Inheritance & `super`

Classes can inherit properties and methods from other classes using `extends`. 
The `super` keyword is used to call the constructor or access the properties and methods of a parent class.

```javascript
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    move(speed) {
        console.log(`The ${this.name} moves at ${speed}mph`);
    }
}

class Rabbit extends Animal {
    constructor(name, age, runSpeed) {
        super(name, age); // Calls the Animal constructor
        this.runSpeed = runSpeed;
    }
}

const rabbit = new Rabbit("Bugs", 5, 20);
rabbit.move(rabbit.runSpeed);
```

<br>

## ⭐ Exercises

### 𝓝 Class Exercise (Simple)
**Student Object:**
Create an object called `student` with properties `firstName`, `grade`, and a method `study()`. When `study()` is called, it should use the `this` keyword to `console.log()` a string like: "[firstName] is studying hard!". Call the method to test it.

### 🏠 Home Exercise (Level Up)
**Library Simulator (Classes):**
1. Create a `Book` class with a constructor that takes `title` and `author`.
2. Create a `Library` class that has an internal array of books (initialize it as empty in the constructor). Create a method `.addBook(book)` and a method `.listBooks()` inside the `Library` class that loops through and logs all books.
3. Instantiate a Library object, instantiate 2 Book objects, add them to the library, and list them to the console.
