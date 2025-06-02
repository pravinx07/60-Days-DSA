function map(arr){
    let mp = new Map()
    
    for(let num of arr){
        mp.set(num,(mp.get(num) || 0) + 1)
    }
    return mp
}

let arr = [1,2,3,4]
console.log(map(arr));



