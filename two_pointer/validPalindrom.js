/*
125. Valid Palindrome
Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/


function isPalindrom(s){
let l = 0, r = s.length - 1;

    while(l < r){
        while(l < r && ! /[a-z0-9]/i.test(s[l]) ){
            l++
        }

        while(l < r && ! /[a-z0-9]/i.test(s[r]) ){
            r--
        }

        if(s[l].toLowerCase() !== s[r].toLowerCase()){
            return false;
        }
        l++;
        r--
    }

    return true;
}

let str = "A man, a plan, a canal: Panama"
console.log(isPalindrom(str));