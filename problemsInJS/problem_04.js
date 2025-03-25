//  write a js function that takes a 
// string as an input and 
// return longest word in the string


function longestWord(str){
let strSplit = str.split(" ")

let wordsLength = strSplit.map((ele)=>ele.length)

let maxWord = Math.max(...wordsLength)
    console.log(`The max Word length of the string is: ${maxWord}`);
    
}

longestWord("I am a Men")
longestWord("Javascript is my Favourite Programming language")
