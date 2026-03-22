const myButton = document.getElementById("myButton");
const myLabel1 = document.getElementById("label1");
const myLabel2 = document.getElementById("label2");
const myLabel3 = document.getElementById("label3");
const min = 1;
const max = 6;
let rn1;
let rn2;
let rn3;

myButton.onclick = function () {
  rn1 = Math.floor(Math.random() * max) + min;
  myLabel1.textContent = rn1;

  rn2 = Math.floor(Math.random() * max) + min;
  myLabel2.textContent = rn2;

  rn3 = Math.floor(Math.random() * max) + min;
  myLabel3.textContent = rn3;
};
