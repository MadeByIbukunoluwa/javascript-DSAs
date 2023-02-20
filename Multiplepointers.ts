
//naive version 


//implementation 
// we are starting from the far left side and the far right side towards the middle 
// Write a function called sumZero which accepts a sorted array of integers . The function should find the first pair where the sum is 0 . Return the array that includes both the values that sum to zero or undefined if a pair does not exist .

//naive implementation
function sumZero(arr:number[]):[] | number[] {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1 ; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0 ) {
                return [arr[i],arr[j]]
            }
        }
    }
    return []
}


console.log(sumZero([-4,-3,-2,-1,0,1,2,5]))


// Implementation using multiple pointers pattern


function sumZero1(arr:number[]) {
    let left = 0 
    let right = arr.length - 1
    let sum = arr[left] + arr[right]
    while (left < right) {
        if (sum === 0 ) {
            return [arr[left],arr[right]];
        }
        else if (sum > 0 ) {
            right--
        }
        else left++
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



function countUniqueValues2(arr:number[]) {
    return new Set(arr).size
}
console.log(countUniqueValues2([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues2([]));
console.log(countUniqueValues2([-2, -1, -1, 0, 1]));


function countUniqueValues3(arr: number[]) {
    if (arr.length === 0 ) return 0
    let i = 0 
    for (let j = 1; j < arr.length;j++) {
        if(arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }
    return i + 1 
}


console.log(countUniqueValues3([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues3([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues3([]));
console.log(countUniqueValues3([-2, -1, -1, 0, 1]));



//Question :write a program that swaps alternate digits of a given integer 'a'

// If the total number of digits in the integer 'n' is even , swap the first and second digit, the third and fourth digit, the fifth and sixth digit, and so on.
    // - for example , in the intger 564783, there are a toal number of 6 digits, Here, the number 6 is an even number. The new intgere after swapping this integer will be 657438.

    // If the total number of digits in the intger 'n' is odd , then the first digit remains unchanged, and swapping begins from the second digit onwards.
        // - For example,in the integer 512364783, there are a total number of 9 digits. Here, the number 9 is an odd number. The new integer after swapping this integer will be 521637438. In this case, the first digit remains unchanged , and the swap begins froms the second digit



function swapDigits(num:number):number{
    let newnum = num.toString().split('')
    let digitLength = newnum.length 
    let p1,p2 
    if (digitLength % 2 === 0) {
         p1 = 0;
         p2 = 1 
    }
    else {
         p1 = 1 
         p2 = 2 
    }

        while(p2 < digitLength) {
            // Another swapping method
        //    [newnum[p1], newnum[p2]] = [newnum[p2], newnum[p1]];
            let temp = newnum[p1]
            newnum[p1] = newnum[p2]
            newnum[p2] = temp 
           p1 += 2 
           p2 += 2
    }
    return Number(newnum.join(""))
}


console.log(swapDigits(1233638743484))