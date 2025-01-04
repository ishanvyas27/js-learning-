// read about push , pop , slice & splice
  

const marvelHero = ["IronMan" , "SpiderMan" , "CaptianAmerica"]
const DcHero = ["SuperMan" , "BatMan", "Flash"];

// console.log(marvelHero);
// console.log(DcHero);

// // using push 
// marvelHero.push(DcHero)
// console.log(marvelHero);

// using concat function

// const allHeros = marvelHero.concat(DcHero)
// console.log(allHeros);

// const all_new_heros = [...marvelHero ,...DcHero]
// console.log(all_new_heros);

console.log(Array.isArray("Ishan"));//check for the array

console.log(Array.from("Ishan"));
// creates the array from the non array elemnet 
console.log(Array.from({ name : "Ishan"})); //Intrestring


const s1 = 100
const s2 = 200
const s3 = 300

// creates the arrray by using elements uinsg (.of)
console.log(Array.of(s1 , s2, s3));



