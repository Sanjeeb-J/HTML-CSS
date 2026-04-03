// Home Exercise Solution: Temperature Conversion Engine
function celsiusToFahrenheit(c) {
    return (c * 9/5) + 32;
}

while (true) {
    let userInput = window.prompt("Enter temp in Celsius (or 'stop'):");
    
    if (userInput === null || userInput.toLowerCase() === "stop") {
        break;
    }
    
    let tempC = Number(userInput);
    if (!isNaN(tempC)) {
        console.log(tempC + "°C is " + celsiusToFahrenheit(tempC) + "°F");
    } else {
        console.log("Invalid number.");
    }
}
