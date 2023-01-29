"use strict";
//naive version 
//implementation 
// we are starting from the far left side and the far right side towards the middle 
// Write a function called sumZero which accepts a sorted array of integers . The function should find the first pair where the sum is 0 . Return the array that includes both the values that sum to zero or undefined if a pair does not exist .
//naive implementation
function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
    return [];
}
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
// Implementation using multiple pointers pattern
function sumZero1(arr) {
    let left = 0;
    let right = arr.length - 1;
    let sum = arr[left] + arr[right];
    while (left < right) {
        if (sum === 0) {
            return [arr[left], arr[right]];
        }
        else if (sum > 0) {
            right--;
        }
        else
            left++;
    }
}
console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
// Multiple pointers count unique values 
// Implement a fucntion called countUniqueValues , which accepts a sorted array , and counts the unique values in the array.There can be negative numbers in the array, but it will always be sorted 
//Naive solution
// function countUniqueValues(arr:number[]):number {
//     let uniqueCount = 0 
//     if(arr.length === 0 ) return 0 
//     for (let i = 0;i < arr.length;i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             if (arr[i] !== arr[j]) {
//                 uniqueCount++   
//             }
//         }
//     }
//     return uniqueCount
// }   
// console.log(countUniqueValues1([1,1,1,1,1,2]))
// console.log(countUniqueValues1([1,2,3,4,4,4,7,7,12,12,13]))
// console.log(countUniqueValues1([]))
// console.log(countUniqueValues1([-2,-1,-1,0,1]))
// Failed Attempt 
// Attention! This code does not work
// function countUniqueValues1(arr:number[]) {
//     let left = 0 
//     let right = 1 
//     let pair = (arr[left] === arr[right])
//     // while (left < right) {
//     while (right < arr.length) {
//         // if (pair) {
//         //     right++
//         // }
//         if (!pair) {
//              left++
//              arr[left] = arr[right]; 
//         }
//         // else right++
//          right++;
//     }
// //    return arr.slice(0,left - 1).length
//         return left + 1 
// }   
// swap arr[left + 1] with arr[right]
// we are just putting the value of arr[right] in arr[left + 1 ] 
// console.log(countUniqueValues1([1, 1, 1, 1, 1, 2]));
// console.log(countUniqueValues1([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
// console.log(countUniqueValues1([]));
// console.log(countUniqueValues1([-2, -1, -1, 0, 1]));
function countUniqueValues2(arr) {
    return new Set(arr).size;
}
console.log(countUniqueValues2([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues2([]));
console.log(countUniqueValues2([-2, -1, -1, 0, 1]));
function countUniqueValues3(arr) {
    if (arr.length === 0)
        return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}
console.log(countUniqueValues3([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues3([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues3([]));
console.log(countUniqueValues3([-2, -1, -1, 0, 1]));
