// 771. Jewels and Stones
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".
// Example 1:

// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3
// Example 2:

// Input: jewels = "z", stones = "ZZ"
// Output: 0
 

function countJewels(j ,s){
    // const js = j.split("")
    // const ss = s.split("")
    let count = 0
    let set = new Set()

    // // console.log(ss.includes(j));
    // // 
    // for(let i = 0; i < ss.length; i++)
    // {
    //     for(let j = 0; j < js.length; j++){
    //       if(ss[i].includes(js[j])) count++
    //     }
    // }
    // return  count

    for(let i = 0; i < j.length; i++){
        set.add(j[i])
    }

    for(let j = 0; j < s.length; j++){
        if(set.has(s[j])) count++
    }
    return count
}


const jewels =  "aA"
const stones = "aAAbbbb"

console.log(countJewels(jewels, stones));
