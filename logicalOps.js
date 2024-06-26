let age = 62;
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
//62
// age >= 18 and <=60 ==> you can be employed
//&&
//||

if(age >= 18 && age <= 60){
    console.log('You are employable');
}
else{
    console.log("You are not employable");
}

// exp < 5 and degree should be btech, bca or mca
let exp = 5;
let degree = 'mba';
if(!(exp >= 5) && (degree==='bTech' || degree==='bca' || degree==='mca')){
    console.log('You are eligible');
}
else{
    console.log('You are not eligible');
}

console.log(!(4>5));



