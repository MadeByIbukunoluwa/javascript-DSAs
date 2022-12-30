"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    let frequencyCounterA = {};
    let frequencyCounterB = {};
    for (const val of str1) {
        frequencyCounterA[val] = (frequencyCounterA[val] || 0) + 1;
    }
    for (const val of str2) {
        frequencyCounterB[val] = (frequencyCounterB[val] || 0) + 1;
    }
    console.log(frequencyCounterA, frequencyCounterB);
    for (const key in frequencyCounterA) {
        if (!(key in frequencyCounterB)) {
            return false;
        }
        if (!(frequencyCounterA[key] === frequencyCounterB[key])) {
            return false;
        }
    }
    return true;
}
console.log(validAnagram('cinema', 'iceman'));
console.log(validAnagram('raccecar', 'rracecar'));
