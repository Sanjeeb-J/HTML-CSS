let username;
// No need to assign the username first

do {
  username = window.prompt(`Enter your name`);
} while (username === "" || username === null);

console.log(`Hello ${username}`);
