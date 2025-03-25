//  write a js function that check one string is a substring of another string
// str => "Hello Welcome to 100days of code"
// substr = "Welcome"
// substr = "code"

// exist  = true
// not exist = false

// include 

function isString(str,subStr){
    let result = str.toLowerCase().includes(subStr.toLowerCase())
    // console.log(result);
    if (result) {
        console.log(`Yes ${subStr} is a substring of ${str}`);
        
    }
    else {
        console.log(`No ${subStr} is not substring of ${str}`);
        
    }
} 

const mainStr = "Hello Welcome to 100days of code"
const subString = "CODEed"
isString(mainStr,subString)