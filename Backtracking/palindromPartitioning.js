/*
131. Palindrome Partitioning

Given a string s,
partition s such that every substring of the partition is a palindrome. 
Return all possible palindrome partitioning of s.
Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
Example 2:

Input: s = "a"
Output: [["a"]]
*/

function palindromePartition(s){
    let res = [];

    let backtrack = (path, remainingStr) => {
        if(!remainingStr.length){
            res.push([...path])
            return ;
        }

        for(let i = 1; i <= remainingStr.length; i++){
            let choice = remainingStr.substring(0, i)
            if(!isPalindrom(choice)) continue;

            path.push(choice)
            backtrack(path, remainingStr.substring(i))
            path.pop()
        }
    }

    backtrack([],s);
    return res;
}

function isPalindrom(s){
    let i = 0; 
    let j = s.length - 1;

    while(i < j){
        if(s[i] != s[j]){
            return false
        }
        j--;
        i++
    }
    return true;
}


let s = "aab"
console.log(palindromePartition(s));
