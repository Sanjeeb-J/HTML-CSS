// 1. Create a function rollDice(callback) that generates a random number between 1 and 6.
// 2. It should then pass that number to the callback function.
// 3. Call rollDice and pass in an arrow function (or normal function) that logs: "You rolled a [number]!".

function rollDice(callback) {
    let result = Math.floor(Math.random() * 6) + 1;
    callback(result);
}

rollDice((num) => {
    console.log("You rolled a " + num + "!");
});
