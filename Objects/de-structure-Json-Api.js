// Object De-structuring

const course = {
    courseName: "Javascript course",
    price: "999",
    courseInstructor: "Zain"
}

// const.courseInstructor
const {courseInstructor} = course
const {courseInstructor: instructor} = course

console.log(courseInstructor);



// JSON API
// {
//     "name": "Zain",
//     "Course": "Javascript",
//     "price": "$0"
// }

[
    {},
    {},
    {}
]