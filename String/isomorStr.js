/*205. Isomorphic Strings
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.
Example 1:

Input: s = "egg", t = "add"

Output: true

Explanation:

The strings s and t can be made identical by:

Mapping 'e' to 'a'.
Mapping 'g' to 'd'.
Example 2:

Input: s = "foo", t = "bar"

Output: false

Explanation:

The strings s and t can not be made identical as 'o' needs to be mapped to both 'a' and 'r'.

Example 3:

Input: s = "paper", t = "title"

Output: true */


function isIsoMorphic(s,t){
    let mapS = new Map()
    let mapT = new Map()
    for(let i = 0; i < s.length; ++i){
        if(mapS[s[i]] !== mapT[t[i]]) return false
        mapS[s[i]] =  i + 1
        mapT[t[i]] =  i + 1
    }
    return true
}

console.log(isIsoMorphic("egg","add"));
console.log(isIsoMorphic("foo","bar"));
console.log(isIsoMorphic("paper","title"));



var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;

    const mapS = new Array(256).fill(-1);
    const mapT = new Array(256).fill(-1);

    for (let i = 0; i < s.length; i++) {
        const charS = s.charCodeAt(i);
        const charT = t.charCodeAt(i);

        if (mapS[charS] === -1 && mapT[charT] === -1) {
            mapS[charS] = charT;
            mapT[charT] = charS;
        } else if (mapS[charS] !== charT || mapT[charT] !== charS) {
            return false;
        }
    }

    return true;
};