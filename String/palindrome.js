//  125 palindrom


// var isPalindrome = function(s) {
    
//     let pattern = /[a-zA-Z]/;
//     let newStr = ""
    

//     for(let i = 0; i < s.length; i++){
//         if(pattern.test(s[i])){
//             newStr+=s[i].toLowerCase()
//         }
//     }

//     let reverse = newStr.split("").reverse().join('')
//     // console.log(reverse);

//     return reverse === newStr
    
    
// };

// let s = "A man, a plan, a canal: Panama"
// let s2 = "0P"
// console.log(isPalindrome(s2))


function checkPalindrome(s){
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


let s = "A man, a plan, a canal: Panama"
let s2 = "0P"
console.log(checkPalindrome(s2));

