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



let mycodelanguages = {
    js : "javascript",
    cpp : "c plus plus",


}
for(language in mycodelanguages){
console.log(`key is ${language} and value is ${mycodelanguages[language]}`);
}