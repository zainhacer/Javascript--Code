// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
// }

// chai()

// or
// named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
}) ();  //baz uqat hamy ; semicolon lgana prta he


// simple IIFE/Unamed IFFE
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ('Zainua')