// About Numbers

const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.8934

// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-PK'));

/*
Number.MAX_VALUE
1.7976931348623157e+308

Number.MIN_VALUE
5e-324

Number.MAX_SAFE_INTEGER
9007199254740991
*/


// *************************************************Maths***************************************************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.9));
console.log(Math.min(5, 6, 8, 9, 2));
console.log(Math.max(5, 6, 8, 9, 2));

console.log(Math.random()); // Math gives us values between 0 and 1. example: 0.18127135536351346 or 0.989009909009 etc.
console.log((Math.random()*10) + 1); // If we want our value to be above 1 then this formula will be used.
console.log(Math.floor(Math.random()*10) + 1); // same as

const min = 10 
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // If we want to get custom min & max random value then this formula will be used.