//  write a js function that checks if a given string starts and ends with same charecter


function isSameChar(str){
    
    
 if(str.length == 0){
    console.log(`The given string is empty`);
    
 }
 const isSame = str[0].toLowerCase() == str[str.length - 1].toLowerCase()
 if (isSame){
    console.log(`Yes! The give ${str} is starts and ends with same Charecter`);
    
 }else{
    console.log(`No! The give ${str} is starts and ends with same Charecter`);

 }
 
}

isSameChar("Ajay")
isSameChar("Madam")
isSameChar("madaM")
isSameChar("")