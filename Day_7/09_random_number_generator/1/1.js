// Random number generator

const min = 50;
const max = 100;

// Do this when you need random number between 2 interval
let randomNum;

// Generate number from range of 0 to 1
randomNum = Math.random();
console.log(randomNum);

// Genarte number from range of 0 to 6
randomNum = Math.random() * 6;
console.log(randomNum);

// Convert float to int
randomNum = Math.floor(Math.random() * 6);
console.log(randomNum);

// Genarte number from range of 10 to 70
randomNum = Math.floor(Math.random() * 60) + 10;
console.log(randomNum);

// Genarte number from range of 50 to 150
// Don't use it
randomNum = Math.floor(Math.random() * max) + min;
console.log(randomNum);

// Genarte number from range of 50 to 100
randomNum = Math.floor(Math.random() * (max - min)) + min;
console.log(randomNum);
