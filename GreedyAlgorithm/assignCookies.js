/*
455. Assign Cookies
Assume you are an awesome parent and 
want to give your children some cookies. 
But, you should give each child at most one cookie.

Example 1:

Input: g = [1,2,3], s = [1,1]
Output: 1
Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
You need to output 1.
*/

function assignCookies(g,s){
    s.sort((a,b) => a - b)
    g.sort((a,b) => a - b)

    let i = 0;
     let j = 0;
     let count = 0

     while(i < s.length && j < g.length){
        if(s[i] >= g[i]){
            count++;
            i++;
            j++;
        }else{
            i++
        }
     }
     return count;
}

let g = [1,2,3]
let s = [1,1]

console.log(assignCookies(g,s));
