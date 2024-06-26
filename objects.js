//Objects declaration
let obj1 = new Object();
let obj2 = {};

console.log(typeof(obj1));
console.log(typeof(obj2));

//Object initialization
let user = {
    name: 'Akashdeep',
    age: 33,
    city: 'Bangalore',
    isAdmin: true
}

console.log(user);
let temp = 'city'
console.log('User name is: ' + user.name);
console.log('User Age is: ' + user['age']);
console.log('User City is: ' + user[temp]);

//Delete a property from object
console.log(user);
delete user.city;
console.log(user);

//Add a property
user.university = 'TMU';
console.log(user);
user['degree'] = 'MTech';
console.log(user);


//How to check if a key exists in an object
console.log("Does the key city exist in user object?: " + ('city' in user));
console.log("Does the key degree exist in user object?: " + ('degree' in user));

//Accessing all properties of an object - for...in
for(key in user){
    console.log(`The value of key ${key} is ${user[key]}`);
}

/*
3. We have an object storing salaries of our team:
	let salaries = {
		John: 100,
		Ann: 160,
		Pete: 130
	}
Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
If salaries is empty, then the result must be 0.
*/
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
//salaries['John']

let sum = 0;
for(let emp in salaries){
    sum+= salaries[emp]; //==> salaries['Pete']
}

console.log("Total Salary of employees is: " + sum);