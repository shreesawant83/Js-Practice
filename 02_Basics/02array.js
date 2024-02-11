//Learning array (methods)

//how to merge array.

// let Array1=[1,2,3,4,5];
// let Array2=["Shreepad","Sushant"];

// let ConcatArray=Array1.concat(Array2); //Using concat method we can merge both arrays
// console.log(ConcatArray); 

// let SpreadArray=[...Array1,...Array2]; //USing spred operator we can merge multiple arrays.
// console.log(SpreadArray);

// let egArray=[1,2,3,4,[1,3,4],[6,7,8,[4,3,5,[6,7,5]]]];
// let realArray=egArray.flat(Infinity);
// console.log(realArray);


console.log(Array.isArray("Shreepad"));
console.log(Array.from("Shreepad"));
console.log(Array.from({"name":"Shreepad"})); //Intresting

let score1=100;
let score2=200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));

