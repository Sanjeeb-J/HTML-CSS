// .filter() = creates a new array by filtering out elements

const ages = [12, 16, 17, 18, 19, 25, 42, 50];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);

console.log(adults);
console.log(children);

function isAdult(element) {
  return element >= 18;
}

function isChild(element) {
  return element < 18;
}
