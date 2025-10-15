/*
621. Task Scheduler
Return the minimum number of CPU intervals required to complete all tasks.
Example 1:
Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.
After completing task A, you must wait two intervals before doing A again. 
The same applies to task B. In the 3rd interval, neither A nor B can be done, 
so you idle. By the 4th interval, you can do A again as 2 intervals have passed.

Input: tasks = ["A","A","A", "B","B","B"], n = 3
Output: 10
Explanation: A possible sequence is: A -> B -> idle -> idle -> A -> B -> idle -> idle -> A -> B.
There are only two types of tasks, A and B, which need to be separated by 3 intervals. 
This leads to idling twice between repetitions of these tasks.


formula = (n + 1 * maxFreq - 1) + countMaxFreq

 */

let leastInterval = (tasks,n)=> {
    let freq = Array(26).fill(0)
    // console.log(freq);
    let maxFreq = 0;
    for(let i = 0; i < tasks.length; i++){
        let curr = tasks[i].charCodeAt() - 65;
        freq[curr]++;
        maxFreq = Math.max(maxFreq, freq[curr])
    }

    let countMaxFreq = 0;

    for(let i = 0; i < 26; i++){
        if(freq[i] === maxFreq){
            countMaxFreq++
        }
    }

    let cycles = ((n + 1) * (maxFreq - 1)) + countMaxFreq

    return Math.max(tasks.length , cycles)
    
}

let tasks = ["A","A","A","B","B","B"], n = 2
console.log(leastInterval(tasks,n));
