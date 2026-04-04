/*
  startsWith
  endsWith
  includes
*/

let u = " Harry";

let r = u.startsWith(" ");

if (r) {
  console.log("Your username can't begin with ' '");
} else {
  console.log(u);
}

let us = "Harry ";

let re = us.endsWith(" ");

if (re) {
  console.log("Your username can't end with ' '");
} else {
  console.log(us);
}

let Name = "Harry Potter";

let result = Name.includes(" ");

if (result) {
  console.log("Your username can't include ' '");
} else {
  console.log(Name);
}
