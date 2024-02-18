//Learning highier order functions

// const myArrs=[1,2,3,4,5];

// for (const myArr of myArrs) {
//     console.log(myArr);
// }

// let myGreetings="hello Shreepad";
// for(greet of myGreetings){
// console.log(`This is green ${greet}`);
// }


//Maps is the object and hold key value pairs data (also hold unique values)
// const map = new Map();
// map.set("IN", "India")
// map.set("USA", "United states of america")
// map.set("Uk", "United kingdom")
// // map.set("IN","India")
// console.log(map);

// //return key and value pairs data in array format 
// for (key of map) {
//     console.log(key);
// }

// //if we want to print separate key and value data the follow below step
// for ([key, value] of map) {
//     console.log(`This is key ${key} & This is value ${value}`);
// }

// //Can we iterate object using for of loop ?
// let myNewGames = {
//     "game1": "Pubg",
//     "game2": "freefire"
// }

// //this object is not iteratable using this technique
// for (key of myNewGames) {
//     console.log(key);
// }


//Major difference between (For of loop) and (For in loop) is 
//for of loop gives you direct values and for in loop gives you keys.


// let mycodelanguages = {
//     js : "javascript",
//     cpp : "c plus plus",


// }
// for(language in mycodelanguages){
// console.log(`key is ${language} and value is ${mycodelanguages[language]}`);
// }

//For each loop

// let Family = ["shreepad", "sushant", "sneha", "smita", "asha"];
//In for each loop run callback function and give one any name parameter.
// Family.forEach((fam) => {
    //     console.log(fam);
    // })
    
//In parameter what we get => (fam,index,coding) in short (values, index,whole array)
// Family.forEach((fam,index,arr)=>{
// console.log(`This is Values ${fam}`);
// console.log(`This is index ${index}`);
// console.log(`This is whole array ${arr}`);
// })

//Another method foreach loop executed.
//create any name function
// function printFamily(fam){
    // console.log(fam);
    // }
// Family.forEach(printFamily); // give function reference (don't call direct function)
//  For each don't return a value 


//Learn [{},{},{}]

// const myCodingLang=[
//     {
//         languageName:"javascript",
//         languagefilename:"js"
//     },
//     {
//         languageName:"java",
//         languagefilename:"java"
//     },{
//         languageName:"python",
//         languagefilename:"py"
//     }
// ]

//Filter Method
//Filter method returns value

const myNum = [1,2,3,4,5,6,7,8,9,10];
//if we use {} then we need to write return statement
// const filteredvalue= myNum.filter((myNumValue)=>{
//     return myNumValue > 5
// })
// console.log(filteredvalue);

//if we dont use {} then we dont need to write return statement
// const filteredvalue= myNum.filter((myNumValue)=>myNumValue>5)
// console.log(filteredvalue);