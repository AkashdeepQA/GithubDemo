//Functions are the building block of a code / program
// sum of 2 numbers

console.log('program start');

let total = sum(5, 10); // sum func should calc the addition and assign the result to total variable
console.log('The total is: ' + total);
console.log('program end');


function sum(a, b){
    return a + b;
}


// if n is prime return true else return false
let n = 17;

console.log(isPrime(n));

function isPrime(num){
    for (i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

//Assignment:
//Write a function min(a,b) which returns the least of two numbers a and b.
//Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
//console.log('Outside function ' + num);