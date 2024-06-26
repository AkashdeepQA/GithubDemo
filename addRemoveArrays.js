let arr = [10, 30, 60, 20, 25, 40, 45];

//splice(index, deleteCount, multiple parameters - values that you want to add) => delete elements from an index and also add new elements
//delete 60 & 20
//add 100, 110, 120
console.log('Original Array')
console.log(arr);
arr.splice(2, 2, 100, 110, 120);
console.log('Array after splice');
console.log(arr);

let arr1 = [10, 30, 60, 20, 25, 40, 45, 55, 76];
//slice(startIndx, endIndx) => create a copy of the array
//if no parameters => copy whole array
//if only one parameter => copy from the given index till the end of the array
console.log('Original Array')
console.log(arr1);
let arrCopy = arr1.slice(5);
console.log('Array after slice');
console.log(arrCopy);
console.log('Original Array after slice');
console.log(arr1);


let a1 = [1, 2, 3, 4];
let a2 = a1;
console.log(a1);
console.log(a2);
a2[1] = 20;
console.log(a1);
console.log(a2);