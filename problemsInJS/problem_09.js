// write a js function that count how many time the 
// charecter are appear in a given string or a charecter\

function countAppearance(str,char){

//  str = str.split("")
//  count = 0
//  for(let i in str){
//     if(str[i] === char){
//         count++
//     }
//  }
//  console.log(count);
 
let occurances = str.split(char).length-1
console.log(`The number of accourances of ${char} in the given string is: ${occurances}`);



}

countAppearance("praviiin","i")
countAppearance("praviiinnnnnnns","n")