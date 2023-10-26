// For Concatinate
const name = "Zain "
const repoCount = 50

// console.log(name + repoCount + " Value"); // It was used in old times

// Moderen time code

// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Zain-Ua');

// console.log(gameName[0]);
// console.log(gameName.__proto__); //Run it in the browser console to see it properly

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(-6, 4)
// console.log(anotherString);

const newStringOne = "    Zain    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = 'https://localhost.com/local%20host';
console.log(url.replace('%20', '-'));

console.log(url.includes('host'));

console.log(gameName.split('-')); //convet string into array