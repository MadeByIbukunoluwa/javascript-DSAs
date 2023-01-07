


 
function InsertionSort(arr:number[]) {
    for (let i = 1 ; i < arr.length; i++) {
        let currentVal = arr[i]
        for (var j = i - 1 ; j >= 0 && arr[j] > currentVal; i--) {
            arr[j + 1 ] = arr[j]
        }
        arr[j + 1] = currentVal;
        // Normally this variable can't be accesible in this scope, but we used var so it is hoisted
    }
    return arr
}

console.log(InsertionSort([2,1,9,7,76]))


