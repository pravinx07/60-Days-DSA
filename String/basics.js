function countChar(s){
    let i = 0
    let count = 0;
    
    while(s[i] != undefined) {
        count++;
        i++;
    }
    return count;
}

let s = "Hello"
console.log(countChar(s));
