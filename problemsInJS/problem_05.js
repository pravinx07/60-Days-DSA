// write a function to repeat a given string n times ,optinaly 
// converting it to uppercase or lowercase . if no case type is provide then 
// keep the string unchange

function repeatString(str,n,caseType){
    let repeated = str.repeat(n)

    if (caseType){
        if(caseType.toLowerCase() === "uppercase"){
            console.log(repeated.toUpperCase())
        }else if(caseType === "lowercase"){
            console.log(repeated.toLowerCase())

        }
    }else{
        console.log(repeated);
        
    }
   
    
}
repeatString("hello",3,"lowercase")
repeatString("javascript",3)

repeatString("hello",3,"uppercase")
repeatString("master",3,"UpperCase")