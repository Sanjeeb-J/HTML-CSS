// Write a simple function createPin() that uses Math.random() 
// to generate and return a 4-digit numeric PIN as a string. 
// Log the PIN to the console.

function createPin() {
    let pin = "";
    for(let i = 0; i < 4; i++) {
        pin += Math.floor(Math.random() * 10);
    }
    return pin;
}

console.log("Your PIN is: " + createPin());
