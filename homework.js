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
    for (let i = 2; i < n; i++) {
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

        for (let i = 0; i < numArray.length - 1; i++) {
            limit = numArray.length - i;
            for (let ii = 0; ii < limit - 1; ii++) {
                if (numArray[ii] > numArray[ii + 1]) {
                    temp = numArray[ii + 1];
                    numArray[ii + 1] = numArray[ii];
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
        result += strArray[strArray.length - 1 - i];
    }
    return result;
}



// 4. Factorial
// Define function: factorial(someNum)
// Use recursion to compute and return the factorial of someNum.
function factorial(n) {
    if (typeof n === 'number') {
        //console.log('is number');
        return (n > 0) ? n * fib(n - 1) : 1;
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
    if (offset < 0 || offset > someStr.length || offset + length > someStr.length) {
        alert(`Index out of bound: cannot access characters outside of input string.`);
        return;
    }
    let strArray = Array.from(someStr);
    let result = '';
    for (let i = 0; i < length; i++) {
        //console.log(strArray[i+offset]);
        result += strArray[i + offset];
    }
    return result;
}


// 6. Even Number
// Define function: isEven(someNum)
// Return true if even, false if odd.
// Do not use % operator.
function isEven(someNum) {
    if (typeof someNum !== 'number') {
        return console.log("input is not number.");
    }
    return !(someNum / 2).toString().includes('.');
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
function printShape(shape, height, character) {
    // -- checks for invalid inputs -- //
    if (typeof height !== 'number') {
        return console.log("input height is not number.");
    }
    if (isEven(height)) {
        return console.log("please, input odd number for the height.")
    }
    if (character.length !== 1) {
        return console.log("pleasem input 1 character for character input.")
    }

    // -- checks for shape keyword -- //
    if (shape === 'Square') {
        pSquare(height, character);
    }

    if (shape === "Triangle") {
        pTri(height, character);
    }

    if (shape === "Diamond") {
        pDia(height, character);
    }

    // -- input shape does not match keywords -- //
    return console.log("Input shape does not match.")
}

// for "Square"
function pSquare(height, character) {
    let resultStr = '';
    for (let i = 0; i < height; i++) {
        for (let ii = 0; ii < height; ii++) {
            resultStr += character;
        }
        resultStr += '\n';
    }
    console.log(resultStr);
}
// for "Triangle"
function pTri(height, character) {
    let resultStr = '';
    for (let i = 0; i < height; i++) {
        for (let ii = 0; ii < i + 1; ii++) {
            resultStr += character;
        }
        resultStr += '\n';
    }
    console.log(resultStr);
}
// for "Diamond"
function pDia(height, character) {
    let resultStr = '';
    for (let i = 0; i < height; i++) {
        resultStr += diaHelper(i + 1, height, character);
        resultStr += '\n';
    }
    console.log(resultStr);
}
// prints a row for diamond
function diaHelper(row, width, character) {
    if (row > Math.ceil(width / 2)) {
        row = width - row + 1;
    }

    result = ''
    for (let i = 0; i < row * 2 - 1; i++) {
        result += character;
    }
    while (result.length < width) {
        result = ' ' + result + ' ';
    }
    return result;
}

// 9. Object literal
// Define function traverseObject(someObj)
// Print every property and it's value.
function traverseObject(someObj) {
    let entryArray = Object.entries(someObj);
    entryArray.forEach(entry => {console.log(entry[0] + ': ' + entry[1])});
}


// 10. Delete Element
// Define function deleteElement(someArr)
// Print length
// Delete the third element in the array.
// Print length
// The lengths should be the same.
function deleteThird(someArr) {
    console.log(someArr.length);
    someArr[2] = undefined;
    console.log(someArr.length);
}

// 11. Splice Element
// Define function spliceElement(someArr)
// Print length
// Splice the third element in the array.
// Print length
// The lengths should be one less than the original length.
function spliceThird(someArr) {
    console.log(someArr.length);
    if (someArr.length < 4) {
        return console.log("Array length is too short.");
    }
    for (let i = 3; i < someArr.length; i++) {
        someArr[i-1] = someArr[i];
    }
    someArr.length = someArr.length-1;
    console.log(someArr.length);
}

// 12. Defining an object using a constructor
// Define a function Person(name, age)
// The following line should set a Person object to the variable john:
// 	let john = new Person("John", 30);
function Person (name, age) {
    this.name = name;
    this.age = age;
}



// 13. Defining an object using an object literal
// Define function getPerson(name, age)
// The following line should set a Person object to the variable john:
// 	let john = getPerson("John", 30);
function getPerson (name, age) {
    return {'name':name, 'age':age}
}

