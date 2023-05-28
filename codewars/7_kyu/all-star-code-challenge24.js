/* Create 2 functions:

hypotenuse(), which takes 2 integer arguments, the length of two regular sides of a right triangle, and returns the length of the missing side, the hypotenuse, as a number.

leg(), which takes 2 integer arguments, the first being the length of the hypotenuse, and the second being the length of a regular side of a right triangle. This function should return the length of the missing regular side, as a number.

hypotenuse(3,4) // => 5
leg(5,3) // => 4 */

// Option 1

function hypotenuse(a, b){
  return Math.sqrt(a*a+b*b)
}

function leg(c, a){
return Math.sqrt(c*c-a*a)
}