


function sumRange(num:number):number {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(67));

//Writing Factorial iteratively

function factorial(num:number):number {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

console.log(factorial(5))


// Write factorial recursively


function factorialRec(num: number): number {
    if (num === 1) return 1 
    return num * factorial(num - 1)
}

console.log(factorialRec(15))
// a fucntion to collect oddValues from an array 

function collectOddValues(arr:number[]):number[] {
    let oddArray:number[] = []
    function helper(helperInput:number[]) {
        if (helperInput.length === 0 ) return 
        if (helperInput[0] % 2 !== 0) {
            oddArray.push(helperInput[0])
        }
        helper(helperInput.slice(1)) 
    }
     helper(arr)
    return oddArray
}

console.log(collectOddValues([1,32,4,5,4,6,5,7,7,7,86,3]))


//pure Recursion 
function collectOddValues1(arr:number[]) {
    let newarr = []
    if (arr.length === 0 ) return 
    if (arr[0] % 2 !== 0) {
        newarr.push(arr[0])
    }
    newarr = newarr.concat(collectOddValues(arr.slice(1)))
    return newarr
}

console.log(collectOddValues1([1, 32, 4, 5, 4, 6, 5, 7, 7, 7, 86, 3]));