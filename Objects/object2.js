// const tinderuser = new Object()  //Singleton object
const tinderuser = {}; // none singleton object

tinderuser.id = "zbc12";
tinderuser.name = "Carl";
tinderuser.isLoggedIn = false;

// console.log(tinderuser);

const regularUser = {
  email: "example@gmail.com",
  fullname: {
    fullusername: {
      firstname: "Zain",
      lastname: "chaudhary",
    },
  },
};

// console.log(regularUser.fullname.fullusername.firstname);

const object1 = { 1: "a", 2: "b" };
const object2 = { 3: "a", 4: "c" };
const object4 = { 5: "a", 6: "c" };

// const object3 = Object.assign({}, object1, object2, object4)

// 2nd method
const object3 = { ...object1, ...object2 };
// console.log(object3);

const users = [
  {
    id: 1,
    email: "mango@gmail.com",
  },
  {
    id: 1,
    email: "mango@gmail.com",
  },
  {
    id: 1,
    email: "mango@gmail.com",
  },
];

users[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isloggedIn'));