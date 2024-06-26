

let str = 'abcdefghijklmno';
console.log(str.substring(5, 10));
console.log(str.indexOf('ghi', 7));

let arr1 = [1, 2, 3, 4, 40, 50, 15, 10, 18, 22, 25, 29];

let findres = arr1.find(item => item > 15);
console.log(findres);

let filterres = arr1.filter(item => item > 10 && item < 30);
console.log(filterres);

arr1.sort((a,b)=>a-b);
console.log(arr1);

let mapRes = arr1.map(item => item*2);
console.log(mapRes);
console.log(arr1);

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];
users.sort((a,b)=>a.age-b.age);
//let namesArr = users.map(item => ({fullName: `${item.name} ${item.surname}`, id: item.id}));
//console.log(namesArr);
console.log(users);

let arr2 = [10, 20, 30];
let res = [];
arr2.forEach((item, index) => {
    res.push(item*2);
    console.log(res[index]);
})
console.log(res);