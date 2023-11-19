// Array

const myArr = [0, 1, 2, 3, 4, 5]

const myheros = ["Spider man", "Iron man", "Thor"]

const myArr2 = new Array (1,2,3,4)

// console.log(myArr[1]);


// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(4));

const newArray = myArr.join()

// console.log(myArr);
// console.log(typeof newArray);


// slice and splice
console.log("A ", myArr); //Original array

const newArr1 = myArr.slice(1, 3)

console.log(newArr1);
console.log("B", myArr);


const newArr2 = myArr.splice(1, 3)

console.log("C ", myArr);
console.log(newArr2);