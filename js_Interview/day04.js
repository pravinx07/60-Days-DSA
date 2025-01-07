// write a function that take a number as a inp and
// check the given number is armstrong or not


// logic 
 /*
 each digit raise to power of total number of digits 
 and addition of this number is equal to that number
 ex 153 => 3 digit
  1^3 = 1
  5^3 = 125
  3^3 = 27
  now add this number 1 + 125 + 27 =  153
 */
/*
function checkArmstrong(number){
  // for total number of ditgit no. convert into string

  let numberString = number.toString()  // number to string for 
  
  let lengthOfStr = numberString.length

    let sum = 0
  for(let i = 0; i < lengthOfStr; i++){
      
    let digit = parseInt(numberString[i])  // string into number
    // console.log(digit);
    

    // math method
    // sum += digit ** lengthOfStr
    sum += Math.pow(digit,lengthOfStr)
    
  }
//   console.log(sum);
  if (sum === number) {
    console.log(`${number} is an Armstrong number`);  
  } else {
    console.log(`${number} is not an Armstrong number`);  
  }
}
checkArmstrong(153)
checkArmstrong(146)
checkArmstrong(9474)
*/



//  write a js function that checks if a given number is a palindrome

// palindrome => 141 => revers also same number  141 , 232 323 etc

// array have a reverse method that use to revers the array
// but input is number so convert this number inot array
// split("") it is string method for converting string to array 
// now convert this number into string so we can use split()

/*
function isPalindrome(n){
    let numstr = n.toString()  // convert to string 
    let reversStr = numstr.split("").reverse().join("")  // string to array , reverse the arr and join arr 
       
    // console.log(reversStr);
     
    //  console.log(numstr,reversStr);
     
    if(reversStr === numstr){
        console.log(`${n} is an Palindrome`);
        

    }else{
        console.log(`${n} is not an Palindrome`);
        
    }    
}

isPalindrome(121)
isPalindrome(1214)
*/
