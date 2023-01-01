


  // Write a function called maxSubArraySum which accepts an array of integers and a number called n . The function should calculate the maximum sum of n consecutive elements in the array. 
    //naive implementation
  function maxSubArraySum(arr:number[],num:number):number | null {
    let max = -Infinity
    // If we have an array that are all negative numbers , our biggest sum will still be negative
    if (arr.length === 0 || num > arr.length) return null 
    for (let i = 0; i < arr.length - num + 1; i++) {
        // we make te loop this hort so that that can be the last place we will start our sum 
        let temp = 0;
        for (let j = 0 ; j < num; j++) {
            temp += arr[i + j]
        }   
        if (temp > max) {
            max = temp
        }
    }
    return max
  }


  console.log(maxSubArraySum([1,2,5,2,8,1,5,],2))
  console.log(maxSubArraySum([1,2,5,2,8,1,5,7,9,0,4,8,5,7,6,4,3,2,2,2,2,2,6,6,4,2,2,2,2,4,5,3,21,],2))
  console.log(maxSubArraySum([4,2,1,6],4))
  console.log(maxSubArraySum([4,2,1,6,2],1))
  console.log(maxSubArraySum([],4))  

  //sliding window implementation
  