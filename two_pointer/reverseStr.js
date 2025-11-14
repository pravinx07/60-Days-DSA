/*
344. Reverse String
Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

*/

var reverseString = function(s) {
    const len=s.length;
    let j=0;
    let i=len-1;
    let temp="";
    while(j<i){
        temp=s[i];
        s[i--]= s[j];
        s[j++]=temp;
    }
    return s;
};

let s = ["h","e","l","l","o"]
console.log(reverseString(s));