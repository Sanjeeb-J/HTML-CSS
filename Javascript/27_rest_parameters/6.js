// rest parameters = (...rest) allow a function work with a variable
//                   number of arguments ay bundling them into an array

//                    spread = expands an array into separate elements
//                    rest = bundles separate elements into an array

// rest parameters used in function

// combine bunch of strings

function combineStrings(...strings) {
  return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullName);
