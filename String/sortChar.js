/*451. Sort Characters By Frequency
Given a string s, sort it in decreasing order based on the frequency of the characters. The frequency of a character is the number of times it appears in the string.
Return the sorted string. If there are multiple answers, return any of them.
Example 1:
Input: s = "tree"
Output: "eert"
Explanation: 'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:



Input: s = "cccaaa"
Output: "aaaccc"
Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input: s = "Aabb"
Output: "bbAa"
Explanation: "bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.*/

function sortChar(s){
//     let map = new Map()
//     let charArr = s.split("")
//     console.log(charArr);
    
//     charArr.forEach((data,index) => {
//         if(map.has(data)){
//             map.set(data,map.get(data)+1)
//         }else{
//             map.set(data, 1)
//         }
//     });
//    console.log(map.entries());
   
//    const mapArr = Array.from(map.entries())
//    mapArr.sort((a,b)=>b[1]-a[1])

//    var str = ""
//    for(const [key, value] of mapArr){
//     for(let i = 0; i < value; i++){
//         str = str + key
//     }
//    }
//    return str
const letterCount = {}
    s.split('').forEach((c) => letterCount[c] = (letterCount[c]??0)+1)
    return Object.entries(letterCount).sort((a, b) => b[1]-a[1]).map(pair => pair[0].repeat(pair[1])).join('')
}


let s = "Aabb"
console.log(sortChar(s));
