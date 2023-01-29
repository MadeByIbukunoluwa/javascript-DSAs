// Write a function same which accepts two arrays . The function should return true if every value in the array has it's corresponding value squared in the second array

// My first solution

type numarr = number[]

export interface obj {
    [key:string]:number
}


function samets(arr1:numarr, arr2:numarr):boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }
  arr1 = arr1.sort((a, b) => a - b);
  arr2 = arr2.sort((a, b) => a - b);
  return arr1.every((el, index) => el ** 2 === arr2[index]);
}

console.log(samets([1, 2, 3, 2], [9, 1, 4, 4]));

// naive solution presented

function same1ts(arr1:numarr, arr2:numarr):boolean  {
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
  }
  return true;
}

console.log(same1ts([1, 2, 3, 2], [9, 1, 4, 4]));

function same2ts(arr1:numarr, arr2:numarr):boolean  {
  let frequencyCounter1:obj = {};
  let frequencyCounter2:obj = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
        
    if (!(Number(key) ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[Number(key) ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  } 
  return true;
}

console.log(same2ts([1, 2, 3, 2], [9, 1, 4, 4]));

console.log('hello')