// froEach() = method used to iterate over the elements
//             of an array and apply a specified function (callback)
//             to each element

//             array.forEach(callback)
//             element, index, array are provided

let number = [1, 2, 3, 4, 5];

number.forEach(display);

function display(element) {
  console.log(element);
}
