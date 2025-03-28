// write a js function to count uppercase and lowercase 
//  letters in string

function countUpperAndLowerCase(str){
   
    const uppercase = str.match(/[A-Z]/g).length
    const lowercase = str.match(/[a-z]/g).length
   
    console.log(`{
        upperaCase:${uppercase}
        lowerCase:${lowercase}
    }`)
    
}

countUpperAndLowerCase("PraVIN")
countUpperAndLowerCase("Ajay")