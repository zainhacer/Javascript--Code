
// const userEmail = 'mangoman@gmail.org'
const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else{
    console.log("Don't user have email");
}

// falsy values
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){}

// how to check empty Array
if (userEmail.length === 0) {
    console.log("Array is empty");
}

// how to check empty Object
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
}


// Nullish Coalescing Operator (??): Null, undefined
let val1;
// val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 10

console.log(val1);


// Terniary operator
// ...Condition ? true : false...

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");