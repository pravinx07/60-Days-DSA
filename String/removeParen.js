/*
1021. Remove Outermost Parentheses

A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.
Example 1:

Input: s = "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
Example 2:

Input: s = "(()())(())(()(()))"
Output: "()()()()(())"
Explanation: 
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
Example 3:

Input: s = "()()"
Output: ""
Explanation: 
The input string is "()()", with primitive decomposition "()" + "()".
After removing outer parentheses of each part, this is "" + "" = "".
 
 */

function removeParenthesis(str){
    let n = str.length;
    let res = ""
    let parenthesisCount = 0

    for(let i = 0; i < n; i++){
        if(str[i] == '(') parenthesisCount++
            if(parenthesisCount > 1){
                res += str[i]
            }
        
        if(str[i] == ")") parenthesisCount--
    }
    return res
}

let  s = "(()())(())(()(()))"
console.log(removeParenthesis(s));
