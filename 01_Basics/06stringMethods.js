//Learning String Methods

let tempString= new String("Shreepad");
let GetStringLength = tempString.length;

//get String length
console.log(GetStringLength);

let StringUpperCase = tempString.toUpperCase();
//String upperCase Method
console.log(StringUpperCase);

let StringLowercase=tempString.toLowerCase();
///String lowercase 
console.log(StringLowercase);

//substring
let Substring=tempString.substring(1,4);
console.log(Substring);

//trim
let MyFullName ="        Shreepad Sawant   "
let trimString = MyFullName.trim();
console.log(trimString);

//replace
let AllRemoveSpace=trimString.replace(" ","");
console.log(AllRemoveSpace);

//concat with plus operator
let jointString=tempString+MyFullName;
console.log(jointString);

//concat with method
let ConcatString=tempString.concat(MyFullName);
console.log(ConcatString);

let StringSplit= trimString.split(" ");
console.log(StringSplit);
let SplitValuestemp= "Shreepad-Sahebrao-Sawant";
let GetNamevalues=SplitValuestemp.split("-");
console.log(GetNamevalues[0]);