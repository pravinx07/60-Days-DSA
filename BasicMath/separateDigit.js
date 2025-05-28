/* separate all digit from the number 
ex=> 7789 => 7,7,8,9 */


function separateDigit(n){
    let count = 0
    while(n > 0){
        
        let lastDigit = (n % 10)
        n = Math.floor(n / 10)
        count += 1
        // console.log(lastDigit);
        // console.log(n);
        
    }
    return count

//     let count = Math.ceil(Math.log10(n))
//     return count
}

console.log(separateDigit(7789));

