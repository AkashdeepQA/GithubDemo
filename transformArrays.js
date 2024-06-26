let arr = [10, 30, -60, 20, 5, -25, 20, 20.12]; //mtr

//Array.map()
let arrCm = arr.map(item => item*100);
console.log('arr content in CM: ' + arrCm);
console.log('Original Arr: ' + arr);

//sort
let arrChars = ['s', 'y', 'b', 'd', 'q', 'a', 'r', 'A', 'D', 'E'];
arrChars.reverse();
console.log('Reversed arr: ' + arrChars);

arr.sort((a,b)=>a-b);
console.log('Sorted number array: ' + arr);

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
console.log(Array.isArray(salaries));
let num = 3;
console.log(typeof(arr));

let someRes = (arr.some(item => item > 30));
console.log(someRes);

let names = ['Ankit', 'Shiva', 'Swale', 'Yash', 'Shivam', 'Raj', 'Aryan'];
let str = names.join(';');
console.log(names);
console.log('After join: ' + str);

let names2 = str.split(';');
console.log(names2);

let entRes = names.entries();
console.log(entRes);
console.log(Array.isArray(entRes));

for(let x of entRes){
    console.log(x);
}



