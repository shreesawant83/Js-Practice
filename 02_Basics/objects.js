//Learning objects
//declare objects
//how to add symbol in object and display.
let myPass = Symbol("SymPass");
let userinfo={
    name:"Shreepad",
    age:24,
    email:"shreepad@gmail.com",
    role:"developer",
    [myPass]:"Pass"
}

//display object values
// console.log(userinfo.name); //using this method we can display but not prefer to use.
// console.log(userinfo["name"]); //Best approach to display object data

//how to add symbol in object and display.
// console.log(userinfo[myPass]);

//how to freeze object 
// userinfo.email="shreepad@yahoo.com"
// console.log(userinfo.email);
// Object.freeze(userinfo)
// userinfo.email="shreepad@abc.com"
// console.log(userinfo);

//how to add functions in objects

userinfo.greetings=function (){
    console.log("Hello User ! ");
}
userinfo.greetingstwo=function (){
    console.log(`Hello User ! ${this.name}  `);
}
console.log(userinfo.greetings());
console.log(userinfo.greetingstwo());