// write a function that takes a string as a input
// and find longest word in the string

function longestWord(str){
    if(str.trim().length === 0) return false
    
   let words = str.split(" ")
//     words = words.sort((a,b)=>{
//         b.length - a.length
//         // console.log(a)
//         // console.log(b);
//         // console.log(a.length);
//         console.log(a);
        
        
//     })
//     return words.at(-1)
// //    console.log(words);
return words.reduce((acc,cur)=> cur.length > acc.length? cur:acc)
   
   
}
console.log(longestWord("I am pravin Shegamwar"));



// 02 write a js function to find all the factors of a given number 

function findFactor(number){
    let factor = []
  for(let i = 1; i <= 12; i++){
    // if(number % i == 0) console.log(i);

    if(number % i == 0){
       factor.push(i)
    }
        
        
  }
  console.log(`Factors of a number ${number}:- `,...factor);
  
  
  /// join method 
  console.log(`Factors of a number ${number}:- `,factor.join(" "));
  // join saperate by ,
  console.log(`Factors of a number ${number}:- `, factor.join(", "));
  
}
findFactor(12)
findFactor(5)
findFactor(10)