/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II. */

var romanToInt = function(s) {
    let roman = {"I":1,"V":5,"X":10,"L":50,"C":100,"D":500,"M":1000}
     let res = 0
     for(let  i = 0; i < s.length; i++){
        if( i + 1 < s.length && roman[s[i]] < roman[s[i + 1]]){
            res -= roman[s[i]]
        }else{
            res += roman[s[i]]
        }
     }
     return res;
};

// let result = romanToInt("III")
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))
