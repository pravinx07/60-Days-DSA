// infix to postfix


function infixToPostfix(expression){
    let precedance = {"+":1,"-":1,"*":2,"/":2,"^":3};
    let stack = [];
    let result = '';

    for(let char of expression){
        // if the char is an operand add it to result

        if(/[A-Za-z0-9]/.test(char)){
            result = result + char
        }

        // If the character is an opening parenthesis, push to stack
        else if(char === "("){
            stack.push(char)
        }

         // if the character is a closing parenthisis, pop till '("
        else if(char === ")"){
            while(stack.length && stack[stack.length - 1] !== "("){
                result += stack.pop()
            }
            stack.pop()
        }

        else{
            while(stack.length && precedance[stack[stack.length - 1]] >= precedance[char]){
                result += stack.pop()
            }
            stack.push(char)
        }
    }
     // Pop remaining operators from stack
    while(stack.length){
        result += stack.pop()
    }
    return result
}

let infix = "A+B*(C^D-E)";
console.log(infixToPostfix(infix));
