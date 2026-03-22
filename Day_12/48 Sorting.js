// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

fruits.sort();

console.log(fruits);





let numbers = [1,10,2,9,3,8,6,7,5,4];

console.log(numbers.sort((a, b) => a - b));

console.log(numbers.sort((a, b) => b - a));





// lexicographic order
const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patric", age: 37, gpa: 1.5},
                {name: "Squidward", age: 57, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}];

console.log(people.sort((a, b) => a.age - b.age));





// Reverse lexicographic order
const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patric", age: 37, gpa: 1.5},
                {name: "Squidward", age: 57, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}];

console.log(people.sort((a, b) => b.age - a.age));





// lexicographic order
const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patric", age: 37, gpa: 1.5},
                {name: "Squidward", age: 57, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}];

console.log(people.sort((a, b) => a.gpa - b.gpa));





// Reverse lexicographic order
const people = [{name: "Spongebob", age: 30, gpa: 3.0},
                {name: "Patric", age: 37, gpa: 1.5},
                {name: "Squidward", age: 57, gpa: 2.5},
                {name: "Sandy", age: 27, gpa: 4.0}];

console.log(people.sort((a, b) => b.gpa - a.gpa));





// lexicographic order
const people = [{name: "Spongebob", age: 30, gpa: 3.0},
    {name: "Patric", age: 37, gpa: 1.5},
    {name: "Squidward", age: 57, gpa: 2.5},
    {name: "Sandy", age: 27, gpa: 4.0}];

console.log(people.sort((a, b) => a.name.localeCompare(b.name)));





// Reverse lexicographic order
const people = [{name: "Spongebob", age: 30, gpa: 3.0},
    {name: "Patric", age: 37, gpa: 1.5},
    {name: "Squidward", age: 57, gpa: 2.5},
    {name: "Sandy", age: 27, gpa: 4.0}];

console.log(people.sort((a, b) => b.name.localeCompare(a.name)));