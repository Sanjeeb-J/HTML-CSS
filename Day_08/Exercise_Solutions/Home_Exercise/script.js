// Home Exercise Solution: Terms and Conditions Validator
document.getElementById("submitBtn").onclick = function() {
    let name = document.getElementById("nameInput").value.trim();
    let terms = document.getElementById("termsBox").checked;
    
    if (name === "") {
        window.alert("Please enter your name.");
        return;
    }
    
    if (terms) {
        console.log("Welcome " + name + "!");
    } else {
        window.alert("You must accept the terms!");
    }
}
