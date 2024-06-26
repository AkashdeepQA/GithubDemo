//string ==> data type in JS
//Declaring a string
let strSq = 'Ankit';
let strDq = "Swale";
let strBt = `Shivam`;

console.log(typeof(strSq));
console.log(typeof(strDq));
console.log(typeof(strBt));
let fname = 'Akashdeep';
let lName = 'Srivastava';
let age = 33;
console.log("My first name is " + fname + " and my surname is " + lName + " and my age is " + age);
console.log(`My first name is ${fname} and my surname is ${lName} and my age is ${age}`);

//length of a string
let intro = `My first name is ${fname} and my surname is ${lName} and my age is ${age}`;
console.log(intro.length);
console.log(strSq.length);


//Accessing characters:
for(let i = 0; i<strSq.length; i++){
    console.log(strSq[i]);
}

console.log(strSq.at(-2));


//changing the case - won't change the original string
let strUC = intro.toUpperCase();
console.log(strUC);

let strLC = intro.toLowerCase();
console.log(strLC);

//searching for substring
//indexOf() => returns the starting index of the occurance of substring or returns -1 if the substring is not found
console.log('Akashdeep srivastava'.indexOf('s'));
console.log('Akashdeep srivastava'.lastIndexOf('s', 14));

//find out first s in the string and replace it with v
//strings are immutable
let myname = 'Akashdeep srivastava';
console.log(myname.includes('dwep'));
console.log(myname.startsWith('Akas'));
console.log(myname.endsWith('av'));
console.log(myname.replaceAll('a', 'w'));