/* What is recursion
   A function calling itself  until a specific condition is met 
   base condition => Condition that terminate recursion
   stackOverflow => stack is out of range means program is waiting in the stack for execution
   recursion tree => f() => <=f() =><= f() =><= f() base condition stop and went back
 */
  
function nTimesName(i,n){
    if(i > n) return
    // console.log(i)
    console.log("Pravin");
    
    
    nTimesName(i+1,n)
    
}

// console.log(nTimesName(1,3));
nTimesName(1,5)

