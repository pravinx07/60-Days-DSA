// write a func that takes a two parameter,
// a string and a character to count ,
// func should return the number of times the specified
// character appear in the string

/*
function countChar(str, char) {
    str = str.toLowerCase();
    char = char.toLowerCase();
    str = str.split("");
  
    //   str = str.map((item)=>item.char === "l")
  
    let count = 0;
    for (let i = 0; i <= str.length; i++) {
      // console.log(str[i]);
      if (str[i] === char) count++;
    }
    //   console.log(str);
    // console.log(count);
    return count;
  }
  
  console.log(countChar("helllo", "L"));
  */

//   write a program to access the keys of the objects using loop
/*
const myObj = {
    subject:"Math",
    mark:90,
    sem:"5th"
}

for(let key in myObj){
    console.log(key);
    
}
    */

// 3. write a program to check 2 obj are equal

 function objCheck(obj1,obj2){
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
    lName:"SDE3"

 }
 const obj2 = {
    name:"Pravin",
    lName:"SDE2"

 }


 let result = objCheck(obj1,obj2)
 console.log(result);
 