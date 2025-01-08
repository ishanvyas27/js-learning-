// for of loop related to array specific 
//["", "" , ""]
//[ {} , {} , {}]

const arr = [ 1, 2, 3, 4, 5]

for (const element of arr) {
   // console.log(element);
    
}

const greeting = "Hello Wolrd!"

for(const greet of greeting){
 //console.log(`Each char ${greet}`);
 
}

// map

const map = new Map();

map.set("IN" ,"India");
map.set("USA", "Uited States of America");
map.set("Fr", "France");


for (const [key, value] of map) {
    console.log(key , ":-", value);
    
}

const myobj = {
    game1 : "NFS",
    game2 : "CounterStrike",
    game3 : "Valeront"
}

// for of dont work with objects
// for (const [key , value] of myobj) {
//     console.log(key , ":-" , value);
    
// }
