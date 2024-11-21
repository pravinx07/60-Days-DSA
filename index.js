// 1. Write a program to add an element to the end of an array.
/*
let students = ['pravin','Ajay','vijay']
students.push("Aj")
console.log(students);*/

const e = require("express");

// 2. Write a program to add an element to the beginning of an array.

/*let students = ['pravin','Ajay','vijay']
students.unshift("vjj")
console.log(students);*/

// 3. Write a program to remove an element from the end of an array.

let students = ["pravin", "Ajay", "vijay"];
/*students.pop()
console.log(students);*/

// 4. Write a program to remove an element from the beginning of an array.

/*students.shift()
console.log(students);*/

// 5. Write a program to find the length of an array.
// console.log(students.length);   // property that doesnt required () => length

// 6. Write a program to loop through all the elements of an array using a for loop.

/*for(let i = 0; i < students.length; i++){
    console.log(i,students[i]);
    
}
*/

// 7. Write a program to loop through all the elements of an array using a for...of loop.

for(let element of students){
    console.log(element);
    
}

// 8. Write a program to loop through all the elements of an array using the forEach method.
students.forEach(element => {    //use callback function
    console.log(element);
    
});

// 9. Write a program to modify an element in the array by its index.

students[0] = 'Pravin07'
console.log(students);


// 10. Write a program to check if an element exists in an array.
console.log(students.includes('pravin'));

// 11. Write a program to find the index of an element in an array
console.log(students.indexOf("vijay"));

// 12. Write a program to create a new array using the map() method, where each element is doubled.

let num = [1,2,3,4,5]
let double = num.map((item)=>item*2)   //map required callback 
    console.log(double);

    // var names = ['ajay','pravin','vijay']

     var nameCap = names.map((name)=>name.toUpperCase())
    console.log(nameCap);
    
    
    // 13. Write a program to create a new array using the filter() method, containing only even numbers from a given array.

    var nums = [1,2,4,5,6,7,8]
    let even = nums.filter((num)=>num % 2 == 0)
    console.log(even);
    
    