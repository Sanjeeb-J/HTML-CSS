// while loop = repeat some code WHILE some condition is true

let username = "";

while (username === "" || username === null) {
  username = window.prompt(`Enter your name`);
}

console.log(`Hello ${username}`);
