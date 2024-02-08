//Conversion Operation
//Print type of variables
/* let myString="Shreepad";
let myInt=8;
let myBool=true;
let myUndefined=undefined;
let myNull=null;
console.log(typeof myString);
console.log(typeof myInt);
console.log(typeof myBool);
console.log(typeof myUndefined);
console.log(typeof myNull); */

//Convert types

/* let Salary="30000";
let NewSalary=Number(Salary);
console.log(NewSalary); */
//Using Number we can convert string type t integer type.

//NaN Concept
/* let Salary="30000Abc";
let NewSalary=Number(Salary);
console.log(NewSalary); */
//We get NaN value because number cannot convert num+string into integer but still its give type number


//Boolean Conversion
//   "" => false;
// "Value" =>true
//   1 => true
//   0 => false
/* let SalaryCredit=1;
let Answer=Boolean(SalaryCredit);
console.log(Answer); */


//String Conversion
//   1 => 1;   look like integer but type shows string so this is sucessfully converted in string format.
// "Value" =>true
//   1 => true
//   0 => false
let SalaryCredit=1;
let Answer=String(SalaryCredit);
console.log(Answer);
console.log(typeof Answer);