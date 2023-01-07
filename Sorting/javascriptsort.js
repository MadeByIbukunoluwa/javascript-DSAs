"use strict";
function compareByLen(str1, str2) {
    return str2.length - str1.length;
}
console.log(['hello', 'hi', 'thanks', 'welcome'].sort(compareByLen));
