// Singalton object
// const tinderUser = new Object();

const TinderUser = {}
//console.log(TinderUser);

TinderUser.id = "123Abc";
TinderUser.name = "Rishikesh";
TinderUser.isLoggedIn = false;

//console.log(TinderUser);


// Object inside the Object 
// const regularUser = {
//     fullName : {

//         prefic : "",
//         CompleteNAme : {
//             first : "Ishan",
//             last : "Vyas"
//         }
//     }
// }
// console.log(regularUser.fullName.CompleteNAme.first);

// regularUser.fullName.prefic = "Mr";

// console.log(`${regularUser.fullName.prefic} ${regularUser.fullName.CompleteNAme.first}`);


// // adding two or more objects

// const obj1 ={
//     a : "1",
//     b : "2"
// }

// const obj2 = {
//     1 : "a",
//     2 : "b"

// }
//  const obj3={ ...obj1 , ...obj2}

//  console.log(obj3);
//  console.log(obj1);
 
// console.log(Object.keys(TinderUser));

// console.log(Object.values(TinderUser));

//++++++ Destruction of Object ++++

const course = {
     CourseName : "Js in hindi",
     coursePrice : "999",
     courseInstructor : "Ishan"
}

// console.log(course.courseInstructor);


//Hrelful in React js
const {courseInstructor : Instructor} =course
console.log(Instructor);


// the below code is the JSON Format Data whihc is fetched by the API's
// {
//     "name" : "Ishan",
//     "age" : "19",
//     "habby" : "Codding"
// }