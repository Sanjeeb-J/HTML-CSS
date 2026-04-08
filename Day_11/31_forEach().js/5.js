// froEach() = method used to iterate over the elements
//             of an array and apply a specified function (callback)
//             to each element

//             array.forEach(callback)
//             element, index, array are provided

let fruits = ["APPLE", "ORANGE", "BANANA", "COCONUT"];

fruits.forEach(lowerCase);
fruits.forEach(display);

function lowerCase(element, index, array) {
  array[index] = element.toLowerCase();
}

function display(element) {
  console.log(element);
}
