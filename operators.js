/*
//Unary Operator
let a = -150;
let b = -a;
console.log(b);

//+ unary ===> explicit number conversion
let c = "100";
let d = +c;
let e = Number(c);
console.log(`Type: ${typeof(d)} and value: ${d}`);


//Maths ==> + - / *
console.log(100 * '200');
console.log('200' / 100);
console.log(100 - '200');
console.log(100 + '200');
console.log(15/2); //remainder
console.log(2**5); //exponential

//Operator precedence
console.log((15/100)*200);


//Assignment operator
let a = b = c = 50; //chaining assignments
console.log(`a = ${a}, b = ${b} and c = ${c}`);

//Modify-in-place
let a = 50;
a+=10; //a = a+10

let b = 50;
b*=2; //b = b*2

let c = 50;
c/=2; //c = c/2
console.log(`a = ${a}, b = ${b} and c = ${c}`);
*/


//Increment 
//postfix = e++
//prefix = ++e
let d = 100;
let dpp = d++; // dpp = 100, d = 101
console.log(dpp);
let ppd = ++d; // ppd = 102
console.log(ppd);
console.log(d);


//decrement
//postfix = e--
//prefix = --e
let e = 100;
let emm = e--; //emm = 100, e = 99
console.log(emm);
let mme = --e; // mme = 98, e = 98
console.log(mme);
console.log(e);

let a1 = 2; 
let x = 1 + (a1 *= 2);
console.log(x); //5

console.log("" + 1 + 0); //10
console.log("" - 1 + 0); // -1
console.log(true + false);//1
console.log(4 + 5 + "px");
