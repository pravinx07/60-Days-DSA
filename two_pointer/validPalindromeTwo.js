/*
680. Valid Palindrome II

Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false
 

Constraints:

1 <= s.length <= 105

*/

function palindromeHelper(i,j,s){
    while(i <= j){
        if(s.charAt(i) !== s.charAt(j)){
            return false
        }
        i++
        j--
    }
    return true;
}


function isPalindromeTwo(s){
 let i = 0;
 let j = s.length - 1;

 while(i < j){
    if(s.charAt(i) !== s.charAt(j)){
        return palindromeHelper(i + 1, j , s) || palindromeHelper(i, j - 1, s)
    }
    else{
        i++;
        j--;
    }
 }
 return true
}

let s = "abc";
console.log(isPalindromeTwo(s));