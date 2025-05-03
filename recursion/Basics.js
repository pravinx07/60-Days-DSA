/* What is recursion
   A function calling itself  until a specific condition is met 
   base condition => Condition that terminate recursion
   stackOverflow => stack is out of range means program is waiting in the stack for execution
   recursion tree => f() => <=f() =><= f() =><= f() base condition stop and went back
 */

   /*
   function nTimes(n){
    console.log("Printed",n);
    
    n+=1
    setTimeout(()=>nTimes(2,),1000)
   }

   nTimes()
   */


function nTimesName(i,name){
    if(name > i) return
    nTimesName()
    i++
}

console.log(nTimesName(3,"Pravin"));

