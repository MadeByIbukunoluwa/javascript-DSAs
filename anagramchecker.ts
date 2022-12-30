

// Given two strings, write a function to determine if the second string is an anagran of the first. An anagram of the first. An anagram is a word, phrase or name formed by rearranging the letters of another , such as cinema , formed by iceman 
import { obj } from "./Frequencycounter"
function validAnagram(str1:string,str2:string):boolean {
    if (str1.length !== str2.length) {
        return false 
    }
    let frequencyCounterA:obj = {}
    let frequencyCounterB:obj = {} 
    for (const val of str1) {
        frequencyCounterA[val] = (frequencyCounterA[val] || 0) + 1 
    }
    for (const val of str2) {
        frequencyCounterB[val] = (frequencyCounterB[val] || 0) + 1 
    }
    console.log(frequencyCounterA,frequencyCounterB)
for (const key in frequencyCounterA) {
    if(!(key in frequencyCounterB)) {
        return false 
    }
    if (!(frequencyCounterA[key] === frequencyCounterB[key])) {
        return false
    }   
}
return true 
}   
console.log(validAnagram('cinema','iceman',))
console.log(validAnagram('raccecar','rracecar'))