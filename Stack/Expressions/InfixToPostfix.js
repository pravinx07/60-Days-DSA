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
// console.log(infixToPost(ex));
// console.log(infixToPost(ex2));
// console.log(infixToPost(ex3));
// console.log(infixToPost(ex4));
// console.log(infixToPost(ex5));
// console.log(infixToPost(ex6));

/*
A + (B * C)

(A+B)*(C+D)

A+B*C-D

A*(B+C*D)-E

(A+B*C)^D*/

// infix to prefix conversion

function reverseS(str) {
  return str
    .split("")
    .reverse()
    .map((char) => {
      if (char === "(") return ")";
      if (char === ")") return "(";
      return char;
    })
    .join("");
}

function infixToPostfix(e) {
  const precedance = { "+": 1, "-": 1, "*": 2, "/": 2, "^": 3 };
  const isRightAssociative = (ch) => ch === "^";
  const isOperator = (c) => ["+", "-", "*", "/", "^"].includes(c);
  const isOperand = (c) => /[A-Za-z0-9]/.test(c);
  let stack = [];
  let output = "";

  for (let i = 0; i < e.length; i++) {
    token = e[i];
    if (token === " ") continue;

    if (isOperand(token)) {
      output += token;
    } else if (token === "(") {
      stack.push(token);
    } else if (token === ")") {
      while (stack.length && stack[stack.length - 1] !== "(") {
        output += stack.pop();
      }
      stack.pop();
    } else if (isOperator(token)) {
      while (
        stack.length &&
        isOperator(stack[stack.length - 1]) &&
        ((!isRightAssociative(token) &&
          precedance[token] <= precedance[stack[stack.length - 1]]) ||
          (isRightAssociative(token) &&
            precedance[token] < precedance[stack[stack.length - 1]]))
      ) {
        output += stack.pop()
      }
      stack.push(token)
    }
  }
  while(stack.length){
    output += stack.pop()
  }


  return output
}


function infixToPrefix(infix){
    let revserIn = reverseS(infix);
    let postfix = infixToPostfix(revserIn)
    return reverseS(postfix)
}


// const e = "A+B*C"
// console.log(infixToPrefix(e));                 // +A*BC
// console.log(infixToPrefix("(A+B)*(C-D)"));           // *+AB-CD
// console.log(infixToPrefix("A+B*C-D"));               // -+A*BC D
// console.log(infixToPrefix("a+b*(c^d-e)^(f+g*h)-i")); // -+a*b^-^cde+f*ghi




// postfix to infix

function postfixToInfix(pEx){
  let stack = []
  const isOperator = (ch) => ['+', '-', '*', '/', '^'].includes(ch);

  for(let i = 0; i < pEx.length; i++){
    const ch = pEx[i]
    if(ch === " ") continue;

    if(/[a-zA-Z0-9]/.test(ch)){
      stack.push(ch)
    }else if(isOperator(ch)){
      let right = stack.pop()
      let left = stack.pop()
      let ex = `(${left}${ch}${right})`
      stack.push(ex)
    }

  }
  return stack.pop()
}

// console.log(postfixToInfix("ab+c*"));         // ((a + b) * c)
// console.log(postfixToInfix("abc*+d-"));       // ((a + (b * c)) - d)
// console.log(postfixToInfix("ab+cd+*"));       // ((a + b) * (c + d))


// Prefix to Infix 

function prefixToInfix(ex){
   let stack = []
  const isOperator = (ch) => ['+', '-', '*', '/', '^'].includes(ch);

  for(let i = ex.length - 1; i >= 0; i--){
    const ch = ex[i]

    if(ch === " ") continue;

    if(/[a-zA-Z0-9]/.test(ch)){
      stack.push(ch)
    }else if(isOperator(ch)){
      const left = stack.pop();
      let right = stack.pop()
      let ex = `(${left}${ch}${right})`
      stack.push(ex)
    }
  }
  return stack.pop()
}

// console.log(prefixToInfix("-+a*bc d"));          // ((a + (b * c)) - d)
// console.log(prefixToInfix("*+ab+cd"));           // ((a + b) * (c + d))
// console.log(prefixToInfix("+a*bc"));             // (a + (b * c))
// console.log(prefixToInfix("-+a*b^-^cde+f*ghi")); // ((a + (b * ((c ^ d - e) ^ (f + (g * h))))) - i)


// postfix to prefix


function postfixToPrefix(ex){
   let stack = []
  const isOperator = (ch) => ['+', '-', '*', '/', '^'].includes(ch);

  for(let i = 0; i < ex.length; i++){
    const ch = ex[i]

    if(ch === " ") continue;

    if(/[a-zA-Z0-9]/.test(ch)){
      stack.push(ch)
    }else if(isOperator(ch)){
      let right = stack.pop()
      const left = stack.pop();
      let ex = ch + left + right
      stack.push(ex)
    }
  }
  return stack.pop()
}

// console.log(postfixToPrefix("ab+c*"));        // *+abc
// console.log(postfixToPrefix("ab+cd+*"));      // *+ab+cd
// console.log(postfixToPrefix("abc*+d-"));      // -+a*bc d
// console.log(postfixToPrefix("abc^d-e-fgh*+^*+i-")); // -+a*b^-^cde+f*ghi


function prefixToPostfix(prefix) {
  const stack = [];
  const isOperator = (ch) => ['+', '-', '*', '/', '^'].includes(ch);

  for (let i = prefix.length - 1; i >= 0; i--) {
    const ch = prefix[i];
    if (ch === ' ') continue;

    if (/[a-zA-Z0-9]/.test(ch)) {
      stack.push(ch);
    } else if (isOperator(ch)) {
      const left = stack.pop();
      const right = stack.pop();
      const expr = left + right + ch;
      stack.push(expr);
    }
  }

  return stack.pop();
}

// Test cases
console.log(prefixToPostfix("+a*bc"));           // abc*+
console.log(prefixToPostfix("*+ab+cd"));         // ab+cd+*
console.log(prefixToPostfix("-+a*bc d"));        // abc*+d-
console.log(prefixToPostfix("-+a*b^-^cde+f*ghi")); // abc*de^-fgh*+^-+i-
