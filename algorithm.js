/////////////////////////////////////////////////
// Algorithm
// By:
// Date:
/////////////////////////////////////////////////

import { print_desc } from "./module.js";
import { print_ln } from "./module.js";

// /* 
//   Given an arr and a separator string, output a string of every item in the array separated by the separator.
  
//   No trailing separator at the end
//   Default the separator to a comma with a space after it if no separator is provided
// */

// const arr1 = [1, 2, 3];
// const separator1 = ", ";
// const expected1 = "1, 2, 3";

// const arr2 = [1, 2, 3];
// const separator2 = "-";
// const expected2 = "1-2-3";

// const arr3 = [1, 2, 3];
// const separator3 = " - ";
// const expected3 = "1 - 2 - 3";

// // edge case
// const arr4 = [1];
// const separator4 = ", ";
// const expected4 = "1";

// const arr5 = [];
// const separator5 = ", ";
// const expected5 = "";

// /**
//  * Converts the given array into a string of items separated by the given separator.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<string|number|boolean>} arr The items to be joined as a string.
//  * @param {string} separator To separate each item of the given arr.
//  * @returns {string} The given array items as a string separated by the given separator.
//  */

// //// Pseudo Code ////////////
// 1. define the function with 2 parameters 1. array 2. seperator (string)
// 2. make an empty output string
// 3. loop through the array
    // 4. take element in array add to output string
    // 5. add the seperator after each element of the array
    // 6. EXCEPT for the LAST element
// 7. return the output

function join (arr, seperator) {
    var output = "";

    for (var idx=0; idx < arr.length; idx++) {
        output += arr[idx];                         // take element and output to string
        if (idx != (arr.length-1)) {                // if not last element
            output += seperator;                    //      add seperator
        }
    }
    return output;
}

print_desc("first function");
console.log(join ([1,3,6,8,9,5,8], "-"));