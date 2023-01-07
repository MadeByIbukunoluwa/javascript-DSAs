
function compareByLen(str1:string,str2:string) {
    return str2.length - str1.length
}




console.log(['hello','hi','thanks','welcome'].sort(compareByLen))


