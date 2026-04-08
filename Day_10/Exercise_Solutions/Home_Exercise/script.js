// Home Exercise Solution: Data Pipeline (Chaining Methods)
let numbers = [5, 12, 8, 130, 44];

let result = numbers
                .filter(num => num > 10)
                .map(num => num * 2)
                .reduce((acc, curr) => acc + curr, 0);
                
console.log("Final Sum:", result);
