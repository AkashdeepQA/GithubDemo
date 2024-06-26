let arr = [10, 30, 60, 20, 25, 40, 45]; //length = 7 but the lastIndex = 7-1 => 6
let i = 0;
console.log('====do...while loop====');
do{
    console.log(`Value at index ${i} is ${arr[i]}`);
    i++;
}while(i < arr.length);

console.log('====while loop====');
i = 0;

while(i < arr.length){
    console.log(`Value at index ${i} is ${arr[i]}`);
    i++;
}

console.log('====for loop====');
for(let j = 0; j < arr.length; j++)
{
    console.log(`Value at index ${j} is ${arr[i]}`);
}

console.log('====for...in loop====');
for(let k in arr){
    console.log(`Value at index ${k} is ${arr[k]}`);
}

console.log('====for...of loop====');
for(let e of arr){
    console.log(`Value: ${e}`);
}