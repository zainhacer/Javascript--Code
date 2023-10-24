// Stack and Heap memory

// Stack (stack memory use in Prmitive data type): Whenever the stack memory is used, the variable declared will get a copy.
let myName = "ZainUa"
let anotherName = myName;

anotherName = "ZainGithub"

console.log(anotherName);
console.log(myName);

/* When we try to change a vlaue agian, it does not return us the original vlaue but a copy value. Some more example here: */


// Heap (Heap memory used in Non-Prmitive data type): when the object is defined inside the Heap, we get a reference to the original value.
let userOne = {
    email: "example@gmail.com",
    userId: "user1234",
}

let userTwo = userOne

/* As we know Heap returns us original value.*/

userTwo.email = "newexample@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

// So we got to see the same value of both the objects..