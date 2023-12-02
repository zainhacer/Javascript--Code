// Functions with objects and array

function CalculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(CalculateCartPrice(100, 300, 500, 600));


const user = {
    username: "Zainua",
    price: "$299"
}

function handleObject(anyobject) {
    // console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Carl",
    price: "$499"
});


const myNewArray = [200, 100, 400, 500]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 100, 400, 500]));