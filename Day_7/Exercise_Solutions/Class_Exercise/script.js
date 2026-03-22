// Class Exercise Solution: Age Calculator
let birthYear = window.prompt("What is your birth year?");
birthYear = Number(birthYear);
let currentAge = new Date().getFullYear() - birthYear;
window.alert("Your current age is approximately: " + currentAge);
