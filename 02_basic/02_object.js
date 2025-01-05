// //singletone
// //Object.create

// //object literal 

// const new1= Symbol("123")
// const juser={
//     name : "Ishan",
//     age : 18,
//     [new1] : "mynew1",
//     email : "ishanVyas@google.com",
//     location : "Pune",
//     isLogeedin : false,
// }

// //console.log(juser["name"]);
// console.log(juser[new1]);
// console.log(typeof juser[new1]);

// //Object.freeze(juser);
// juser.age=22;

// console.log(juser.age);
// console.log(juser);


// juser.greeting = function(){
//     console.log(`Hello! ${juser.name} how you doing?`);
    
// }
// console.log(juser.greeting());

// juser.greetingTwo = function(){
//     console.log(`Hello juser ${this.name} how you doing?, are you ${this.age}`);
    
// }
// // 
// console.log(juser.greetingTwo());
