// for each loop

const coding = ["js", "css", "html", "react", "ruby", "swift"]

// coding.forEach( function (val) {
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )



const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4)
console.log(newNums);