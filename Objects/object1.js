// Singleton

// Object literal

const mySym = Symbol("key1")


const JsUser = {
    name: "Zain",
    [mySym]: "myKey1",
    "full name": "zain ul abdeen",
    age: "20",
    email: "zain@gmail.com",
    location: "Lahore",
    isLogged: false,
    lastLogin: ["Monday", "Sunday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.email = "zain@mango.com"
// Object.freeze(JsUser)
JsUser.email = "zain@yahoo.com"

// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS users");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS users, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
