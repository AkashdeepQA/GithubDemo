//Switch case

let dayNum = 15;
let dayName = '';

switch(dayNum){
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;
    default:
        dayName = 'Not a valid day';
        break;
}

console.log('The day is: ' + dayName);



//Rewrite this code using:
//shorthand expression ?...:
//switch case
let login = 'Director';
let message;
if (login == 'Employee') {
    message = 'Hello';
} 
else if (login == 'Director') {
    message = 'Greetings';
} 
else if (login == '') {
    message = 'No login';
} 
else {
    message = '';
}
console.log(message);