// rest parameters = (...rest) allow a function work with a variable
//                   number of arguments ay bundling them into an array

//                    spread = expands an array into separate elements
//                    rest = bundles separate elements into an array

// rest parameters used in function

function getFood(...foods) {
  return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);
