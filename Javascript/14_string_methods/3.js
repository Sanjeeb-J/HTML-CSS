/*
  startsWith
  endsWith
  includes
*/

let u = " Sanjeeb J";

let r = u.startsWith(" ");

if (r) {
  console.log("Your username can't begin with ' '");
} else {
  console.log(u);
}

let us = "Sanjeeb J ";

let re = us.endsWith(" ");

if (re) {
  console.log("Your username can't end with ' '");
} else {
  console.log(us);
}

let Name = "Sanjeeb J";

let result = Name.includes(" ");

if (result) {
  console.log("Your username can't include ' '");
} else {
  console.log(Name);
}
