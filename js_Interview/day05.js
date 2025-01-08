// write a function that calculates the 
// sum of the digits of a given number

// 237 => 2 + 3 + 7 = 12

function sumOfDigits(number){
  let numstr = number.toString().split("")
//   console.log(numstr);
//   console.log(numArr);

  let arrLength = numstr.length;
   let sum = 0
  for(let i = 0; i < arrLength; i++){
    
    // console.log(numArr[i]);

    sum += parseInt(numstr[i])
    
    
  }
  console.log(`The sum of the digits of a  ${number} is : `,sum);
  
  
}
sumOfDigits(12345)
sumOfDigits(104)