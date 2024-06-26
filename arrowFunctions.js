//Comment - added in master branch
//Arrow function

let printHello = () => console.log("Hello, World!!");

//return double of the parameter passed
let double = (num) => 2*num;

let d = double(10);
console.log(d);


let primeNo = (n) => {
    for (i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
let num1 = 25;
console.log(`The number ${num1} is a prime number?: ${primeNo(num1)}`);

//Assignment: Re-write yesterday's functions using arrow function