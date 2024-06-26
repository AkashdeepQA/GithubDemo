let arr1 = [10, 30, 60, 20, 25, 20, 40, 45, 20, 55, 76];


console.log(`Index of 20 is ${arr1.indexOf(20)}`);
console.log(`45 exitsts in this array?: ${arr1.includes(101)}`);

//find() ==> finds the first occurance of the element satisfying the condition
console.log(arr1.find(item => item > 30));

let filterRes = arr1.filter(item => item == 20);
console.log(filterRes);

console.log(arr1.findIndex(item => item > 30));

let p1 = {name: 'Shiva', salary: 50000};
let p2 = {name: 'Ankit', salary: 100000};
let p3 = {name: 'Akash', salary: 40000};
let p4 = {name: 'Shivam', salary: 60000};
let arrObj = [p1, p2, p3, p4];
let temp = arrObj.filter(item => item.name === 'Shivam');
console.log(temp);

arrObj.sort((a, b) => a.salary - b.salary);
console.log(arrObj);