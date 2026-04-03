let phoneNumber = "123-456-7890";
// replaceAll("a", "b") = used to replace a with b
phoneNumber = phoneNumber.replaceAll("-", ",");
console.log(phoneNumber);

let phone = "9496458756";
// String.padStart(maxLength: number, fillString?: string): string
phone = phone.padStart(13, "+91");
console.log(phone);

let number = "123-456-7890";
// String.padEnd(maxLength: number, fillString?: string): string
number = number.padEnd(15, "0");
console.log(number);
