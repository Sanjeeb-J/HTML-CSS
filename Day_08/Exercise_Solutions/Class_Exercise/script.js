// Class Exercise Solution: Greeting Formatter
let userName = window.prompt("Enter your name:");

if (!userName || userName.trim() === "") {
    window.alert("Name is required");
} else {
    window.alert(userName.trim().toUpperCase());
}
