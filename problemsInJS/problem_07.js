// write a js function to reverse each word
//  individually but maintain the word order  not entire sentence

// "welcome to javascript" = > "emoclew ot tpircsavaj"

function reverseWord(str)
{
    if(str.trim().length == 0){
        console.log("String is empty");
        return
    }
    const array = str.split(" ")
    console.log(array);
    
     const newArr = array.map((ele)=>ele.split("").reverse().join(""))
     const reverseSent = newArr.join(" ")
     console.log(`The reverse Sentence of ${str}: ${reverseSent}`);
     
     
    
}

reverseWord("welcome to javascript")
reverseWord("madam nayan")
reverseWord("")

