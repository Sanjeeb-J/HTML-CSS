// How to accept user input
// 2. PROFESSIONAL WAY = HTML textbox

let username;

document.getElementById("myButton").onclick = function () {
  username = document.getElementById("myText").value;
  console.log(username);
};
