// .map() = accepts a callback and applies that function
//          to each element of an array, then return a new array

// By using forEach()
const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];

students.forEach(upperCase);
students.forEach(display);

function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}
function display(element) {
  console.log(element);
}
