function printStar(n){
    for(let row = 1; row <= n; row ++){
        let star = ''
         

        // diff in 1 in this is (col <= row)
        
        for(let col = 1; col <= n - row + 1; col ++){
            star += "*"
        }
        console.log(star);
        
    }
}

printStar(4)