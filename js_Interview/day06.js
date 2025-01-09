// write a js function that counts the number of vowels in a given str

/*
 function vowelCount(str){
  str = str.toLowerCase()
//   console.log(str);
   let count = 0;
   let vowelPattern = /[aeiou]/g  // regex for vowels

   let vowels = str.match(vowelPattern)
   if(vowels){
    count = vowels.length
   }
   console.log(`Vowels in the given :${str} is :`, count);
   
   

  
 }
 vowelCount("c")
 vowelCount("i am pravin ")
 */

// write a js function that takes an str and convert into PascalCase

// function toPascal(stringg) {
//   // console.log(stringg);

//   let strArr = stringg.split(" ");
//   // console.log(strArr);

//   let upperLower = strArr.map(
//     (element) => element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()

    
//   );
//   let pascal = upperLower.join("")
//   console.log(`The given ${stringg} into CamalCase is : ` ,pascal);
// }
// toPascal("hello world");
// toPascal("pravin shegamwar")



// write a js funtion that takes array as a input and 
// calculate the avarage of those numbers

function avarageOfArr(arr){
  let lengthOfArr = arr.length
  let total = arr.reduce((accum, cur)=> accum + cur ,0 )
  return total / lengthOfArr
}
console.log(avarageOfArr([1,2,4,5]));
