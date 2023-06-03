/* DESCRIPTION:
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0. */

//Option 1
var find_average = (array) => {  
  return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}