/*conver infix to postfix */


function infixToPost(e){
    const precedance = {"+":1, "-":1, "*":2, "/":2, "^":3}
    let stack = []
    let output = ""

    for(let i = 0; i < e.length; i++){
        let ch = e[i]
        if(/[A-Za-z0-9]/.test(ch)){
            output += ch
        }else if(ch === "("){
            stack.push(ch)
        }else if(ch === ")"){
            while(stack.length && stack[stack.length - 1] !== "("){
                output += stack.pop()
            }
            stack.pop()   // remove '('
        }else {
            while(stack.length && precedance[ch] <= precedance[stack[stack.length - 1]]){
                output += stack.pop()
            }
            stack.push(ch)
        }
    }

    while(stack.length){
        output += stack.pop()
    }
    return output
}


let ex = "A+(B*C)"
let ex2 = "(A+B)*(C+D)"
let ex3 = "A+B*C-D"
let ex4 = "A*(B+C*D)-E"
let ex5 = "(A+B*C)^D"
let ex6 = "a+b*(c^d-e)^(f+g*h)-i"
console.log(infixToPost(ex));
console.log(infixToPost(ex2));
console.log(infixToPost(ex3));
console.log(infixToPost(ex4));
console.log(infixToPost(ex5));
console.log(infixToPost(ex6));



/*
A + (B * C)

(A+B)*(C+D)

A+B*C-D

A*(B+C*D)-E

(A+B*C)^D*/