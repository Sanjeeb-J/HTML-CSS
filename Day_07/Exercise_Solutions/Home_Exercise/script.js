// Home Exercise Solution: Simple Web Calculator
let num1 = window.prompt("Enter the first number:");
let num2 = window.prompt("Enter the second number:");
num1 = Number(num1);
num2 = Number(num2);

let outputMessage = "The sum is: " + (num1 + num2);
document.getElementById("result").textContent = outputMessage;
