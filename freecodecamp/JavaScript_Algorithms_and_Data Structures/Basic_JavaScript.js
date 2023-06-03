// 1. Comment Your JavaScript Code
/* Comment Your JavaScript Code 
Comment Your JavaScript Code 
Comment Your JavaScript Code 
Comment Your JavaScript Code 
*/

// 2. Declare JavaScript Variables
var myName;

// 3. Storing Values with the Assignment Operator
var a;
a = 5;

// 4. Assigning the Value of One Variable to Another
// Setup
var a;
a = 7;
var b;
b=a;
// Only change code below this line

// 5. Initializing Variables with the Assignment Operator
var a = 9;

// 6. Declare String Variables
var myFirstName = "Hanna";
var myLastName = "Berazouskaya";

// 7. Understanding Uninitialized Variables
// Only change code below this line
var a=5;
var b=10;
var c="I am a";
// Only change code above this line
a = a + 1;
b = b + 5;
c = c + " String!";

// 8. Understanding Case Sensitivity in Variables
// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// 9. Explore Differences Between the var and let Keywords
// Update the code so it only uses the let keyword.
let catName = "Oliver";
let catSound = "Meow!";

// 10. Declare a Read-Only Variable with the const Keyword
/* Change the code so that all variables are declared using let or const. Use let when you want the variable to change, and const when you want the variable to remain constant. Also, rename variables declared with const to conform to common practices. Do not change the strings assigned to the variables. */
const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

// 11. Add Two Numbers with JavaScript
/* Example:
const myVar = 5 + 10;
myVar now has the value 15.
Change the 0 so that sum will equal 20.*/
const sum = 10 + 10;

// 12. Subtract One Number from Another with JavaScript
/* Example
const myVar = 12 - 6;
myVar would have the value 6.
Change the 0 so the difference is 12. */
const difference = 45 - 33;

// 13. Multiply Two Numbers with JavaScript
/* Example
const myVar = 13 * 13;
myVar would have the value 169.
Change the 0 so that product will equal 80. */
const product = 8 * 10;

// 14. Divide One Number by Another with JavaScript
/* Example
const myVar = 16 / 2;
myVar now has the value 8. 
Change the 0 so that the quotient is equal to 2. */
const quotient = 66 / 33;

// 15. Increment a Number with JavaScript
/* You can easily increment or add one to a variable with the ++ operator.
i++;
is the equivalent of
i = i + 1;
Note: The entire line becomes i++;, eliminating the need for the equal sign.

Change the code to use the ++ operator on myVar. */

//let myVar = 87;

// Only change code below this line
myVar++;

// 16. Decrement a Number with JavaScript

/* You can easily decrement or decrease a variable by one with the -- operator.
i--;
is the equivalent of i = i - 1;
Note: The entire line becomes i--;, eliminating the need for the equal sign.

Change the code to use the -- operator on myVar. */

let myVar = 11;

// Only change code below this line
myVar--;

// 17. Create Decimal Numbers with JavaScript

/* Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7). */

const ourDecimal = 5.7;

// Only change code below this line

var myDecimal = 5.7;

// 18. Multiply Two Decimals with JavaScript

/* Change the 0.0 so that product will equal 5.0. */

// const product = 2.0 * 2.5;

// 19. Divide One Decimal by Another with JavaScript

/* Now let's divide one decimal by another.

Change the 0.0 so that quotient will equal to 2.2. */

//const quotient = 4.4 / 2.0; // Change this line

// 20. Finding a Remainder in JavaScript

/* Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator. */

const remainder = 11%3;

// 21. Compound Assignment With Augmented Addition

/* Convert the assignments for a, b, and c to use the += operator. */

let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a += 12;
b += 9;
c += 7;

// 22. Compound Assignment With Augmented Subtraction

/* Convert the assignments for a, b, and c to use the -= operator. */

let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a -= 6;
b -= 15;
c -= 1;

// 23. Compound Assignment With Augmented Multiplication

/* Convert the assignments for a, b, and c to use the *= operator. */

let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a *= 5;
b *= 3;
c *= 10;

// 24. Compound Assignment With Augmented Division

/* Convert the assignments for a, b, and c to use the /= operator. */

let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a /= 12;
b /= 4;
c /= 11;


// 25. Escaping Literal Quotes in Strings

/* Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:

I am a "double quoted" string inside "double quotes". */

//const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Change this line

// 26. Quoting Strings with Single Quotes

/* Change the provided string to a string with single quotes at the beginning and end and no escape characters.

Right now, the <a> tag in the string uses double quotes everywhere. You will need to change the outer quotes to single quotes so you can remove the escape characters. */

//const myStr = '<a href="http://www.example.com" target="_blank"> Link </a>';


// 27. Escape Sequences in Strings

/* Assign the following three lines of text into the single variable myStr using escape sequences.

FirstLine
    \SecondLine
ThirdLine
You will need to use escape sequences to insert special characters correctly. You will also need to follow the spacing as it looks above, with no spaces between escape sequences or words.

Note: The indentation for SecondLine is achieved with the tab escape character, not spaces. */

// const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; // Change this line

/* 28. Concatenating Strings with Plus Operator

Build myStr from the strings This is the start. and This is the end. using the + operator. Be sure to include a space between the two strings.*/

const myStr = "This is the start. " + "This is the end."; // Change this line

/* 29. Concatenating Strings with the Plus Equals Operator
Build myStr over several lines by concatenating these two strings: This is the first sentence. and This is the second sentence. using the += operator. Use the += operator similar to how it is shown in the example and be sure to include a space between the two strings. Start by assigning the first string to myStr, then add on the second string. */

// let myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

/* 30. Constructing Strings with Variables
Set myName to a string equal to your name and build myStr with myName between the strings My name is and and I am well! */

// const myName = "Hanna"; const myStr = "My name is " + myName + "and I am well!";

/* 31. Appending Variables to Strings
Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator. */

// const someAdjective = "good";
//let myStr = "Learning to code is ";
//myStr += someAdjective;

/* 32. Find the Length of a String
Use the .length property to set lastNameLength to the number of characters in lastName. */
// Setup
let lastNameLength = "";
const lastName = "Lovelace";

// Only change code below this line
lastNameLength = lastName.length;

/* 33. Use Bracket Notation to Find the First Character in a String */

// Setup
let firstLetterOfLastName = "";
//const lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0]; // Change this line

/* 34. Understand String Immutability */

// Setup
//let myStr = "Jello World";

// Only change code below this line
myStr = "Hello World"; // Change this line
// Only change code above this line

/* 35. Use Bracket Notation to Find the Nth Character in a String */

// Setup const lastName = "Lovelace";

// Only change code below this line
const thirdLetterOfLastName = lastName [2]; // Change this line

/* 36. Use Bracket Notation to Find the Last Character in a String */

// Setup const lastName = "Lovelace";

// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line

/* 37. Use Bracket Notation to Find the Nth-to-Last Character in a String */

// Setup const lastName = "Lovelace";

// Only change code below this line
const secondToLastLetterOfLastName = lastName [lastName.length - 2]; // Change this line

/* 38. Word Blanks */

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Only change code below this line
const wordBlanks = "My " + myNoun + " " + myAdjective +  " " + myVerb + " " + myAdverb; // Change this line
// Only change code above this line

/* 39. Store Multiple Values in one Variable using JavaScript Arrays */

// Only change code below this line
const myArray = ["Hello",1];

/* 40. Nest one Array within Another Array */

// Only change code below this line
//const myArray = [["Bulls", 23], ["White Sox", 45]];

/* 41. Access Array Data with Indexes */

// const myArray = [50, 60, 70];
var myData = myArray[0];
console.log(myData)

/* 41. Modify Array Data With Indexes */

// Setup
//const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;

/* 42. Access Multi-Dimensional Arrays With Indexes */

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];

/* 43. Manipulate Arrays With push Method */

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3])

/* 44. Manipulate Arrays With pop Method */

/* Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray. */

// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
//const removedFromMyArray = myArray.pop();

/* 45. Manipulate Arrays With shift Method*/

/* Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.*/

// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();

/* 46. Manipulate Arrays With unshift Method

Add ["Paul", 35] to the beginning of the myArray variable using unshift().*/

// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);

/* 47. Shopping List
There should be at least 5 sub-arrays in the list.*/

const myList = [["Chocolate Bar", 20],["Chocolate", 15],["Bar", 10],["Chocol", 5],["Choco Bar", 1]];

/* 48. Write Reusable JavaScript with Functions
1. Create a function called reusableFunction which prints the string Hi World to the dev console.
2. Call the function. */

function reusableFunction(){
    console.log("Hi World");
  }
  reusableFunction();

/* 49. Passing Values to Functions with Arguments
1. Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
2. Call the function with two numbers as arguments.
*/
function functionWithArgs(a,b) {
    console.log(a + b);
  }
  functionWithArgs(1,2);

/* 50. Return a Value from a Function with Return
Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value. */

function timesFive(num) {
    return num * 5;
  }
const answer = timesFive(5);


/* 51. Global Scope and Functions
Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords. */ 

// Declare the myGlobal variable below this line
const myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

/* 52. Local Scope and Functions
The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

Note: The console will still display ReferenceError: myVar is not defined, but this will not cause the tests to fail. */

function myLocalScope() {
// Only change code below this line
const myVar='';
console.log('inside myLocalScope', myVar);
}
myLocalScope();
  
// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);



/* 53. Global vs. Local Scope in Functions
Add a local variable to myOutfit function to override the value of outerWear with the string sweater. */

// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = "sweater";
  return outerWear;
}

console.log (myOutfit());
console.log (outerWear);

/* 54. Understanding Undefined Value returned from a Function
Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined. */

// Setup
//let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive() {
  sum = sum + 5;
}
// Only change code above this line

addThree();
addFive();

/* 55. Assignment with a Returned Value
Call the processArg function with an argument of 7 and assign its return value to the variable processed. */

// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
// Only change code below this line

/* 56. Stand in Line
Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed. */

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item)
    return arr.shift();
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));


/* 57. Understanding Boolean Values
Modify the welcomeToBooleans function so that it returns true instead of false.   */


