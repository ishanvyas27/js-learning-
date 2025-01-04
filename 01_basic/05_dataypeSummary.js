// Primitive
// 7 Type :-  string, Numbaer , boalean , null , Symbol , BinInt , undefined 

const numb= 101
const decNumb= 101.22

const isTrueOrFalse = false
const outsidetemp =null

// Symbol => creates unique symbols

const id= Symbol('123')
const anohterId = Symbol('123')
console.log(id == anohterId);


// Refernce (non- primitive)
// Array , Object , Functions  

// arrays
const heros =["Ishan", "bhumi", "riesh"];

//object
let obj ={
name:"ishan",
age:20,
}
//function
 const myFunction = function(){
    console.log("Hello! Ishan");
    
 }
// +++++++++++++++++++++Memeory+++++++++++++++++

// two memory 
// stack (Primitive DataType) , in stack we get copay of the value
//   Heap (Non-Primitive DataType)  we get reference of the object stored in the heap 

