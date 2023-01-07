"use strict";
//Failed Attempt 
// function SelectionSort(arr: number[]): number[] {
//   for (let i = 0; i < arr.slice(i, arr.length).length; i++) {
//     var lowest = i;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[lowest]) {
//         lowest = j;
//       }
//     }
//     let temp = arr[i];
//     arr[i] = arr[lowest];
//     arr[lowest] = temp;
//   }
//   return arr;
// }
// console.log(SelectionSort([1, 4, 5, 8, 56, 3]));
// If you want to minimize the number of sorts you want to do
function SelectionSort1(arr) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[lowest] > arr[j]) {
                lowest = j;
            }
        }
        if (i !== lowest)
            swap(arr, i, lowest);
    }
    return arr;
}
console.log(SelectionSort1([0, 2, 34, 22, 10, 19, 17]));
