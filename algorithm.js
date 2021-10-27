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
// 1. define the function with 2 parameters 1. array 2. seperator (string)
// 2. make an empty output string
// 3. loop through the array
// 4. take element in array add to out put string
// 5. add the seperator after each element of the array
// 6. EXCEPT for the LAST element
// 7/ return the output

function join (arr, seperator) {


    var output = "";

    for (var idx=0; idx < arr.length; idx++) {
        output += arr[idx];
        // console.log(output);
        if (idx != (arr.length-1)) {
            output += seperator;
            // console.log(output);
        }
    }

    return output;
}

print_desc("first function");
console.log(join ([1,3,6,8,9,5,8], "-"));



// function join(arr, separator) {}

// // ****************************************************

// /* 
// Book Index
// Given an array of ints representing page numbers
// return a string with the page numbers formatted as page ranges when the nums span a consecutive range
// */

// const two_nums1 = [1, 13, 14, 15, 37, 38, 70];
// const two_expected1 = "1, 13-15, 37-38, 70";

// const two_nums2 = [1, 13, 14, 15, 16,17,18, 37, 38, 70, 71, 72, 73, 74, 75];
// const two_expected2 = "1, 13-18, 37-38, 70-75";

// /**
//  * Turns the given arr of page numbers into a string of comma hyphenated
//  * page ranges.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<number>} nums Page numbers.
//  * @returns {string} The given page numbers as comma separated hyphenated
//  *    page ranges.
//  */

// 2.1 store where the range starts (index)
// 2.2      if range breaks, then subtract the difference in the indexes
// if the array at the idx+1 = current idx value+1 then store the current index 

// ////////// PSEUDO CODE /////////////////////////
// 1. Define the function with parameters 1. array of numbers 
// 2. output string
// 3. in a range boolean
//     current dash value
// 3. loop through the array


// if not in range then do 4
    // 4. if current value is NOT consecutive to the next value, then 
    // 4.1      push that index to the output
    // 5. if the current value is consecutive to the next value
    // 5.1      push the indix to the output
    // 5.2      add a dash seperator
    // 5.3      say we are in range (true)
    // 5.4      store value of of next in range

// if in range
    // 6. if idx +1 is consecutive to dash value
        // 6.1 dash value = value of idx+1
    // 7. otherwise
        // store value of idx to output

function bookIndex(nums) {
    var output = "";
    var in_range = false;
    var current_dash_value = 0;

    for (var i = 0; i < nums.length; i++) {
        if (!in_range) {
            if ( nums[i+1] != nums[i] + 1) {        // if not consecutive
                output += nums[i] + ", ";
            }
            if ( nums[i+1] == nums[i] + 1) {        // if consecutive
                
            }
        }
    }
}