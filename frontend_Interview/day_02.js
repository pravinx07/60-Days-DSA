// map filter and reduce

// what is map
//   create a copy of existing array and take cb as a arg 
//   and perform specific task
const nums = [1,2,3,4];
// const mul = nums.map(item=>item*2)
// console.log(mul);

// filter 
// perform conditional task on array

// const even = nums.filter((item)=>{
//    return item % 2 === 0
// })
// console.log(even);

// reduce method
// take cb and cb arg is accumulator and current 
// accumlator is previous calculation and current is current value \
// and also take inital value after callback and accumulator take inital value also


// const red = nums.reduce((accumulator,current)=>{
//    return accumulator + current
// },2)

// console.log(red);


// polyfill for map() => from scratch
/*
Array.prototype.myMap = function(cb){
    let temp = [];
    for(let i = 0; i < this.length; i++){
        temp.push(cb(this[i],i,this))  
    }
    return temp;
}

const newMap = nums.myMap((item)=>{
    return item * 5;
})

console.log(newMap);
*/

Array.prototype.myFilter = function(cb){
    let temp = []
    for (let i = 0; i < this.length; i++) {
        if(cb(this[i],i,this)) return temp.push(cb(this[i]))
    }

} 