// Write a fucntion that takes in a string and returns the counts of each character in the string 


function charCount(str) {
    let result = {}
    for (let i = 0 ; i < str.length; i++) {
        let char = str[i].toLowerCase()
        if (result[char] > 0) {
            result[char]++
        }
        else result[char] = 1
    }
    return result 
    //make object to return at end 
    // lopp over string fo reach character
}
console.log(charCount('yrurieweii'))


// First refactored version 

function charCount2(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
   if (/[a-z0-9]/.test(char)) {
     if (result[char] > 0) {
       result[char]++;
     } else result[char] = 1;
   }
  }
  return result;
  //make object to return at end
  // loop over string fo reach character
}
console.log(charCount2("yrurieweii"));

//Second refactored version 



function charCount3(str) {
  let result = {};
  for (char of str) {
     char = char.toLowerCase();

    if (/[a-z0-9]/.test(char)) {
     result[char] = ++result[char] || 1 
    }
  }
  return result;
  //make object to return at end
  // loop over string fo reach character
}
console.log(charCount3("yrurieweii"));


// FInal verison
//Checking if the character is alphanumeric through charcodes is more efficent than checking through regular expresssions 


// alphanumeric function 

function isAlphaNumeric (char) {
    var code = char.charCodeAt(0)
    if (!(code > 47 && code < 58) && // numeric (0-9)
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123 )) { // lower alpha (a-z)
            return false
    }
    return true 
}


function charCount4(str) {
  let obj = {};
  for (let char of str) {
      
      if (isAlphaNumeric(char)) {
        char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
  //make object to return at end
  // loop over string fo reach character
}
console.log(charCount4("yrurieweii"));

