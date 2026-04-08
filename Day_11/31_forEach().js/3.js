// froEach() = method used to iterate over the elements
//             of an array and apply a specified function (callback)
//             to each element

//             array.forEach(callback)
//             element, index, array are provided

let number = [1, 2, 3, 4, 5];

number.forEach(double);
number.forEach(display);

function double(element, index, array) {
  array[index] = element * 2;
}

function display(element) {
  console.log(element);
}
