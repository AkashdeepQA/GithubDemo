//number conversion

//explicit
let str1 = "ABCD";
console.log(typeof(str1));

let num = Number(str1);
console.log(`type of num is ${typeof(num)} and the value is ${num}`);

//implicit
let s1 = "100";
let s2 = 50;
let res = s1*s2;
console.log(`Data Type: ${typeof(res)} and value: ${res}`);


//string conversion
let num1 = 100;
let b1;
let res1 = String(num1);
let res2 = String(b1);
console.log(`Data Type: ${typeof(res1)} and value: ${res1}`);
console.log(`Data Type: ${typeof(res2)} and value: ${res2}`);


//boolean conversion
let str3 = "true";
let str4 = "false";

let bool1 = Boolean(str3);
let bool2 = Boolean(str4);
console.log(`Data Type: ${typeof(bool1)} and value: ${bool1}`);
console.log(`Data Type: ${typeof(bool2)} and value: ${bool2}`);

//falsy = undef, null, 0, NaN, blank string
//truthy = any number except 0,any string which is not blank
let temp = 0; 
console.log(temp);
console.log(Boolean(temp));


console.log(Number(NaN));


