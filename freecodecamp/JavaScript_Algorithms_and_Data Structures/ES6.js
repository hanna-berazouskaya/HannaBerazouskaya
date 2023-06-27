/* 1. Compare Scopes of the var and let Keywords 
Fix the code so that i declared in the if statement is a separate variable than i declared in the first line of the function. Be certain not to use the var keyword anywhere in your code.

This exercise is designed to illustrate the difference between how var and let keywords assign scope to the declared variable. When programming a function similar to the one used in this exercise, it is often better to use different variable names to avoid confusion.

function checkScope() {
let i = 'function scope';
if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
}
console.log('Function scope i is: ', i);
return i;
}

2. Mutate an Array Declared with const 
An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignments.
const s = [5, 7, 2];
function editInPlace() {
s[0] = 2;
s[1] = 5;
s[2] = 7;
return s;
}
editInPlace();


3. Prevent Object Mutation
In this challenge you are going to use Object.freeze to prevent mathematical constants from changing. You need to freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties.
function freezeObj() {
const MATH_CONSTANTS = {
    PI: 3.14
};
Object.freeze(MATH_CONSTANTS);
try {
    MATH_CONSTANTS.PI = 99;
} catch(ex) {
    console.log(ex);
}
return MATH_CONSTANTS.PI;
}
const PI = freezeObj();


4. Use Arrow Functions to Write Concise Anonymous Functions
Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax. Also, make sure nothing is defined using the keyword var.

const magic = () => new Date();


5. Write Arrow Functions with Parameters
Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

6. Use the Rest Parameter with Function Parameters
Modify the function sum using the rest parameter in such a way that the function sum is able to take any number of arguments and return their sum.
const sum = (...args) => {
let total = 0;
for (let i = 0; i < args.length; i++) {
    total += args[i];
}
return total;
}

7. Use the Spread Operator to Evaluate Arrays In-Place 

Copy all contents of arr1 into another array arr2 using the spread operator. 

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];  // Change this line
console.log(arr2);

8. Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
yesterday: 75,
today: 77,
tomorrow: 80
};
const {today, tomorrow} = HIGH_TEMPERATURES 

9. Use Destructuring Assignment to Assign Variables from Objects 
Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

const HIGH_TEMPERATURES = {
yesterday: 75,
today: 77,
tomorrow: 80
};
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

10. Use Destructuring Assignment to Assign Variables from Nested Objects

Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.

const LOCAL_FORECAST = {
yesterday: { low: 61, high: 75 },
today: { low: 64, high: 77 },
tomorrow: { low: 68, high: 80 }
};
const {today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;

11. Use Destructuring Assignment to Assign Variables from Arrays
Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.
let a = 8, b = 6;
[a, b] = [b, a];
*/