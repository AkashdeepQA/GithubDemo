//Arrays
//Declaration
let arr1 = new Array();
let arr2 = new Array(4); // size allocated
let arr3 = [];
let arr4 = [10, 30, 60, 20, 25, 40, 45]
let mixedArr = [10, 'javascript', true, {name: 'Ankit', age: 21}];

//length of an array
console.log(`Length of arr1 is ${arr1.length}`);
console.log(`Length of arr2 is ${arr2.length}`);
console.log(`Length of arr3 is ${arr3.length}`);
console.log(`Length of arr4 is ${arr4.length}`);
console.log(arr4);
console.log(mixedArr.length);
console.log(mixedArr);

//Accessing the elements
console.log('Element at 3rd index: ' + arr4[3]);
console.log('Element at -2 index: ' + arr4.at(-2));

//Push => adding elements to the end of an array
console.log('Original Array')
console.log(arr4);
console.log("Length of original array: " + arr4.length );
arr4.push(95, 75, 85);
console.log('After push Array')
console.log(arr4);
console.log("Length of array after Push: " + arr4.length );


//Pop => remove and return the last element of an array
let lastEle = arr4.pop();
console.log('After Pop Array')
console.log(arr4);
console.log("Length of array after Pop: " + arr4.length );
console.log('Popped element: ' + lastEle);

//unshift => adding elements to the beginning of an array
console.log('Original Array')
console.log(arr4);
console.log("Length of original array: " + arr4.length );
arr4.unshift(101);
console.log('After unshift Array')
console.log(arr4);
console.log("Length of array after unshift: " + arr4.length );

//shift => removes and returns the first element of an array
console.log('Original Array')
console.log(arr4);
let firstEle = arr4.shift();
console.log('After shift Array')
console.log(arr4);
console.log("Length of array after shift: " + arr4.length );
console.log('Shifted element: ' + firstEle);

