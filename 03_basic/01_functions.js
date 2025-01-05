// 

function AddTwoNum (num1 , num2){
    console.log(num1+num2);
    const result = num1 + num2;
    return result
}
//  AddTwoNum(3 , 4);

//  const result = AddTwoNum(4 , 5);
//  console.log(result);

//  console.log(AddTwoNum( "a", 4));
 
 function ifLoggedIN ( username){
    if(!username){
        console.log("User Name cannot be empty!");
        return `Enter valid user name` 
    }
    return `${username} just logged in!`
 }
// console.log(ifLoggedIN("Ishan"));
 // console.log(ifLoggedIN());
  
 // how to handle is argumnets are mulitiple and not not known at the time of creating function

 function calculatePrice (...num){
    // Stores the value in array
    console.log(num);
 }
 //calculatePrice(200 , 300 , 4000)

 // pasing object in the function

//  const user ={
//     username : "Ishan",
//     age : 20
//  }

//  function userInfo(user){
//     console.log(` Hello ${user.username} your age is ${user.age}`);
//  }

//  userInfo(user);

//  userInfo({
//     username : "Krish",
//     age :22
//  })

//passing the array in the function

function arrayInfo (arr){
     console.log(arr[1]);
     
}
const array1 =[200 , 300 , 3000]

arrayInfo(array1)