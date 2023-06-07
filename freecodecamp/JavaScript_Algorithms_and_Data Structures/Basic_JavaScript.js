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
Modify the welcomeToBooleans function so that it returns true instead of false. */

function welcomeToBooleans() {
  // Only change code below this line

  return true; // Change this line

  // Only change code above this line
}

/* 58. Use Conditional Logic with If Statements 
Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.*/

function trueOrFalse(wasThatTrue) {
  // Only change code below this line
if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}

/* 59. Comparison with the Equality Operator
Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12. */

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
//testEqual(10);

/* 60. Comparison with the Strict Equality Operator
Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7. */

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
testStrict(10);

/* 61. Practice comparing different values
The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal. */

// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}
compareEquality(10, "10");

/* 62. Comparison with the Inequality Operator
Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99. */

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}
testNotEqual(10);

/* 63. Comparison with the Strict Inequality Operator
Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17 */

// Setup
function testStrictNotEqual(val) {
  if (val !== 17) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}
testStrictNotEqual(10);

/* 64. Comparison with the Greater Than Operator
Add the greater than operator to the indicated lines so that the return statements make sense. */

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  if (val > 10) {  // Change this line
    return "Over 10";
  }
  return "10 or Under";
}
testGreaterThan(10);

/* 65. Comparison with the Greater Than Or Equal To Operator
Add the greater than or equal to operator to the indicated lines so that the return statements make sense. */

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }
  if (val >= 10) {  // Change this line
    return "10 or Over";
  }
  return "Less than 10";
}
testGreaterOrEqual(10);

/* 66. Comparison with the Less Than Operator
Add the less than operator to the indicated lines so that the return statements make sense. */

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }
  if (val < 55) {  // Change this line
    return "Under 55";
  }
  return "55 or Over";
}
testLessThan(10);

/* 67. Comparison with the Less Than Or Equal To Operator
Add the less than or equal to operator to the indicated lines so that the return statements make sense. */

function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }
  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }
  return "More Than 24";
}
testLessOrEqual(10);

/* 68. Comparisons with the Logical And Operator
Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No. */

function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
      return "Yes";}
  return "No";
}
testLogicalAnd(10);

/* 69. Comparisons with the Logical Or Operator
Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside. */

function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
testLogicalOr(15);

/* 70. Introducing Else Statements
Combine the if statements into a single if/else statement. */

function testElse(val) {
  let result = "";
  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }
  return result;
}
testElse(4);

/* 71. Introducing Else If Statements
Convert the logic to use else if statements. */

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
}
}
testElseIf(7);

/* 72. Logical Order in If Else Statements
Change the order of logic in the function so that it will return the correct statements in all cases. */

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
orderMyLogic(7);

/* 73. Chaining If Else Statements
Write chained if/else if statements to fulfill the following conditions:

num < 5 - return Tiny
num < 10 - return Small
num < 15 - return Medium
num < 20 - return Large
num >= 20 - return Huge */

function testSize(num) {
  // Only change code below this line

if (num < 5) {
  return "Tiny";
} else if (num < 10) {
  return "Small";
} else if (num < 15 ) {
  return "Medium";
} else if (num < 20) {
  return "Large";
} else if (num >= 20) {
  return "Huge";
} else {
  return "Change Me";
}
  // Only change code above this line
}

testSize(7);


/* 74. Golf Code */
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line

if (strokes == 1) {
  return names [0];
} else if (strokes <= par - 2	) {
  return names [1];
} else if (strokes == par - 1 ) {
  return names [2];
} else if (strokes == par) {
  return names [3];
} else if (strokes == par + 1) {
  return names [4];
} else if (strokes == par + 2) {
  return names [5];
} else if (strokes >= par + 3	) {
  return names [6];
} 
else {
  return "Change Me";
}

  // Only change code above this line
}

golfScore(5, 4);

/* 75. Selecting from Many Options with Switch Statements
Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta */

function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line

switch (val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
}

  // Only change code above this line
  return answer;
}

caseInSwitch(1);

/* 76. Adding a Default Option in Switch Statements
Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
default - stuff */

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line

switch (val) {
  case "a":
    answer = "apple";
    break;
  case "b":
    answer = "bird";
    break;
  case "c":
    answer = "cat";
    break;
  default:
    answer = "stuff";
    break;
}

  // Only change code above this line
  return answer;
}

switchOfStuff(1);

/* 77. Multiple Identical Options in Switch Statements
Write a switch statement to set answer for the following ranges:
1-3 - Low
4-6 - Mid
7-9 - High

Note: You will need to have a case statement for each number in the range. */

function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line

switch (val) {
  case 1:
  case 2:
  case 3:
    answer = "Low";
    break;
  case 4:
  case 5:
  case 6:
    answer = "Mid";
    break;
  case 7:
  case 8:
  case 9:
    answer = "High";
    break;
}

  // Only change code above this line
  return answer;
}

sequentialSizes(1);

/* 78. Replacing If Else Chains with Switch
Change the chained if/else if statements into a switch statement. */

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  switch (val) {
   case "bob":
    answer = "Marley";
    break;
   case 42:
    answer = "The Answer";
    break;
   case 1:
    answer = "There is no #1";
    break;
   case 99:
    answer = "Missed me by this much!";
    break;
   case 7:
    answer = "Ate Nine";
    break;
  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

/* 79. Returning Boolean Values from Functions
Fix the function isLess to remove the if/else statements. */

function isLess(a, b) {
    return a < b;
  }
isLess(10, 15);

/* 80. Return Early Pattern for Functions
Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.
Hint
Remember that undefined is a keyword, not a string. */

// Setup
function abTest(a, b) {
  // Only change code below this line

  if (a<0 || b<0) {
    return undefined;
  }

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);

/* 81. Counting Cards
You will write a card counting function. It will receive a card parameter, which can be a number or a string, and increment or decrement the global count variable according to the card's value (see table). The function will then return a string with the current count and the string Bet if the count is positive, or Hold if the count is zero or negative. The current count and the player's decision (Bet or Hold) should be separated by a single space.

Example Outputs: -3 Hold or 5 Bet

Hint
Do NOT reset count to 0 when value is 7, 8, or 9.
Do NOT return an array.
Do NOT include quotes (single or double) in the output.  */

let count = 0;

function cc(card) {
  // Only change code below this line
switch(card) {

  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    count++;
    break;
  case 10:
  case "J":
  case "Q":
  case "K":
  case "A":
    count--;
    break;
}

var holdbet = 'Hold'
if (count > 0){
  holdbet = 'Bet'
}

  return count + " " + holdbet;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

/* 83. Build JavaScript Objects
Make an object that represents a dog called myDog which contains the properties name (a string), legs, tails and friends.

You can set these object properties to whatever values you want, as long as name is a string, legs and tails are numbers, and friends is an array. */

const myDog = {
  // Only change code below this line
  name: "Whiskers",
  legs: 4,
  tails: 1,
  friends: ["Water", "Dogs"]

  // Only change code above this line
};

/* 84. Accessing Object Properties with Dot Notation
Read in the property values of testObj using dot notation. Set the variable hatValue equal to the object's property hat and set the variable shirtValue equal to the object's property shirt. */

// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line

/* 85. Accessing Object Properties with Bracket Notation
Read the values of the properties an entree and the drink of testObj using bracket notation and assign them to entreeValue and drinkValue respectively. */

/* Setup const testObj = 
{
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
}; */

// Only change code below this line
const entreeValue = testObj["an entree"];   // Change this line
const drinkValue = testObj["the drink"];    // Change this line

/* 86. Accessing Object Properties with Variables
Set the playerNumber variable to 16. Then, use the variable to look up the player's name and assign it to player. */

// Setup
/*const testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};*/

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line

/* 87. Updating Object Properties
// Setup
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
// Only change code below this line

myDog.name = "Happy Coder"; */

/* 88. Add New Properties to a JavaScript Object
Add a bark property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation. */

/* const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark = "woof"; */

/* 89. Delete Properties from a JavaScript Object
Delete the tails property from myDog. You may use either dot or bracket notation.

// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line

delete myDog.tails;*/

/* 90. Using Objects for Lookups

Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

*/

