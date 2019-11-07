// Javascript Homework
// Due next Friday Morning
// -----------------------------------------------------------------------------------
// PART I
//
// Create a single Javascript file called packet.js to answer these questions.
// Please put the question itself as a comment above each answer.
// -----------------------------------------------------------------------------------
//
// 1. Fibonacci
// Define function: fib(n)
// Return the nth number in the fibonacci sequence.
//fib(1) = 1; fib(2) = 1;
function fib(n) {
    if (typeof n !== 'number') {
        return console.log("input is not number.");
    }
    let prev = 1;
    let prevprev = 1;
    let cur = 1;
    for(let i = 2; i < n; i++) {
        cur = prev + prevprev;
        prevprev = prev;
        prev = cur;
        //console.log(cur);
    }
    return cur;
}

// 2. Bubble Sort
// Define function: bubbleSort(numArray)
// Use the bubble sort algorithm to sort the array.
// Return the sorted array.
function bubbleSort(inputArray) {
    if (Array.isArray(inputArray)) {
        numArray = Array.from(inputArray);
        let limit;
        let temp;

        for (let i = 0; i < numArray.length-1; i++) {
            limit = numArray.length-i;
            for (let ii = 0; ii < limit-1; ii++) {
                if (numArray[ii] > numArray[ii+1]) {
                    temp = numArray[ii+1];
                    numArray[ii+1] = numArray[ii];
                    numArray[ii] = temp;
                }
            }
        }
        return numArray;
    }
    console.log("input is not array.")
}


// 3. Reverse String
// Define function: reverseStr(someStr)
// Reverse and return the String.
function reverseStr(someStr) {
    strArray = Array.from(someStr);
    result = '';
    for (let i = 0; i < strArray.length; i++) {
        result += strArray[strArray.length-1-i];
    }
    return result;
}



// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
function factorial(n) {
    if (typeof n === 'number') {
        //console.log('is number');
        return (n>0)?n*fib(n-1):1;
    }
    console.log("input is not number.")
}


// 5. Substring
// Define function substring(someStr, length, offset)
// Return the substring contained between offset and (offset + length) inclusively.
// If incorrect input is entered, use the alert function and describe why the input was incorrect.
function substring(someStr, length, offset) {
    if (length === 0) {
        return '';
    }
    if (offset < 0 || offset > someStr.length || offset+length > someStr.length) {
        alert(`Index out of bound: cannot access characters outside of input string.`);
        return;
    }
    let strArray = Array.from(someStr);
    let result = '';
    for(let i = 0; i < length; i++) {
        //console.log(strArray[i+offset]);
        result += strArray[i+offset];
    }
    return result;
}


// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
function isEven(someNum) {
    if (typeof n !== 'number') {
        return console.log("input is not number.");
    }
    return (someNum/2).toString().includes('.');
}


// 7. Palindrome
// Define function isPalindrome(someStr)
// Return true if someStr is a palindrome, otherwise return false
function isPalindrome(someStr) {
    return (someStr === reverseStr(someStr));
}


// 8. Shapes
// Define function: printShape(shape, height, character)
// shape is a String and is either "Square", "Triangle", "Diamond".
// height is a Number and is the height of the shape. Assume the number is odd.
// character is a String that represents the contents of the shape. Assume this String contains just one character.
// Use a switch statement to determine which shape was passed in.
// Use the console.log function to print the desired shape.
// Example for printShape("Square", 3, "%");
// %%%
// %%%
// %%%
// Example for printShape("Triangle", 3, "$");
// $
// $$
// $$$
// Example for printShape("Diamond", 5, "*");
//   *
//  ***
// *****
//  ***
//   *


// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.


// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.


// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.


// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	let john = new Person("John", 30);


// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	let john = getPerson("John", 30);

