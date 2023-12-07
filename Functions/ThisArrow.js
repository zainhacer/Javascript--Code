// THIS and arrow function in javascript 

const user = {
    username: "Zain",
    price: "999",

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Uzair"
// user.welcomeMessage()

//   console.log(this);

  
//   function code() {
//     let username = "Zain"
//     console.log(this.username);
//   }
//   code()


// const code = function() {
//     let username = "zain"
//     console.log(this.username);
// }

const code = () => {
    let username = "zain"
    console.log(this.username);
}

// code()

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "mango"})


console.log(addTwo(3, 4))