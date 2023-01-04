
//failed attempt 
// function binarySearch(arr:number[],val:number):number {
//     let start = 0
//     let end = arr.length - 1 

//     while(start <= end ) {
//        let middle = Math.floor((start + end)/2)
//         if (arr[middle] < val) {
//             start = middle + 1 
//         }
//         else if (arr[middle] > val) {
//             end = middle - 1
//         }
//         return middle 
//     }
//     return -1 
// }

// console.log(binarySearch([5, 8, 1, 100, 12, 3, 12], 12));  

function binarySearch(arr:number[],val:number):number {
    let start = 0
    let end = arr.length - 1 

    let middle = Math.floor((start + end)/2)
    while(arr[middle] !== val && start <= end ) {
         if (val < arr[middle]) {
            end = middle - 1
        }
        else {start = middle + 1 }
        middle = Math.floor((start + end) / 2);
    }

    return arr[middle] === val ? middle : -1 
}

console.log(binarySearch([5,6,7,7,9,9,12], 12));  



