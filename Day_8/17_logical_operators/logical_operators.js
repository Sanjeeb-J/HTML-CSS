// logical operators = used to combine or manipulate boolean values
//                     (true or false)

//                     AND = &&
//                     OR = ||
//                     NOT = !

const temp1 = 25;

if (temp1 > 0 && temp1 <= 30) {
  console.log("The weather is GOOD");
} else {
  console.log("The weather is BAD");
}

const temp2 = -25;

if (temp2 <= 0 || temp2 > 30) {
  console.log("The weather is BAD");
} else {
  console.log("The weather is GOOD");
}

const isSunny = true;

if (!isSunny) {
  console.log("It is CLOUDY");
} else {
  console.log("IT is SUNNY");
}
