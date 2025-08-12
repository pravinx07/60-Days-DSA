//  125 palindrom


var isPalindrome = function(s) {
    
    let pattern = /[a-zA-Z]/;
    let newStr = ""
    

    for(let i = 0; i < s.length; i++){
        if(pattern.test(s[i])){
            newStr+=s[i].toLowerCase()
        }
    }

    let reverse = newStr.split("").reverse().join('')
    // console.log(reverse);

    return reverse === newStr
    
    
};

let s = "A man, a plan, a canal: Panama"
let s2 = "0P"
console.log(isPalindrome(s2))