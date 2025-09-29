var characterReplacement = function(s, k) {
    let i = 0; 
    let j = 0;
    let map = Array(26).fill(0);
    let maxCount = 0;   // keeps track of most frequent char in window
    let maxWindow = 0;

    while (j < s.length) {
        let idx = s.charCodeAt(j) - 65;
        map[idx]++;
        maxCount = Math.max(maxCount, map[idx]);  // update most freq char count

        // shrink window if invalid
        while ((j - i + 1) - maxCount > k) {
            map[s.charCodeAt(i) - 65]--;
            i++;
        }

        maxWindow = Math.max(maxWindow, j - i + 1);
        j++;
    }

    return maxWindow;
};


let s = "ABAB"
let k = 2;
let s2 = "AABABBBA";
let k2 = 1;

console.log(characterReplacement(s,k));
console.log(characterReplacement(s2,k2));
