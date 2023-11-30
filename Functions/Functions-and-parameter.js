function sayMyName() {
console.log("Z");
console.log("A");
console.log("I");
console.log("N");
}

// sayMyName();

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}
// addTwoNumbers(5, 9)

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result
    return number1 + number2;
}

const result = addTwoNumbers(4, 8);

console.log("Result: ", result);