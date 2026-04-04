function isValidEmail(email) {
  if (email.includes("@")) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidEmail("Jhon@gmail.com"));
console.log(isValidEmail("Dev.com"));
console.log(" ");

function isValidEmail(email) {
  return email.includes("@") ? true : false;
}

console.log(isValidEmail("Jhon@gmail.com"));
console.log(isValidEmail("Dev.com"));
console.log(" ");
