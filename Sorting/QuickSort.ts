


function pivot (arr:number[],start = 0 ,end= arr.length - 1) {
    function swap (arr:number[],idx1:number,idx2:number) {
        [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]
    }
    let pivot = arr[start]
    let swapIdx = start 
    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++
            swap(arr,swapIdx,i)
        }
    }
    swap(arr,start,swapIdx)
    return swapIdx
}

function quickSort(arr: number[],left = 0 , right = arr.length - 1 ) {
    if (left < right) {
        let pivotIndex = pivot (arr,left,right)
        //left
        quickSort(arr,left,pivotIndex - 1)
        //right
        quickSort(arr,pivotIndex + 1 , right)
    }
    return arr
}
console.log(quickSort([4,6,9,1,2,5]))