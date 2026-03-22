const fruits = [{name: "apple", color: "red", calories: 95},
    {name: "orange", color: "orange", calories: 45},
    {name: "banana", color: "yellow", calories: 105},
    {name: "coconut", color: "white", calories: 159},
    {name: "pineapple", color: "yellow", calories: 37}];

console.log(fruits[0].name);

// Add new element
fruits.push({name: "grapes", color: "purple", calories: 62});

// remove last item (grapes)
fruits.pop();

console.log(fruits);

console.log(fruits.splice(1, 2));





const fruits = [{name: "apple", color: "red", calories: 95},
    {name: "orange", color: "orange", calories: 45},
    {name: "banana", color: "yellow", calories: 105},
    {name: "coconut", color: "white", calories: 159},
    {name: "pineapple", color: "yellow", calories: 37}];

// ------------ forEach() --------------

fruits.forEach(fruit => console.log(fruit));

fruits.forEach(fruit => console.log(fruit.name));





const fruits = [{name: "apple", color: "red", calories: 95},
    {name: "orange", color: "orange", calories: 45},
    {name: "banana", color: "yellow", calories: 105},
    {name: "coconut", color: "white", calories: 159},
    {name: "pineapple", color: "yellow", calories: 37}];

// ------------ map() --------------

const fruitNames = fruits.map(fruit => fruit.name);
const fruitColors = fruits.map(fruit => fruit.color);
const fruitCalories = fruits.map(fruit => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);





const fruits = [{name: "apple", color: "red", calories: 95},
    {name: "orange", color: "orange", calories: 45},
    {name: "banana", color: "yellow", calories: 105},
    {name: "coconut", color: "white", calories: 159},
    {name: "pineapple", color: "yellow", calories: 37}];

// ------------ filter() --------------

const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);





const fruits = [{name: "apple", color: "red", calories: 95},
    {name: "orange", color: "orange", calories: 45},
    {name: "banana", color: "yellow", calories: 105},
    {name: "coconut", color: "white", calories: 159},
    {name: "pineapple", color: "yellow", calories: 37}];

// ------------ reduce() --------------

const maxFruit = fruits.reduce( (max, fruit) => 
                    fruit.calories > max.calories ?
                    fruit : max);

const minFruit = fruits.reduce( (min, fruit) => 
                    fruit.calories < min.calories ?
                    fruit : min);

console.log(maxFruit);
console.log(maxFruit.calories);

console.log(minFruit);
console.log(minFruit.calories);