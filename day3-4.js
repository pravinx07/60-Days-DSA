// write a js function that calc the factorial of any given number
// ex 4 => 4 * 3 * 2 * 1


function factorialOfNumber(number){
    let result = 1

    for(let i = 1; i <= number; i++){
        
        result *= i
        
    }        // dry run i=1 1<=5 
             // 1 * 1 = 1
             // i = 2  2<=5
             // 2 * 1 = result = 2
             /*
                i =3 i <=5 
                result = 2 * 3 = 6

                i = 4 i <= 5
                result = 6 * 4 = 24
                i = 5 i <= 5
                reasult = 5 * 24 = 120

                i = 6 i<=5 false  terminate the loop
                ans = 120
                */
              
            
  console.log(`The factorial of ${number} is :`,result);
  

}
factorialOfNumber(5)


/*write a js function that  generate a fibonacci sequence,
 starting from two given numbers 
 and output a specified number of terms
 */

// what is fibonacci => given any two no.
// 0,1 :- add this two no. 0 + 1 = 1
// now add 1 + 1 = 2 then 1 + 2 = 3 then 2 + 3 = 5 so on
// like 0,1,1,2,3,5,8,13.. so on  to given number


 function fiboNacci(n1, n2, terms){
     let first = n1;
     let second = n2;
     let next ;



     /* logic
       0 first
       1 second  f
       1  next  s  f
       2           n s  f
       3             n  s  f
       5               n   s  f
       8                 n  

       n1 = 0 n2 = 1 n = n1 + n2
       n1 = n2 n2 = n  n = n1 + n2
       n1 = n2 n2 = n 
      */
     let series = []
     for(let i = 1; i <= terms; i++){
        // console.log(first);
        
        series.push(first)        // puesh in array
        next = first + second
        first = second;
        second = next
        
     }

    //  console.log(next);
    console.log(...series);   
    
     
 }
 fiboNacci(0,1,6)
 fiboNacci(2,1,2)


// write a func that takes a two parameter,
// a string and a character to count ,
// func should return the number of times the specified
// character appear in the string


function countChar(str, char) {
  str = str.toLowerCase();
  char = char.toLowerCase();
  str = str.split("");

  //   str = str.map((item)=>item.char === "l")

  let count = 0;
  for (let i = 0; i <= str.length; i++) {
    // console.log(str[i]);
    if (str[i] === char) count++;
  }
  //   console.log(str);
  // console.log(count);
  return count;
}

console.log(countChar("hellllo", "L"));



// write a js function that takes a three parameter and 
// return a string indicating the type of triangle
// if three are same  => "equilateral triangle"
// ii two are same => return "isoscale trianlge"
// if all three are diffrent sides => "scalene"


function checkTriangleType(a1,a2,a3){
    if(a1 === a2 && a2 === a3) return "Equilateral";
    if(a1 === a2 || a1 === a3 || a2 === a3) return "Isosceles"
    if(a1 !== a2 || a2 !== a3 || a1 !== a3) return "Scalene"
}

console.log(checkTriangleType(1,1,1));
console.log(checkTriangleType(1,1,6));
console.log(checkTriangleType(1,2,3));




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
  
  
  
  
  //  write a js function that checks if a given number is a palindrome
  
  // palindrome => 141 => revers also same number  141 , 232 323 etc
  
  // array have a reverse method that use to revers the array
  // but input is number so convert this number inot array
  // split("") it is string method for converting string to array 
  // now convert this number into string so we can use split()
  
  
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
  
  