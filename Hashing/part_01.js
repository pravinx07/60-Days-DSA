// function map(arr){
//     let mp = new Map()
    
//     for(let num of arr){
//         mp.set(num,(mp.get(num) || 0) + 1)
//     }
//     return mp
// }

// let arr = [1,2,3,4,2,1,3]
// console.log(map(arr));



let map = new Map()
map.set("Name","Pravin")
map.set("age",23)
map.set("Job","Hr")

console.log(map);

console.log(map.get("Name"),map.size)
console.log(map.has("Name"))
map.delete("Job")

map.forEach((key,val)=>{
    console.log(key, " => ", val);
    
})

for(let [key,valu] of map){
    console.log(`${key} => ${valu}`);
    
}

console.log(map);
map.clear()
console.log(map, map.size);


