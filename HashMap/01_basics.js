/*
leran about Hashmap and how to build it;
*/


let map = new Map()

map.set("name","Pravin")
map.set("age",23)
console.log(map.get("name"));
console.log(map.has("name"));
console.log(map.get("age"));
console.log(map.values())

console.log(map.size);


for(let [key, value] of map){
    console.log(key, value);
    
}

