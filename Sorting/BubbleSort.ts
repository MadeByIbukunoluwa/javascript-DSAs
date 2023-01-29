

//swapping function 

function swap (arr:number[],idx1:number,idx2:number) {
    let temp = arr[idx1]
    arr[idx1] = arr[idx2] 
    arr[idx2] = temp
}

function swap1(arr: number[], idx1: number, idx2: number) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// straight forward implemnentation 
function BubbleSort(arr:number[]) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > arr[j+1]) {
            swap(arr,j,j+1)
        }
      }
    }
    return arr
}

console.log(BubbleSort([1,4,5,3,2,2,9]))

//optimized version 
// This way , we don't have to do iterations for parts we have already sorted 
function BubbleSort1(arr:number[]) {
    let noSwaps:boolean
    for (let i = arr.length; i > 0; i--) {
        noSwaps = true 
      for (let j = 0; j < i - 1; j++) {
        if (arr[j] > arr[j+1]) {
            swap(arr,j,j+1)
            noSwaps = false 
        }
        
      }
    }
    return arr
}

console.log(BubbleSort1([1,4,5,3,2,2,9])) 



//Most sorting algorthms involve some swapping functionality (swapping to put them in order)
