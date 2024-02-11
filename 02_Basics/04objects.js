//Learning more about objects
// const myObjName = new Object(); //this singleton object
// console.log(myObjName);
const myObj1 = {} // this is non singleton object
// //Add values in objects
myObj1.id = 20;
myObj1.email = "shree@google.com"

// const newUser = {
//     fullname: {
//         firstname: "shreepad",
//         lastname: "Sawant"
//     }
// }

// myObj1.user=newUser;// add nested object in existing object
// console.log(myObj1.user.fullname.firstname); // we can access using dot 


// console.log(myObj1.user.fullname?.firstname); // //optional chaining method 


//How to merge objects
// let NewtempObj1={
//     name:"Shreepad"
// }
// let NewtempObj2={
//     age:25
// }
// let NewtempObj3={
//     role:"developer"
// }

// // let FinalMergeObj={NewtempObj1,NewtempObj2};
// // console.log(FinalMergeObj); //Problem with this method

// let FinalMergeObj=Object.assign({},NewtempObj1,NewtempObj2,NewtempObj3); //Working method

// let FinalMergeObj ={...NewtempObj1,...NewtempObj2,...NewtempObj3}; //this method is also working

// console.log(FinalMergeObj);


let NewtempObj1 = {
    name: "Shreepad",
    age: 24
}
let NewtempObj2 = {
    name: "Sushant",
    age: 26
}
let NewtempObj3 = {
    name: "Sneha",
    age: 27
}

// const NewObjectTemp = [
//     {
//         name: "Shreepad",
//         age: 24
//     },
//     {
//         name: "Sushant",
//         age: 26
//     },
//     {
//         name: "Sneha",
//         age: 27
//     }
// ]

// console.log(NewObjectTemp[0].name);


// console.log(myObj1);
// console.log(Object.keys(myObj1)); //return all only keys from enrted object
// console.log(Object.values(myObj1)); //return all only values from entred object
// console.log(Object.entries(myObj1)); //return key and value data in separate array from entred object

// console.log(myObj1.hasOwnProperty("email"));