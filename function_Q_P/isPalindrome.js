// 1# Palindrome Checker Function
// Approach 1 using iterating through the string

/**
 * Iterate over the string from forward and backward direction
      Check if the character match
 * 
 */

function isPalindrome(str) {
  let j = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[j]) {
      return false;
    }
    j--;
  }
  return true;
}

// console.log( isPalindrome("tiger"));

/* 
Approach 2: Using for loop-II

*/

/* Initialize a variable and store the reverse of the value in it using for loop
    Compare the original value with the reversed value
    If both values are equal return true else return false
*/

//racecar
//0123456
function checkPali(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev = rev + str[i];
  }

  if (rev == str) {
    return true;
  } else {
    return false;
  }
}

// console.log( checkPali("racecar"));

/* 
    Approach 3: Using split(), reverse() and join() methods
    Use inbuilt string methods like split() to split the string into characters array
    Reverse the array using reverse() method
    Join the array into a string using join() method
    Store this value inside another variable
    Compare the values and return true if both are equal

*/

function check2Pali(str) {
  let rev = str.split("").reverse().join("");
  if (rev == str) {
    return true;
  } else {
    return false;
  }
}

console.log(check2Pali("Heelo"));
