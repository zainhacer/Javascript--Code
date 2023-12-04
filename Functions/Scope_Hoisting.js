// Scope level and mini hoisting in javascript

function one() {
  const username = "ZainUA";

  function two() {
    const website = "YouTube";
    console.log(username);
  }
  //   console.log(website);

  two();
}
// one();

if (true) {
  const username = "zainulabdeen";

  if (username === "zainulabdeen") {
    const website = ".com";
    console.log(username + website);
  }

  // console.log(website);
}

// console.log(username);

// ============================ Interesting ============================

addone(5);
function addone(num) {
  return num + 1;
}
// addone(5);

addTwo(5);
const addTwo = function (num) {
  return num + 2;
};
// addTwo(5);
