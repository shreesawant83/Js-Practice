//Learn about execution context and how javascipt code works.
//How much execution context available
// ==> There are mainly two types Global ex context and function ex context and third is eval ex context
//{}
//1. Memory creation phase
//2. Execution phase

// Example code 
// let val1=10;
// let val2=5;
// function addNum(num1,num2){
//     let total = num1+num2;
//     return total;
// }
// let result1 = addNum(val1,val2);
// let result2 = addNum(10,2);

// 1 step Global execution > this
// 2 step memory phase 
// val1 -> undefined
// val2 -> undefined
// addnum -> definition
// result1 -> undefined
// result2 -> undefined

// 3 step execution phase
// val1 ->10
// val2 ->5
// addnum -> create new execution context and delete after process complete (new env + execution thread)
// result1 -> undefined
// result2 -> undefined


//Call stack //LIFO

//created one() two() three() method in developer tool (sources > snippets)
// and run script and see call stack.