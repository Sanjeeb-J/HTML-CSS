// Random number generator

const min = 50;
const max = 100;

// Do this when you need random number between 2 interval
let randomNum = Math.floor(Math.random() * (max - min)) + min;

console.log(randomNum);
