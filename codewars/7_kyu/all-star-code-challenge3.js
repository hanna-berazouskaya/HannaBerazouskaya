/* DESCRIPTION:
This Kata is intended as a small challenge for my students

Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u"). */

// Option 1

var removeVowels = function(str){
  return str.replace(/[auioe]/gi,'')
}