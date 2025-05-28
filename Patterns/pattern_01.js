function pattern(n){
    for(let i = 1; i <= n; i++){
        let res =""
        for(let j = 1; j <= i; j++){
            res = res + j
            console.log(res, " ");
        }
        console.log();
        
    }
}

pattern(3)