let a = 150;
let b = 150;

//comparison - >, <, >=, <=, ==
console.log(a>=b);
console.log(a<=b);
console.log(a==b);

//string comparison
let str1 = "Akashdeep";
let str2 = "Akash";
console.log(str1>str2);

let str3 = "Amar";
let str4 = "Amit";
console.log(str3<str4);

//comparison of diff types
//operands will be converted to numbers and then will be compared
console.log(0 == "");
console.log(false > "100"); // 0 > 100
console.log(false == "abc"); //0 > NaN ==> false
console.log(100 === "100"); //0 == 0

