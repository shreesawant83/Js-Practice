//Covered Date and Time
//Date is an object
// let CreatedDate= new Date("2024-02-10");
// let CreatedDate= new Date(2024,2,10);
// let CreatedDate= new Date(2024,2,10,15,30);
// let CreatedDate= new Date("02-10-2024");
// let LocalStringDate= CreatedDate.toLocaleString();
// let ActualStringDate= CreatedDate.toISOString();
// let ActualStringDate= CreatedDate.toDateString();
// let ActualStringDate= CreatedDate.toJSON();
// console.log(LocalStringDate);

// let TimeStamp=Date.now();
// console.log(TimeStamp);  //return current time in miliseconds
// console.log(Math.round(Date.now()/1000));  //convert milisecond to second

let newDate=new Date();
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getMonth() +1);
let DateLocalString = newDate.toLocaleString("default",{
weekday:"narrow"
})
//Print lots of date format
console.log(DateLocalString);