// for in loop 

const myObj = {
    1 : "one",
    2 : "Two",
    3 : "Three",
    4 : "Four"
}

for (const key in myObj) {
    //console.log(`${key} it is given by ${myObj[key]}`);
    
}

const progam = [ "c" , "js" , "JAVA" , "Swift" , "ruby"]

for (const key in progam) {

    //console.log(progam[key]);
    
}

const map = new Map();
map.set("IN" ,"India");
map.set("USA", "Uited States of America");
map.set("Fr", "France");


// for(const key  in map){
//     console.log(key);
    
// }