let age = 67;

//if age < 12 ==> You are a kid
//if age > 12 but < 18 ==> You are a Teenager
//if age > 18 but < 60 ==> You are an adult
//if age > 60  ==> You are an Senior Citizen
/*
//if..else
if(age < 18){
    console.log("You are a Kid");
}
else{
    console.log('You are an Adult');
}
*/
// shorthand if else -- ternary
age < 18 ? console.log('You are a Kid'):console.log('You are an Adult');


//else if ladder
if(age < 12){
    console.log("You are a kid");
}
else if(age < 18){
    console.log("You are a Teenager");
}
else if(age < 60){
    console.log("You are an Adult");
}
else{
    console.log("You are a Senior Citizen")
}

(age < 12) ? console.log("You are a kid") : 
    (age < 18) ? console.log("You are a Teenager") : 
    (age < 60) ? console.log("You are an Adult") : 
    console.log("You are a Senior Citizen");
