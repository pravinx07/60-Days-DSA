// 1. Write a program to add an element to the end of an array.

let students = ['pravin','Ajay','vijay']
students.push("Aj")
console.log(students);

// 2. Write a program to add an element to the beginning of an array.

let students = ['pravin','Ajay','vijay']
students.unshift("vjj")
console.log(students);

// 3. Write a program to remove an element from the end of an array.

let students = ["pravin", "Ajay", "vijay"];
students.pop()
console.log(students);

// 4. Write a program to remove an element from the beginning of an array.

students.shift()
console.log(students);

// 5. Write a program to find the length of an array.
 console.log(students.length);   // property that doesnt required () => length

// 6. Write a program to loop through all the elements of an array using a for loop.

for(let i = 0; i < students.length; i++){
    console.log(i,students[i]);
    
}

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
    
    
/ 14. Write a program to use the reduce() method to calculate the sum of an array of numbers.

let nums = [2,3,5,6,5]
let sum = nums.reduce((acc,cur)=> acc + cur , 0)
console.log(sum);

// double element
let double = nums.map((num)=>num * 2)
console.log(double);

// finding max value
let max = 0
for(let i = 0; i < nums.length; i++){
// let max = 0
if(nums[i] > max)
    max = nums[i]
}
console.log('Max:',max);









const arr = [1,2,4,5,6]

const myArr = arr.map(arr => arr*2)
console.log(myArr);

const newName =["hello", "world", "javascript"]

let myname = newName.map(newName=> newName.toUpperCase())
console.log(myname);

const people = [
    {name:"Alice", age:21},
    {name:"Bob", age:30},
    {name:"Charlie", age :32}

]

const myPeople = people.map(people=> people.name.toUpperCase())


const number = [1,2,3,4,5,6,7,8,9,10]

const muNumber = number.map(number=>number*number)
console.log(muNumber)


const string = ["hello", "world", "javascript"]

const myNewString = string.map(string=> string + "!")
console.log(myNewString);

const num = [1,2,3,4,5]

const sum = num.reduce((acc, curr)=> acc+curr)

console.log(sum);

const num =[1,3,4,5,6]

const myNum = num.reduce((sum, num)=> sum+num,0)
console.log(myNum);


const num = [1,2,3,4,5]

const myNum = num.reduce((mul,num)=>mul*num,3
)

console.log(myNum);

const num = [3,4,2,6,9]

const maxNum = num.reduce((max,num)=> (num>max?num:max),10)
console.log(maxNum);

const arr = [[1,3],[4,5],[9,4],[3,4]]

const mynew = arr.reduce((mix,arr)=> mix.concat(arr))
console.log(mynew);

const arr = [[1,4],[3,5],[5,4],5,6]

const myArr = arr.reduce((mix,arr)=>mix.concat(arr))
console.log(myArr);

const num = [2,4,1,4,5,9,7]

const myNum = num.reduce((evn,num)=>evn+num)
console.log(myNum);

const num = [1,2,3,4,5]
const double = num.map(num=>num*num)
console.log(double);

const string = ["hello", "world","javascrpt"]
let myString = string.map(string=>string.toUpperCase())
console.log(myString);

const  string = [
    {name:"Alice",age:32},
    {name:"bob", age:21},
    {name:"Charlie",age:32}
]

const myString = string.map(string=>string.name)
console.log(myString);

const num = [1,2,4,5,6]
 const sqr = num.map(num=>num*num)
 console.log(sqr);

const string = ["hello","world","js"]
let myStr = string.map(string=>string+"!")
console.log(myStr);

