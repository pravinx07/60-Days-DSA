/**
 check the given string is palindrome or not if it is return true else false
 */

 function isPalindrome(i,s){
    let n = s.length
    if(i >= n/2 ) return true
    if(s[i] !== s[n-i-1]){
        return false
    }

    return isPalindrome(i+1,s)
        
 }

 let s = "MADAM"
 console.log(isPalindrome(0,s));
 