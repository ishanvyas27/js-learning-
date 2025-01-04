// read about push , pop , slice & splice
  

const marvelHero = ["IronMan" , "SpiderMan" , "CaptianAmerica"]
const DcHero = ["SuperMan" , "BatMan", "Flash"];

// console.log(marvelHero);
// console.log(DcHero);

// // using push 
// marvelHero.push(DcHero)
// console.log(marvelHero);

// using concat function

const allHeros = marvelHero.concat(DcHero)
console.log(allHeros);

const all_new_heros = [...marvelHero ,...DcHero]
console.log(all_new_heros);
