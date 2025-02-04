// Closeres in Jvascript
//1. lexical scope

const { name } = require("ejs");

/*
global scope variables can access everyone in the scope
function scope variable only access in function not outside of function 
function inside function can access parent function variable but
child function cant access parent funct variable 
*/
// lexical scope
// use to access parent element to child element
/*
function myName(){
  // inner scope 2
let names = "ajay"
    function childFun(){
        //inner scope 1
        let num = 3
       console.log(names);
        
    }
    childFun()
    console.log(num);
    
}
myName()
*/

// scope chaning

let e = 10
function sum(a){
    return function(b){
        return function(c){
            // outer function scope
            return function(d){
                // local scope
                return a + b + c + d + e
            }
        }
    }
}
console.log(sum(1)(2)(3)(4));
