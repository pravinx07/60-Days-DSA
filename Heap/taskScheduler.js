/*621. Task Scheduler
You are given an array of CPU tasks, each labeled with a letter from A to Z,
 and a number n. Each CPU interval can be idle or allow the completion of one task.
  Tasks can be completed in any order, but there's a constraint: there has to be a gap of at 
  least n intervals between two tasks with the same label.
Return the minimum number of CPU intervals required to complete all tasks.
Example 1:
Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A possible sequence is: A -> B -> idle -> A -> B -> idle -> A -> B.
After completing task A, you must wait two intervals before doing A again. The same applies to task B. 
In the 3rd interval, neither A nor B can be done, 
so you idle. By the 4th interval, you can do A again as 2 intervals have passed. */


function taskSchecduler(tasks, n){
    let mp = new Map()

    for(let task of tasks){
        mp.set(task, (mp.get(task) || 0) + 1)
    }

    const maxHeap = Array.from(mp.values())

    maxHeap.sort((a, b) => b - a);

    let time = 0

    while(maxHeap.length > 0){
        let temp = []

        for(let i = 0; i <= n; i++){
            if(maxHeap.length > 0){
                let cur = maxHeap.shift()
                if(cur > 1){
                    temp.push(cur - 1)
                }
            }
            time++;
            if(maxHeap.length == 0 && temp.length === 0) break;
        }

        maxHeap.push(...temp)
        maxHeap.sort((a, b) => b - a)
    }

    return time
}

let tasks = ["A","A","A","B","B","B"], n = 2
let  tasks2 = ["A","C","A","B","D","B"], n2 = 1
console.log(taskSchecduler(tasks2, n2));
