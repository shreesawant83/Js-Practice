// //Covered Numbers and maths 
//  let TempNumber = new Number(10000000);
//  console.log(TempNumber);

//  let NumtoString=TempNumber.toString().length;
//  console.log(NumtoString);

//  let NumFixedvalue=TempNumber.toFixed(1);
//  console.log(NumFixedvalue);

//  let CurrencyFormat = TempNumber.toLocaleString("en-IN");
//  console.log(CurrencyFormat);

//MINVALUE
//MINVALUE
////////////////////////Maths//////////////////////////

console.log(Math); //Math Library this is math object
console.log(Math.floor(4.1));  // return min value
console.log(Math.ceil(4.5));   //return max value
console.log(Math.abs(-4));     //return always positive value 
console.log(Math.min(7,3,6,0,5));   //return min value from array
console.log(Math.max(7,3,6,0,5));  //return max value from array
console.log(Math.round(7.6));      // round of value

console.log(Math.random()); //Get random values between 0 to 1

//if i want print value between 1 to 10 then i will add 1 in code for example
console.log(Math.floor(Math.random() * 10) +1)

//Print number between 10 to 20

let MIN=12;
let MAX=18;

console.log(Math.floor(Math.random()*(MAX - MIN +1 )+MIN));