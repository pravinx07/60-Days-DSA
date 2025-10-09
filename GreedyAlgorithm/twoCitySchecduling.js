/*
1029. Two City Scheduling
A company is planning to interview 2n people. 
Given the array costs where costs[i] = [aCosti, bCosti], 
the cost of flying the ith person to city a is aCosti, 
and the cost of flying the ith person to city b is bCosti.

Return the minimum cost to fly every person 
to a city such that exactly n people arrive in each city.
Example 1:

Input: costs = [[10,20],[30,200],[400,50],[30,20]]
Output: 110
Explanation: 
The first person goes to city A for a cost of 10.
The second person goes to city A for a cost of 30.
The third person goes to city B for a cost of 50.
The fourth person goes to city B for a cost of 20.

The total minimum cost is 10 + 30 + 50 + 20 = 110 
to have half the people interviewing in each city.

 */

function twoCitySchedCost(costs){
    costs.sort((a,b) => ((a[0] - a[1]) - (b[0] - b[1])))
    let totol = 0;
   let n = costs.length / 2;

   for(let i = 0; i < n; i++){
    totol += costs[i][0]
   }

   for(let i = n; i < 2 * n; i++){
     totol += costs[i][1]
   }
   return totol;
    

}

let costs = [[10,20],[30,200],[400,50],[30,20]]
let costs2 = [[259,770],[448,54],[926,667],[184,139],[840,118],[577,469]]
console.log(twoCitySchedCost(costs2));
