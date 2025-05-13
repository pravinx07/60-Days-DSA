/*
14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

function longestCommonPrefix(str){
    let n = str.length
    if(str === null || n === 0) return "";
    let prefix = str[0]
    
    for(let i = 1; i < n; i++){
        while(str[i].indexOf(prefix) !== 0){
            prefix = prefix.slice(0, -1)
            if(prefix === "") return " ";
        }
    }
    return prefix
    
}

let str1 = ["alone"]

let str = ["flower","flow","flight"]
 let strs = ["dog","racecar","car"]
console.log(longestCommonPrefix(str));
console.log(longestCommonPrefix(strs));
console.log(longestCommonPrefix(str1))
