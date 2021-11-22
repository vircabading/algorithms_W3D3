// ****************************************************

/* 
Book Index
Given an array of ints representing page numbers
return a string with the page numbers formatted as page ranges when the nums span a consecutive range
*/

const two_nums1 = [1, 13, 14, 15, 37, 38, 70];
const two_expected1 = "1, 13-15, 37-38, 70";

const two_nums2 = [1, 13, 14, 15, 16,17,18, 37, 38, 70, 71, 72, 73, 74, 75];
const two_expected2 = "1, 13-18, 37-38, 70-75";

/**
 * Turns the given arr of page numbers into a string of comma hyphenated
 * page ranges.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums Page numbers.
 * @returns {string} The given page numbers as comma separated hyphenated
 *    page ranges.
 */

// 2.1 store where the range starts (index)
// 2.2      if range breaks, then subtract the difference in the indexes
// if the array at the idx+1 = current idx value+1 then store the current index 

// ////////// PSEUDO CODE /////////////////////////
// 1. Define the function with parameters 1. array of numbers 
// 2. output string
// 3. in a range boolean
//     current dash value
// 3. loop through the array
// 4. if not in range then 
//     4.05 if current value is NOT consecutive to the next value, then 
//     4.1      push that index to the output
//     5. if the current value is consecutive to the next value
//     5.1      push the indix to the output
//     5.2      add a dash seperator
//     5.3      say we are in range (true)
//     5.4      store value of of next in range

// 6 if in range
//     6.1 if idx +1 is consecutive to dash value
//         6.1 dash value = value of idx+1
//     7. otherwise
//         store value of idx to output

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
                output += nums[i];                   //  Push index to output
                output += "-"                       //  add a dash seperator to output
                in_range = true;                    //  note the we are in range
                current_dash_value = nums[i+1];     //  store the value of the next in range
            }
        } 
        else {                                              // If In Range
            if ( nums[i+1] == (current_dash_value+1) ) {    //      If idx+1 is consecutive to fdash value
                current_dash_value = nums[i+1];             //      dash value = value of idx+1
            }
            else {
                output += nums[i] + " ";
                in_range = false;
            }
        }
    }
    return output;
}

console.log("Running Twu Nums1:", bookIndex(two_nums1));
console.log("Running Twu Nums2:", bookIndex(two_nums2));
