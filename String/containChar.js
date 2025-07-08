/*2942. Find Words Containing Character

You are given a 0-indexed array of strings words and a character x.

Return an array of indices representing the words that contain the character x.

Note that the returned array may be in any order.

 

Example 1:

Input: words = ["leet","code"], x = "e"
Output: [0,1]
Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1. */


function isCon(words, x) {
    let arr = []
 for(let i = 0; i < words.length; i++){
    if(words[i].includes(x)) {
        arr.push(i)
    }
 }
 return arr
}

const str = ["abc","bcd","aaaa","cbc"]
let x = "z"
// console.log(str.includes("a"));
console.log(isCon(str, x));

