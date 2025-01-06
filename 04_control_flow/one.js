//Truth and falsy values

//const email = "IShan@1234.ai"
//const email = [] // true
//const email = ""  // false
// if(email){
//     console.log("Got Email");
    
// } else{
//     console.log("Dont have email!");
    
// }

// Falsy values

// 0 , false, null , undefined , Nan , -0 , bigInt 0n , ""

// truth value
// "0" , "false" , [] , {} , function(){}

// how to check if the object is empty or not 

// const emtObj ={

// }

// if((Object.keys(emtObj)).length == 0){
// console.log("The object is Empty ");
// } else{
//     console.log("Object is not empty");
    
// }

// nullish colasing operator  ?? : null undefined

const val = 5 ?? 10
console.log(val);

const val1 = null ?? 10
console.log(val1);

const val2 = undefined ?? null
console.log(val2);
