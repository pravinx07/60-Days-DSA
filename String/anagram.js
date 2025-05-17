/*
242. Valid Anagram 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.
Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

*/
/*
function isAnagram(s, t) {
  if (s.length !== t.length) return false;

  const map = new Map();

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of t) {
    if (!map.has(char)) return false;
    map.set(char, map.get(char) - 1);
    if (map.get(char) < 0) return false;
  }

  return true;
}

let s = "anagram",
  t = "nagaram";
let s1 = "rat",
  t1 = "car";
console.log(isAnagram(s, t));
console.log(isAnagram(s1, t1));
*/

const isAnagram = (s, t) => {
  if (s.length !== t.length) return false;

  const count = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97]++;

    count[t.charCodeAt(i) - 97]--;
  }


  return count.every((character) => character === 0);
};

let s = "anagram",
  t = "nagaram";
let s1 = "rat",
  t1 = "car";
console.log(isAnagram(s, t));
console.log(isAnagram(s1, t1));
