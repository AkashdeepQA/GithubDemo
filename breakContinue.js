//Find out prime numbers between 3 to 50
//break ==> terminate / exit the loop

let n = 50;


for (let j = 3; j <= 50; j++) {
    let i = 0;
    //logic to find a number is prime or not
    for (i = 2; i < j; i++) {
        if (j % i === 0) {
            break;
        }
    }
    if (i === j) {
        console.log(`${j} is prime number`);
    }
    else {
        console.log(`${j} is a composite number`);
    }
    //===========end of logic=========
}

/*
// Continue => is used when we want to skip rest of the code in the iterations and skip to the next iteration
let n1 = 26;
for(let i = 1; i <=26; i++){
    if(i % 5 ===0){
        continue;
    }
    console.log(i);
}
*/