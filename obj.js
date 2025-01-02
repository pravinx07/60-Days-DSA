// for in loop for object



// write a program to access the keys of the objects using loop
/*const myObj = {
    subject:"Math",
    mark:90,
    sem:"5th"
}

for(let key in myObj){
    console.log(key);
    
}*/



// write a program to access the keys of the objects using loop
  

/*const data = {
    name:"Pravin",
    roll:23,
    class:"5th sem IT",
    subject:"DSA"
}

for(let key in data){
    let value = data[key] // have keys value in VAR value 

    console.log("key:",key,"Value:",value);
    
}
*/

// write a program to create an object from an object using loop


/*const data2 = {
    name:"Pravin",
    roll:23,
    class:"5th sem IT",
    subject:"DSA"
}

console.log(data2[name]);

const data3 = {}

for(let key in data2){
   let value = data2["key"]
   
}*/

// console.log("your new object is ",data3);


// spread operator
// uses 
// 1. agar kisi array ko intial data type hatana hai to iska use hota hai [...arrayName]
//2. for joining 2 arrays [...arr1 , arr2]

// write a program to join two objects 

/*
const grade = {
    math:"A",
    science:"A+",
    history:"B"


}
const student = {
    grade : grade,
    name:"Ajay",
    roll:23
}

console.log(student);
*/


//1. write a program to count the occurence of each character in a string


/*function countOccurences(string){
    let count = {}
  for(let key of string){
     count[key] = (count[key] || 0) + 1
    
  }
  return count;
}
const result = countOccurences("pravin")
console.log(result);*/


// 1. write a program to merg 2 obj



// 3. write a program to check 2 obj are equal

 /*function objCheck(obj1,obj2){
  let keys1 = Object.keys(obj1)
  let keys2 = Object.keys(obj2)
//   console.log(keys1,keys2);

  if(keys1.length !== keys2.length) return false;
 
  for(let key in obj1){
    if(obj1[key] !== obj2[key]) return false
  }
  
 
   return true;
 }

 const obj1 = {
    name:"Pravin",
    lName:"SDE2"

 }
 const obj2 = {
    name:"Pravin",
    lName:"SDE2"

 }


 let result = objCheck(obj1,obj2)
 console.log(result);
 */

 // 4. write a program to invert the keys and valuez on obj
// 
 /*function invertObj(obj){
    let inverted = {}

    for(let key in obj){
        let value = obj[key]
       inverted[value] = key
       
    }
    return inverted;

 }

 const obj = {
    roll:234,
    price:344
 }

 const result1 = invertObj(obj)
 console.log(result1);
 */

 // 5. write a program to remove falsy value from the obj
 /*
 function removeFalsyValue(obj){
    const newObj = {}

    for(let key in obj){
        let value = obj[key]
        if(value){
           newObj[key] = value
        }
    }
    return newObj;
 }

 const obj = {
    userName:"admin",
    password:12345,
    isLoggedIn:false,
    status:"active",
    amont:0
 }


 const result = removeFalsyValue(obj)
 console.log(result);
 */

 // 6. write a program to add aal value of the obj

 /*function sumOfObj(obj){
    let sum = 0;
    for(let key in obj){
        let value = obj[key]
        sum += value
    }
    return sum;
 }

 const obj = {
    a:12,
    b:1,
    c:5,
    d:10,
    e:20
 }

 const result = sumOfObj(obj)
 console.log(result);
 */

 // 7. write a program to check object is empty or not
/*
 function emptyObj(obj){

    let arr = Object.keys(obj)
    // console.log(arr);
    if(arr.length == []) return false
    else return true
    // for(let key in obj){
    //   console.log(key);
      
    // }
 }

 const obj1 = {name:"Pravin"}
 const obj = {}
 console.log(emptyObj(obj));
 console.log(emptyObj(obj1));*/
 

 // 8. write a program to return the keys of any obj as an array
/*
 function objKey(obj){
    // return Object.keys(obj)

    let arr = []
    for(let key in obj){
        arr.push(key)

    }
    return arr
 }

 const obj = {
    name:"Pravin",
    age:12,
    email:"ajay@.com",
    isLogged:true
 }

 console.log(objKey(obj));*/
 

 // 9. write a program to count numbers of keys in obj

 /*function counKeys(obj){
    // let arr = Object.keys(obj)
    // return arr.length
    //  let count = 0
    // for(let key in obj){
    //    count += 1
    // }
    // return count

    let arr = []
    for(let key in obj){
        arr.push(key)
    }
    return arr.length
 }

 const obj = {
    name:"Pravin",
    age:12,
    email:"ajay@.com",
    isLogged:true
 }

 let result = counKeys(obj)
 console.log(result);
 */

// 10. write a program to find highest value in the obj

// function findMaxValue(obj)
// {
//     let max = 0
//   for(let key in obj){
    
//     let value = obj[key]
//     if(value > max) {
//         max = value
//     }
    
//   }
//   return max
// }

// const obj = {
//     a:2,
//     b:1,
//     c:5,
//     d:10,
//     e:20
//  }

//  let result = findMaxValue(obj)
//  console.log(result);
 


// for(let i = 1; i <= 10; i ++){
//   console.log(`Outer Loop ${i}`);
//   for(let j = 1; j <=10; j++){
//    console.log(i + "*" + j + "=" + i * j);
   
//   }
  
   
// }

// const myArr = ["Pravin","ajay","vijay","raj","priya"]

// for(let i = 0; i < myArr.length; i++){
//    console.log(myArr[i]);
//    if(myArr[i] === "ajay"){
//       // console.log(myArr[i]);
//       break
      
//    }
//    // console.log(myArr[i]);
   
   
// }

// for(let i = 1; i <= 100; i++){
//    let sum = 0
//    sum = sum + i
//    console.log(sum);
   
// }


for(let i = 0; i < 5; i++){
   console.log(i++);
   
}

let i = 0;
while (i < 10) {
    console.log(i);
}
