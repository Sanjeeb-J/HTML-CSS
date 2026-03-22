// Nested IF

let age = 25;
let hasLicense = true;

if (age >= 16) {
  console.log("You are old enough to drive");

  if (hasLicense) {
    console.log("You have License");
  } else {
    console.log("You don't have License");
  }
} else {
  console.log("You must be 18+ to have a license");
}
