// type conversion

let x = "Pizza";
let y = "Pizza";
let z = "Pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x); // NaN 'number'
console.log(y, typeof y); // Pizza string
console.log(z, typeof z); // true 'boolean'

/*
  If there is no string inside it 
  boolean will be false
*/
