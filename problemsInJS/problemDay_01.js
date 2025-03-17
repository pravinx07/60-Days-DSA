// Merge two object

let obj1 = {
   a:23,
   b:45
   
}

let obj2 = {
    d:23,
    e:45
    
 }

 function mergeTwoObj(obj1,obj2){
    let merge = {...obj1, ...obj2}
    console.log(merge);
    
 }

 mergeTwoObj(obj1,obj2)
 mergeTwoObj({a:324,b:"object"},{e:23,w:"merge"})


//  merge two arrays 

let arr1 = [1,3,4,5,6]
let arr2 = [3,7,9,4,5]

function mergerArr(arr1,arr2){
    let mergeArrr = [...arr1, ...arr2]
    console.log(mergeArrr);
    
}

mergerArr(arr1,arr2)

mergerArr(["apple","banana","cherry"],["cake","peanut"])
mergerArr([1,3,4,5,6],[1,3,4,6,6])
