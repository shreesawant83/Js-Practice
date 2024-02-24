//Denometer input
let Nemo = -20;
//Denomter input 
let Deno = 1;
//get type of input 
let DenoType = (typeof Deno);
//checking type of input
if (DenoType == "number") {
    //checking deno is greater than 0
    if (Deno > 0 && Nemo > 0) {
        //performing calculation
        let FinalCalculatuion = Nemo / Deno;
        //printing final result
        console.log(`The Final Calculation is ${FinalCalculatuion}`);
    } else {
        //Value is 
        console.log("Deno or nemo value sholud be less than 0");
    }
} else {
    //type not same then error happened
    console.log("The input is not correct");
}

