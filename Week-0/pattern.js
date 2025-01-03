function printStar(n){
    for(let i = 1; i <= n; i++){
        // print first row 
        let star = ""
        

        // each outer loop iteration , inner loop iterate n
        // after go back to outer loop for second iteration
        for(let j = 1; j <= n; j++){
            star = star + "*"   // this will add * in each iteration
        }
      console.log(star);
         
    }
    
}
// printStar(1)
// printStar(2)
// printStar(3)
// printStar(4)
printStar(5)


