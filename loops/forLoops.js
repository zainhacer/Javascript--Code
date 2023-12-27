// for of loop

// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const i of arr) {
  // console.log(i)
}

const greating = "Hello World!";

for (const greet of greating) {
  // console.log(`each char is ${greet}`);
}

// Map
const map = new Map();
map.set("PAK", "Pakistan");
map.set("AFG", "Afghanistan");
map.set("IN", "India");
map.set("PAK", "Pakistan"); // not again

// console.log(map);

for (const [key, value] of map) {
  // console.log(key, ":-", value);
}

/*const myObject = {
    'game1': 'GTA',
    'game1': 'PUBG',
    'game3': 'FreeFire'
}

for (const [key, value] of myObject) {
    console.log(key, ":-", value);
}*/




// for in loop 

const myObject = {
  js: "JavaScript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObject) {
    // console.log(`${key } shortcut is for ${myObject[key]}`);
}


const programming = ["js", "css", "html", "node.js", "react"]

for (const key in programming) {
    console.log(key);
}